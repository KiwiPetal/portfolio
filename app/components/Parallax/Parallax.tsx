import { motion, useScroll, useTransform } from "framer-motion";

interface vars {
  children: any
}

export default function ParallaxItem({ children }: vars) {
  const { scrollY } = useScroll();

  const innerHeight = typeof window !== "undefined" ? window.innerHeight : 1000
  const y = useTransform(scrollY, [0, innerHeight], ['1', '1.20']);
  const scrl = useTransform(scrollY, [0, innerHeight], ['0%', '80%'])

  return (
    <div style={{ overflow: "hidden" }}>
      <motion.div style={{ translateY: scrl, scale: y }}>
        {children}
      </motion.div>
    </div>
  );

}
