"use client";

import { useEffect, useState } from "react";
import HomeScreen from "@/components/HomeScreen"; 
import SoloPlayer from "@/components/SoloPlayer";  // Aqui, o nome deve ser SoloPlayer
import ThanksScreen from "@/components/ThanksScreen"; 

// Função para buscar solos
const getSolos = async () => {
  const response = await fetch("http://localhost:3001/api/solos");  // Ajuste o endpoint da API
  if (!response.ok) {
    throw new Error("Erro ao buscar solos");
  }
  return response.json();
};

export default function Home() {
  const [screen, setScreen] = useState<"home" | "player" | "thanks">("home");
  const [solos, setSolos] = useState<Solo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const solosData = await getSolos();  // Agora a função está definida
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

  const handleGoHome = () => {
    setScreen("home");
  };

  return (
    <div>
      {screen === "home" && <HomeScreen onProceed={handleProceed} />}
      {screen === "player" && <SoloPlayer solos={solos} onFinished={handleFinished} />}  {/* Aqui está o SoloPlayer */}
      {screen === "thanks" && (
        <ThanksScreen 
          onRestart={handleRestart} 
          onGoHome={handleGoHome} 
        />
      )}
    </div>
  );
}
