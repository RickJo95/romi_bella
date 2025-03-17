import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import cat from "@/assets/cat.gif";

const Vet = () => {
  const [activeScene, setActiveScene] = useState<number>(0);

  const storyParts = [
    "Érase una vez, en un reino no tan lejano, una veterinaria llamada Romina. Siempre estaba rodeada de animales, y no solo de los más adorables, sino de los más traviesos.",
    "Un día, Romina estaba en su clínica, tratando de dar una inyección a un gato que se creía un ninja. El gato se lanzó por la ventana, haciendo un salto digno de una película de acción.",
    "Mientras Romina corría detrás del gato ninja, un grupo de perros se unió a la fiesta. Comenzaron a ladrar y a hacer ruido, como si estuvieran en un concierto de rock.",
    "Entonces, mientras intentaba atrapar al gato, Romina se tropezó con un perro que estaba durmiendo plácidamente. Al caer, aterrizó en un charco de pintura rosa brillante que había quedado de una fiesta de cumpleaños.",
    "Al levantarse, Romina notó que su ropa estaba cubierta de pintura y que algo mágico estaba ocurriendo. ¡De repente, un brillo resplandeciente la rodeó y, al instante, se convirtió en la princesa Romina de Estrella!",
    "Con su vestido brillante y su corona hecha de flores de gato, Romina decidió usar sus nuevos poderes para curar a los animales de manera aún más mágica.",
    "Ahora, cada vez que curaba a un animal, estos se transformaban en su versión mágica: los gatos se convertían en pequeños dragones juguetones y los perros en valientes caballeros.",
    "Un día, un pato muy especial llegó a la clínica. Era un pato con un gran sueño: quería ser un bailarín. Romina decidió ayudarlo y lo curó con un toque mágico.",
    "Al instante, el pato se transformó en un príncipe bailarín que hizo una actuación impresionante, dejando a todos los animales aplaudiendo.",
    "Desde entonces, Romina de Estrella no solo fue la mejor veterinaria del reino, sino también la princesa más divertida que transformaba a sus pacientes en criaturas mágicas. Y, por supuesto, siempre había un gran espectáculo al final de cada día.",
    "Así que, si alguna vez necesitas ayuda para un animal travieso o un pato bailarín, ¡no dudes en llamar a la princesa Romina de Estrella! Ella siempre está lista para la diversión y la magia. :3",
    "Sí gutó? Me esforcé",
  ];

  return (
    <div className="bg-fuchsia-900 p-4 grid place-content-center h-screen w-screen overflow-hidden">
      <div className="flex flex-col items-center rounded shadow-xl bg-fuchsia-200 p-4">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeScene}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg mb-4 text-center"
          >
            {activeScene === storyParts.length - 1 && (
              <img src={cat} className="block my-3" />
            )}
            {storyParts[activeScene]}
            {activeScene === 1 && (
              <a
                href="https://www.youtube.com/watch?v=p_rcXQc_x5w"
                target="_blank"
                className="block mt-3 text-base text-blue-600"
              >
                Ver referencia
              </a>
            )}
          </motion.p>
        </AnimatePresence>
        <div className="flex justify-between w-full mt-4">
          {activeScene !== storyParts.length - 1 && (
            <>
              <button
                className="bg-blue-500 text-white font-bold py-1 px-3 rounded disabled:opacity-50"
                disabled={activeScene === 0}
                onClick={() => setActiveScene(activeScene - 1)}
              >
                Anterior
              </button>
              <button
                className="bg-blue-500 text-white font-bold py-1 px-3 rounded disabled:opacity-50"
                disabled={activeScene === storyParts.length - 1}
                onClick={() => setActiveScene(activeScene + 1)}
              >
                Siguiente
              </button>
            </>
          )}
          {activeScene === storyParts.length - 1 && (
            <div className="flex flex-row items-center gap-5">
              <a
                className="bg-blue-500 text-white font-bold py-1 px-3 rounded disabled:opacity-50"
                href="https://wa.me/593998684070"
                target="_blank"
              >
                Obvio, aquí te va una foto de mi tta
              </a>
              <button
                className="bg-red-500 text-white font-bold py-1 px-3 rounded disabled:opacity-50"
                onClick={() => window.location.href = "/"}
              >
                Ño, regresar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Vet;
