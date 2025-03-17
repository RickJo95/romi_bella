import { motion } from "motion/react";
import { useState } from "react";
import pikachu from "@/assets/pikachu.jpg";

export default function FinalScreen() {
  const [showHearts, setShowHearts] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-200 text-center p-6">
      <motion.h1
        className="text-4xl font-bold text-pink-600 drop-shadow-md"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Qué rebelde 😒
      </motion.h1>
      <p className="text-2xl my-5 text-center">
        Por eso estoy tan loco por ti 🤤🤤🤤🤤
      </p>
      <p>
        <motion.img 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", stiffness: 400, duration: 2}}
        src={pikachu} alt="Pikachu pleasure" />
      </p>
      <button
        className="mt-6 px-6 py-2 bg-pink-500 text-white font-semibold rounded-full shadow-lg hover:bg-pink-700 transition-all"
        onClick={() => setShowHearts(!showHearts)}
      >
        Toma amor, te lo mereces
      </button>
      {showHearts && (
        <motion.div
          className="absolute top-0 left-0 w-full h-full flex flex-wrap overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="text-red-500 text-4xl absolute"
              style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
              animate={{ y: -100, opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              ❤️
            </motion.div>
          ))}
        </motion.div>
      )}
      <button onClick={() => window.location.href = "/"} className="fixed bottom-16 underline underline-offset-3 text-sky-500">Regresar</button>
    </div>
  );
}
