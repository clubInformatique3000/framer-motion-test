import { motion } from "framer-motion";

export function WindComponent() {
  return (
    <>
      <motion.div
        className="h-[1px] w-5 bg-gray-500 absolute top-[35%]"
        initial={{ left: "90%" }}
        animate={{ left: "10%" }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      ></motion.div>
      <motion.div
        className="h-[1px] w-5 bg-gray-500 absolute top-[44%]"
        initial={{ left: "90%" }}
        animate={{ left: "10%" }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
          delay: 0.3,
        }}
      ></motion.div>
      <motion.div
        className="h-[1px] w-5 bg-gray-500 absolute top-[38%]"
        initial={{ left: "90%" }}
        animate={{ left: "10%" }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
          delay: 0.6,
        }}
      ></motion.div>
    </>
  );
}
