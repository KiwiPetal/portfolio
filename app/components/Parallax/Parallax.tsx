import { motion, useScroll, useTransform } from "framer-motion";

interface vars {
  children: any
}

export default function ParallaxItem({ children }: vars) {
    const { scrollY } = useScroll();

    const y = useTransform(scrollY, [0, window.innerHeight], ['1', '1.20']);
    const scrl = useTransform(scrollY, [0, window.innerHeight], ['0%', '20%'])

    return (
        <div style={{ overflow: "hidden" }}>
            <motion.div style={{ translateY: scrl, scale: y }}>
                {children}
            </motion.div>
        </div>
    );

}
