import React from "react";
import { motion } from "framer-motion";

const FadeUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: .9, ease: [.22, .61, .36, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default FadeUp;
