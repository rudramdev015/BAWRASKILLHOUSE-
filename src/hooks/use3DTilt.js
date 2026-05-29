import { useMotionValue, useSpring, useTransform } from 'framer-motion'

export function use3DTilt(maxDeg = 14) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const cfg = { stiffness: 380, damping: 28 }
  const xSpring = useSpring(x, cfg)
  const ySpring = useSpring(y, cfg)
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-maxDeg, maxDeg])
  const rotateX = useTransform(ySpring, [-0.5, 0.5], [maxDeg, -maxDeg])

  const onMouseMove = e => {
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onMouseLeave = () => { x.set(0); y.set(0) }

  return { rotateX, rotateY, onMouseMove, onMouseLeave }
}
