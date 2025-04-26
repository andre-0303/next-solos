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
  onFinished: () => void; // Função chamada quando todos os solos forem finalizados
};

export default function SoloPlayer({ solos, onFinished }: SoloPlayerProps) {
  const [indexAtual, setIndexAtual] = useState(0);
  const soloAtual = solos[indexAtual];
  const audioRef = useRef<HTMLAudioElement>(null);

  const imagemUrl = `http://localhost:3001/${soloAtual.imagem.replace(/\\/g, "/")}`;
  const audioUrl = `http://localhost:3001/${soloAtual.audio.replace(/\\/g, "/")}`;

  // Avança para o próximo solo
  function avancarSolo() {
    if (indexAtual + 1 >= solos.length) {
      onFinished(); // Chama a função de "acabou" quando não houver mais solos
    } else {
      setIndexAtual((prev) => prev + 1);
    }
  }

  // Volta para o solo anterior (circular)
  function voltarSolo() {
    setIndexAtual((prev) => (prev - 1 + solos.length) % solos.length);
  }

  // Efeito que carrega e toca o áudio do solo quando o índice mudar
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load(); // Carrega o áudio
      audioRef.current.play(); // Toca o áudio
    }
  }, [indexAtual]);

  return (
    <div className="flex flex-col items-center space-y-6 bg-gradient-to-b p-8 shadow-xl w-full max-w-sm mx-auto">
      <div className="relative w-full h-74 rounded-b-2xl">
        <Image
          src={imagemUrl}
          alt={soloAtual.nome}
          layout="fill"
          objectFit="cover"
          className="rounded-b-2xl"
        />
      </div>

      <div className="w-full bg-white py-2 px-7 text-center">
        <h2 className="text-2xl font-bold text-center">{soloAtual.nome}</h2>
        <p className="text-normal opacity-80 text-center mb-3">{soloAtual.banda}</p>

        <audio ref={audioRef} controls className="w-full rounded-lg">
          <source src={audioUrl} type="audio/mpeg" />
          Seu navegador não suporta áudio.
        </audio>

        <div className="flex space-x-4 pt-4 flex justify-center items-center">
          <button
            onClick={voltarSolo}
            className="px-6 py-2 bg-gray-700 text-white cursor-pointer rounded-full hover:bg-gray-800 transition duration-300"
          >
            Voltar
          </button>
          <button
            onClick={avancarSolo}
            className="px-6 py-2 bg-[#FF1A1A] cursor-pointer text-white rounded-full hover:bg-red-800 transition duration-300"
          >
            Avançar
          </button>
        </div>
      </div>
    </div>
  );
}
