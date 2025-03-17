import { motion } from "motion/react";
import princess from "@/assets/princess.png"
import { Link } from "react-router";

export default function WelcomeScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-fuchsia-900 text-center p-4">
      <motion.h1
        className="text-4xl font-bold text-pink-500 drop-shadow-md flex flex-col gap-3 items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Bienvenida, mi princesa <span className="max-w-6">
            <img src={princess} alt="princess" className="object-center object-contain"/>
        </span>
      </motion.h1>
      <motion.div
        className="mt-4 border bg-fuchsia-100 rounded-2xl p-8 shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2 className="text-lg text-fuchsia-800 font-semibold mb-4">
        ¿Qué deseas hacer hoy?
        </h2>
        <ul>
            <motion.li
            initial={{ opacity: 0, bottom: 5 }}
            animate={{ opacity: 1, bottom: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mb-4"
            >
                <Link to="/story" className="py-1.5 px-3 text-white font-bold uppercase bg-fuchsia-600 rounded shadow">
                    Leer un cuento
                </Link>
            </motion.li>
            <motion.li
            initial={{ opacity: 0, bottom: 5 }}
            animate={{ opacity: 1, bottom: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="mt-4"
            >
                <Link to="/test" className="py-1.5 px-3 text-white font-bold uppercase bg-fuchsia-600 rounded shadow">
                    Hacer un test
                </Link>
            </motion.li>
        </ul>
      </motion.div>
      <a href="/final" className="underline underline-offset-2 text-fuchsia-700 visited:text-fuchsia-500 fixed bottom-2 right-2 text-xs">Si me lees, ¡No me toques!</a>
    </div>
  );
}
