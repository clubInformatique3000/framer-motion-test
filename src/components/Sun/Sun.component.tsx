import { motion } from "framer-motion";
import style from './sun.module.css';

const variants = {
  initial: {
    filter: 'var(--blur-DEFAULT)'
  },
  animate: {
    filter: 'var(--blur-md)'
  }
}

export function SunComponent() {
  return (
    <>
      <motion.div
        initial={"initial"}
        variants={variants}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        animate={"animate"} className={style.blurred} />
      <div className={style.sun} />
    </>
    
  )
}