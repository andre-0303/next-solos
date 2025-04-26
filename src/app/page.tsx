"use client";

import { useState, useEffect } from "react";
import SoloPlayer from "@/components/SoloPlayer";
import HomeScreen from "@/components/HomeScreen";
import ThanksScreen from "@/components/ThanksScreen"; // <<<<<< Importando

type Solo = {
  _id: string;
  nome: string;
  banda: string;
  imagem: string;
  audio: string;
};

async function getSolos(): Promise<Solo[]> {
  const res = await fetch("http://localhost:3001/api/solos", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar solos");
  }

  return res.json();
}

export default function Home() {
  const [screen, setScreen] = useState<"home" | "player" | "thanks">("home"); // <<<<<< estados de tela
  const [solos, setSolos] = useState<Solo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const solosData = await getSolos();
        setSolos(solosData);
      } catch (error) {
        console.error("Erro ao buscar solos:", error);
      }
    };

    fetchData();
  }, []);

  const handleProceed = () => {
    setScreen("player");
  };

  const handleFinished = () => {
    setScreen("thanks");
  };

  const handleRestart = () => {
    setScreen("player");
  };

  return (
    <div>
      {screen === "home" && <HomeScreen onProceed={handleProceed} />}
      {screen === "player" && <SoloPlayer solos={solos} onFinished={handleFinished} />}
      {screen === "thanks" && <ThanksScreen onRestart={handleRestart} />}
    </div>
  );
}
