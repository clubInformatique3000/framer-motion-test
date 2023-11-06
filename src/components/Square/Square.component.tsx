import { useState } from "react";
import style from "./style.module.css";
import { Variants, motion } from "framer-motion";
import { useSpaceJumpHook } from "../../hooks/useSpaceJump.hook";

interface SquareComponentProps {}

const variants: Variants = {
  initial: {
    rotate: 0,
    y: 0,
    transition: {
      duration: 0,
    },
  },
  enter: {
    rotate: 90,
    y: -150,
    transition: {
      delay: 0,
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    rotate: 180,
    y: 0,
    transition: {
      delay: 0,
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

export function SquareComponent({}: SquareComponentProps) {
  const [currentVariant, setCurrentVariant] = useState<string>("initial");
  const [isAnimating, setIsAnimating] = useState(false);

  useSpaceJumpHook(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentVariant("enter");
  }, isAnimating);

  const handleAnimationComplete = () => {
    if (currentVariant === "enter") setCurrentVariant("exit");
    if (currentVariant === "exit") setCurrentVariant("initial");
    if (currentVariant === "initial") {
      setIsAnimating(false);
    }
  };

  return (
 
      <motion.div 
        layout 
        initial={false}
        variants={variants}
        animate={currentVariant}
        onAnimationComplete={handleAnimationComplete} 
        className={style["middle-square"]}>
          <motion.div layout className={style["inner-square"]} />
      </motion.div>
  );
}
