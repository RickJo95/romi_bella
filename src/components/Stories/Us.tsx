/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import couple from "@/assets/couple.png";
import lookingEarth from "@/assets/2.webp";
import spotted from "@/assets/3.png";
import wandering from "@/assets/1.webp";
import Luma from "@/assets/Luma.mp3";

const Us = () => {
  const [activeScene, setActiveScene] = useState<number>(0);
  const [activeImage, setActiveImage] = useState(wandering);
  const [hasStarted, setHasStarted] = useState(false);
  const [audio] = useState(new Audio(Luma));

  useEffect(() => {
    if (hasStarted) {
      audio.loop = true;
      audio.play().catch((e) => console.error("Error reproduciendo audio:", e));
    }
  }, [hasStarted]);

  useEffect(() => {
    if (activeScene < 2) {
      setActiveImage(wandering);
    } else if (activeScene === 2) {
      setActiveImage(lookingEarth);
    } else if (activeScene === 3) {
      setActiveImage(spotted);
    } else if (activeScene === 18) {
      setActiveImage(couple);
    }
  }, [activeScene]);

  const storyParts = [
    "Había una vez una pequeña estrella que vagaba sola por el inmenso cielo.",
    "Había visto mundos maravillosos, pero en ninguno encontraba su lugar.",
    "A veces, se detenía en lo alto y observaba la vida en la Tierra, preguntándose si alguna vez alguien la vería.",
    "Un día, en una noche tranquila, un viajero con el corazón inquieto levantó la vista y la encontró.",
    "No era la estrella más brillante ni la más grande, pero para él, era la más hermosa.",
    "—¿Por qué estás sola? —preguntó el viajero.",
    "—Porque no tengo un hogar —respondió la estrella.",
    "El viajero extendió la mano, y aunque no podía tocarla, le prometió algo.",
    "—Si quieres, yo puedo ser tu hogar.",
    "La estrella dudó al principio.",
    "Había recorrido tanto tiempo en soledad que temía confiar.",
    "Pero la voz del viajero era cálida, y sus palabras no eran como las del viento pasajero.",
    "Así que, por primera vez, en lugar de seguir flotando, se quedó a su lado.",
    "Los días pasaron, y juntos iluminaron caminos oscuros, rieron con la luz del alba y encontraron un mundo que ninguno de los dos imaginó antes.",
    "La estrella aprendió que el hogar no siempre es un lugar, sino un sentimiento.",
    "Y el viajero descubrió que, aunque había caminado solo por mucho tiempo, su verdadero destino siempre había estado escrito en el cielo.",
    "—Gracias por encontrarme— susurró la estrella.",
    "—Gracias por quedarte— respondió el viajero.",
    "Porque esa estrella eras tú, y yo fui aquel viajero que alzó la mirada en el momento exacto.",
    "En un universo infinito de posibilidades, nos encontramos.",
    "Y desde entonces, hemos seguido viajando juntos, construyendo un hogar en cada instante compartido, en cada risa, en cada mirada que dice más que mil palabras.",
    "Y así, viajaron juntos por el universo, sin miedo a la oscuridad, porque mientras se tuvieran el uno al otro, siempre habría luz.",
    "Te amo con toda mi alma, mi princesita, mi mujer, mi Evangeline.",
  ];

  return (
    <motion.div className="bg-black h-screen grid place-content-center">
      {!hasStarted ? (
        <button
          onClick={() => setHasStarted(true)}
          className="bg-indigo-500 text-black font-bold p-3 rounded"
        >
          Comienza la Historia
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          className="relative top-0 left-0 w-screen h-screen overflow-hidden p-2 self-center"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              src={activeImage}
              alt="Escena activa"
              className="mx-auto object-center object-cover h-6/12 w-full rounded-2xl mt-18"
            />
          </AnimatePresence>

          <div className="flex flex-col absolute bottom-56 items-center w-full">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeScene}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="p-4 rounded w-full max-w-11/12 text-white font-semibold"
              >
                {storyParts[activeScene]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="w-full flex flex-row justify-evenly absolute bottom-44 items-center">
            {activeScene < storyParts.length -1 && (
              <>
                <button
                  className="border-2 border-fuchsia-950 bg-fuchsia-900/30 active:bg-fuchsia-900/70 text-white font-bold text-xs px-3 py-1 rounded disabled:opacity-50 disabled:pointer-events-none"
                  disabled={activeScene === 0}
                  onClick={() => setActiveScene(activeScene - 1)}
                >
                  Anterior
                </button>
                <button
                  className="border-2 border-fuchsia-950 bg-fuchsia-900/30 active:bg-fuchsia-900/70 text-white font-bold text-xs px-3 py-1 rounded disabled:opacity-50 disabled:pointer-events-none"
                  disabled={activeScene === storyParts.length - 1}
                  onClick={() => setActiveScene(activeScene + 1)}
                >
                  Siguiente
                </button>
              </>
            )}
            {activeScene === storyParts.length - 1 && (
              <>
                <button
                  className="border-2 border-fuchsia-950 bg-fuchsia-900/30 active:bg-fuchsia-900/70 text-white font-bold text-xs px-3 py-1 rounded disabled:opacity-50 disabled:pointer-events-none"
                  onClick={() => window.location.reload()}
                >
                  ¿Repetir historia?
                </button>
                <button
                  className="border-2 border-fuchsia-950 bg-fuchsia-900/30 active:bg-fuchsia-900/70 text-white font-bold text-xs px-3 py-1 rounded disabled:opacity-50 disabled:pointer-events-none"
                  onClick={() => window.location.href = "/"}
                >
                  Ir a la página principal
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Us;
