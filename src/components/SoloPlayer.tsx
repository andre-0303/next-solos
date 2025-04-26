"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Solo = {
  _id: string;
  nome: string;
  banda: string;
  imagem: string;
  audio: string;
};

type SoloPlayerProps = {
  solos: Solo[];
  onFinished: () => void;
};

export default function SoloPlayer({ solos, onFinished }: SoloPlayerProps) {
  const [indexAtual, setIndexAtual] = useState(0);
  const soloAtual = solos[indexAtual];
  const audioRef = useRef<HTMLAudioElement>(null);

  const imagemUrl = `http://localhost:3001/${soloAtual.imagem.replace(/\\/g, "/")}`;
  const audioUrl = `http://localhost:3001/${soloAtual.audio.replace(/\\/g, "/")}`;

  function avancarSolo() {
    if (indexAtual + 1 >= solos.length) {
      onFinished();
    } else {
      setIndexAtual((prev) => prev + 1);
    }
  }

  function voltarSolo() {
    setIndexAtual((prev) => (prev - 1 + solos.length) % solos.length);
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [indexAtual]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
      <div className="w-full max-w-sm bg-white rounded-lg overflow-hidden shadow-lg"> 
        
        <div className="bg-red-600 rounded-b-3xl flex flex-col items-center justify-center p-6 h-[400px]"> 
          <div className="relative w-[300px] h-[300px]">
            <Image
              src={imagemUrl}
              alt={soloAtual.nome}
              layout="fill"
              objectFit="cover"
              className="rounded-none"
            />
          </div>
        </div>

        <div className="p-6 flex flex-col items-center space-y-4">

        <h2 className="text-black text-2xl font-bold text-center">{soloAtual.nome}</h2>
        <p className="text-black opacity-80 -mt-3 text-center">{soloAtual.banda}</p>
          <audio ref={audioRef} controls className="w-full rounded-lg">
            <source src={audioUrl} type="audio/mpeg" />
            Seu navegador não suporta áudio.
          </audio>

          <div className="flex space-x-4">
            <button
              onClick={voltarSolo}
              className="px-6 py-2 bg-gray-700 cursor-pointer text-white rounded-full hover:bg-gray-800 transition duration-300"
            >
              Voltar
            </button>
            <button
              onClick={avancarSolo}
              className="px-6 py-2 bg-red-600 cursor-pointer text-white rounded-full hover:bg-red-700 transition duration-300"
            >
              Avançar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
