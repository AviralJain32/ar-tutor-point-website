
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
 

export default function WordRotate({
  words,
  duration = 2200,
  framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}) {
  const [index, setIndex] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);
 
    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration]);
 
  return (
    <span className="overflow-hidden py-2">
      <AnimatePresence mode="wait">
        <motion.h1 
          key={words[index]}
          className={`${className} inline-block ${words[index]=="dream"?"text-blue-500":""} ${words[index]=="create"?"text-green-500":""} ${words[index]=="inspire"?"text-orange-400":""}`}
          {...framerProps}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </span>
  );
}