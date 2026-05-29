import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const W = mount.clientWidth
    const H = mount.clientHeight

    /* ── Renderer ── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    /* ── Scene & Camera ── */
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(70, W / H, 0.1, 100)
    camera.position.set(0, 0, 6)

    /* ── Helpers ── */
    const hex = s => new THREE.Color(s)

    /* ── 1. Icosahedron wireframe ── */
    const icoGeo = new THREE.IcosahedronGeometry(2.2, 1)
    const icoMat = new THREE.MeshBasicMaterial({ color: hex('#FF6B00'), wireframe: true, transparent: true, opacity: 0.18 })
    const ico = new THREE.Mesh(icoGeo, icoMat)
    scene.add(ico)

    /* ── 2. Inner small icosahedron ── */
    const icoGeo2 = new THREE.IcosahedronGeometry(1.1, 0)
    const icoMat2 = new THREE.MeshBasicMaterial({ color: hex('#7C3AED'), wireframe: true, transparent: true, opacity: 0.25 })
    const ico2 = new THREE.Mesh(icoGeo2, icoMat2)
    scene.add(ico2)

    /* ── 3. Torus ring 1 ── */
    const tGeo1 = new THREE.TorusGeometry(3.2, 0.012, 6, 120)
    const tMat1 = new THREE.MeshBasicMaterial({ color: hex('#EC4899'), transparent: true, opacity: 0.22 })
    const torus1 = new THREE.Mesh(tGeo1, tMat1)
    torus1.rotation.x = Math.PI / 4
    scene.add(torus1)

    /* ── 4. Torus ring 2 ── */
    const tGeo2 = new THREE.TorusGeometry(3.8, 0.008, 6, 120)
    const tMat2 = new THREE.MeshBasicMaterial({ color: hex('#3B82F6'), transparent: true, opacity: 0.18 })
    const torus2 = new THREE.Mesh(tGeo2, tMat2)
    torus2.rotation.y = Math.PI / 3
    scene.add(torus2)

    /* ── 5. Particle system ── */
    const pCount = 800
    const pPos = new Float32Array(pCount * 3)
    const pColors = new Float32Array(pCount * 3)
    const palette = [
      new THREE.Color('#FF6B00'), new THREE.Color('#7C3AED'),
      new THREE.Color('#EC4899'), new THREE.Color('#3B82F6'),
      new THREE.Color('#F59E0B'), new THREE.Color('#06B6D4'),
    ]
    for (let i = 0; i < pCount; i++) {
      pPos[i * 3]     = (Math.random() - 0.5) * 24
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 24
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 12
      const c = palette[Math.floor(Math.random() * palette.length)]
      pColors[i * 3] = c.r; pColors[i * 3 + 1] = c.g; pColors[i * 3 + 2] = c.b
    }
    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
    pGeo.setAttribute('color', new THREE.BufferAttribute(pColors, 3))
    const pMat = new THREE.PointsMaterial({ size: 0.045, vertexColors: true, transparent: true, opacity: 0.7 })
    const points = new THREE.Points(pGeo, pMat)
    scene.add(points)

    /* ── 6. Floating octahedrons ── */
    const floaters = []
    const floatPositions = [
      [-3.5, 1.5, -2], [3.2, -1.8, -1.5], [-2.5, -2, -3],
      [4, 2, -3], [-4, -0.5, -2], [2, 2.5, -2.5],
    ]
    floatPositions.forEach(([x, y, z], i) => {
      const g = new THREE.OctahedronGeometry(0.18, 0)
      const m = new THREE.MeshBasicMaterial({ color: palette[i % palette.length], wireframe: true, transparent: true, opacity: 0.6 })
      const mesh = new THREE.Mesh(g, m)
      mesh.position.set(x, y, z)
      mesh.userData = { speed: 0.3 + Math.random() * 0.4, offset: Math.random() * Math.PI * 2 }
      scene.add(mesh)
      floaters.push(mesh)
    })

    /* ── Mouse parallax ── */
    let mouseX = 0, mouseY = 0
    const onMouse = e => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.8
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5
    }
    window.addEventListener('mousemove', onMouse)

    /* ── Resize ── */
    const onResize = () => {
      const w = mount.clientWidth, h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    /* ── Animation loop ── */
    const clock = new THREE.Clock()
    let animId
    const animate = () => {
      animId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      ico.rotation.x = t * 0.12 + mouseY * 0.3
      ico.rotation.y = t * 0.18 + mouseX * 0.3
      ico2.rotation.x = -t * 0.2
      ico2.rotation.y = t * 0.15
      torus1.rotation.z = t * 0.08
      torus1.rotation.y = mouseX * 0.4
      torus2.rotation.x = t * 0.06
      torus2.rotation.z = -t * 0.05 + mouseY * 0.3
      points.rotation.y = t * 0.03
      points.rotation.x = t * 0.01

      floaters.forEach(f => {
        const { speed, offset } = f.userData
        f.rotation.x += 0.01 * speed
        f.rotation.y += 0.015 * speed
        f.position.y += Math.sin(t * speed + offset) * 0.003
      })

      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.04
      camera.position.y += (-mouseY * 0.3 - camera.position.y) * 0.04

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}
    />
  )
}
