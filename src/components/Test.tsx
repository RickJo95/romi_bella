import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

const questions = [
  {
    question: "Si fueras un animal en la veterinaria, ¿cuál serías?",
    options: [
      "🐶 Perro con complejo de gato",
      "🐱 Gato con problemas de identidad",
      "🦄 Unicornio rescatado del tráfico",
      "🐢 Tortuga con licencia de conducir",
    ],
  },
  {
    question: "¿Qué color representa tu energía veterinaria?",
    options: [
      "💖 Rosa (porque todo es más bonito en rosa)",
      "💙 Azul (como un guante estéril)",
      "💛 Amarillo (como un pato de a dólar que venden en la calle)",
      "💜 Morado (como un moretón cuando te dan cabezazos los perros que sostienes)",
    ],
  },
  {
    question: "¿Cuál sería tu superpoder?",
    options: [
      "🐾 Telepatía perruna (entiendes cada ladrido y suspiros de resignación)",
      "🦜 Hipnosis felina (los gatos te obedecen... por 5 segundos)",
      "💉 Manos de oro (nunca fallas al poner una vía)",
      "🐍 Control total de reptiles (las serpientes te respetan como a su líder)",
    ],
  },
  {
    question: "¿Qué tipo de cliente veterinario serías?",
    options: [
      "👩‍⚕️ La veterinaria encubierta (sabe más que el doctor)",
      "💰 El millonario preocupado (dinero no es problema, su bebé peludo lo es)",
      "🐕 El 'mi perro nunca hace esto' (pero hoy sí lo hizo)",
      "🦜 El que llega con un loro y se va con dos",
    ],
  },
  {
    question: "¿Qué soundtrack describiría tu vida veterinaria?",
    options: [
      "🎵 Hakuna Matata pero con ladridos de fondo",
      "🎵 Bajo el mar (porque los gatos te lanzan cosas)",
      "🎵 El ciclo sin fin (bañar, secar, ensuciar, repetir)",
      "🎵 Let It Go pero con pelos en la ropa",
    ],
  },
];

const results = [
  "🐶 Eres el alma gemela de los perros. Te siguen hasta al baño.",
  "🐱 Los gatos te consideran digna... por ahora.",
  "🦜 Tu destino es abrir un santuario de loros chismosos.",
  "🐍 Las serpientes han jurado lealtad a ti.",
  "🐢 Tu paciencia es legendaria, digna de una tortuga sabia.",
];

export default function Test() {
  const [step, setStep] = useState(0);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [analysisMessage, setAnalysisMessage] = useState(
    "Analizando respuestas..."
  );
  const [showHelpOptions, setShowHelpOptions] = useState(false);
  const [showHamsterGame, setShowHamsterGame] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hamsterExhausted, setHamsterExhausted] = useState(false);
  const [finalResult, setFinalResult] = useState("");

  useEffect(() => {
    if (showAnalysis) {
      setTimeout(() => {
        setAnalysisMessage(
          "Esto está tardando más de lo normal... ¿Me ayudas?"
        );
        setShowHelpOptions(true);
      }, 5000);
    }
  }, [showAnalysis]);

  useEffect(() => {
    if (progress > 0 && progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => Math.max(prev - 1, 0));
      }, 40); // Drenaje de energía
      return () => clearInterval(interval);
    }
  }, [progress]);

  const handleAnswer = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowAnalysis(true);
    }
  };

  const startHamsterGame = () => {
    setShowHelpOptions(false);
    setShowHamsterGame(true);
  };

  const handleTap = () => {
    setProgress((prev) => Math.min(prev + 5, 100));
  };

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setHamsterExhausted(true), 1000);
    }
  }, [progress]);

  const revealResult = () => {
    const randomResult = results[Math.floor(Math.random() * results.length)];
    setFinalResult(randomResult);
  };

  const [vibration, setVibration] = useState<boolean>(false);

  return (
    <motion.div
      key={step}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="bg-fuchsia-900 p-6 text-center grid place-content-center w-screen h-screen overflow-hidden select-none"
    >
      {!revealResult && (
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full bg-pink-500"
            initial={{ width: 0 }}
            animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
      {!showAnalysis ? (
        <>
          <h2 className="text-pink-600 font-bold text-xl">
            {questions[step].question}
          </h2>
          <div className="mt-4 space-y-2">
            {questions[step].options.map((option, index) => (
              <button
                key={index}
                className="block w-full bg-pink-500 text-white py-2 rounded-full hover:bg-pink-700 transition"
                onClick={handleAnswer}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      ) : !showHamsterGame ? (
        <>
          <h2 className="text-pink-600 font-bold text-xl">{analysisMessage}</h2>
          {showHelpOptions && (
            <div className="mt-4 space-y-2">
              <button
                className="block w-full bg-green-500 text-white py-2 rounded-full hover:bg-green-700 transition"
                onClick={startHamsterGame}
              >
                Sí, te ayudo 🐹
              </button>
              <AlertDialog>
                <AlertDialogTrigger
                  className="block w-full bg-red-500 text-white py-2 rounded-full hover:bg-red-700 transition"
                  onClick={() => setVibration(true)}
                >
                  Ño
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-pink-600">
                      Total ni quería
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-pink-400">
                      Fea, ahora te quedas con la duda de saber cual era tu
                      personaje. 😤
                    </AlertDialogDescription>
                    {vibration && navigator.vibrate(4500)}
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setVibration(false)}>
                      Lo merezco 😭
                    </AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          )}
        </>
      ) : hamsterExhausted ? (
        <>
        {finalResult !== "" && (
          <h1 className="text-2xl  text-orange-400 font-semibold">
            Tu resultado del test es...
          </h1>
        )}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
            className="text-pink-600 font-bold text-xl my-4"
          >
            {finalResult && finalResult}
          </motion.h2>
          {finalResult === "" ? (
            <button
              className="block w-full bg-slate-700 text-white py-1.5 px-3 rounded hover:bg-slate-900 transition text-sm"
              onClick={revealResult}
            >
              Ahora, manda a dormir al hámster 😴
            </button>
          ) : (
            <button
              className="px-3 py-1 text-white bg-orange-700/70 rounded shadow"
              onClick={() => (window.location.href = "/")}
            >
              Regresar al inicio
            </button>
          )}
        </>
      ) : (
        <>
          <h2 className="text-pink-600 font-bold text-xl">
            ¡Toca al hámster para que corra!
          </h2>
          <motion.div className="mt-4 text-4xl" onTap={handleTap}>
            🐹
          </motion.div>
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mt-4">
            <motion.div
              className="h-full bg-blue-500"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </>
      )}
    </motion.div>
  );
}
