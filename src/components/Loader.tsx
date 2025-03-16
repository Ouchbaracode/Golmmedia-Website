
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 5;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-golm-black flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-12"
      >
        <div className="w-20 h-20 rounded-lg overflow-hidden neon-glow">
          <div className="w-full h-full bg-gradient-to-br from-golm-blue to-golm-neon-blue flex items-center justify-center font-display font-bold text-white text-4xl">
            G
          </div>
        </div>
        <motion.div
          className="absolute -inset-3 rounded-xl"
          animate={{
            background: [
              "radial-gradient(circle, rgba(0,112,243,0.3) 0%, rgba(0,112,243,0) 70%)",
              "radial-gradient(circle, rgba(0,112,243,0.5) 0%, rgba(0,112,243,0) 70%)",
              "radial-gradient(circle, rgba(0,112,243,0.3) 0%, rgba(0,112,243,0) 70%)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.div>

      <div className="w-64 bg-golm-black-lighter rounded-full h-1.5 mb-6 overflow-hidden">
        <motion.div
          className="h-full bg-golm-blue"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-white font-display text-lg tracking-wider"
      >
        <span className="text-gradient-blue">GOLM</span>
        <span className="text-white">MEDIA</span>
      </motion.p>
    </div>
  );
};

export default Loader;
