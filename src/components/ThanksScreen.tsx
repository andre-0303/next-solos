"use client";

import Image from "next/image";

type ThanksScreenProps = {
  onRestart: () => void;
  onGoHome: () => void; // <<< NOVA PROP
};

export default function ThanksScreen({ onRestart, onGoHome }: ThanksScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="flex flex-col items-center w-full max-w-sm bg-white rounded-3xl shadow-lg overflow-hidden">

        {/* Red Header */}
        <div className="bg-[#FF1A1A] w-full flex flex-col items-center py-8">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40">
            <Image
              src="/disco.png"
              alt="Obrigado por ouvir"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4">Obrigado!</h1>
        </div>

        <div className="flex flex-col items-center py-10 px-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Você finalizou todos os solos!</h2>
          <p className="text-center text-gray-700 mb-8">
            Esperamos que tenha curtido muito! <br />
            Quer ouvir de novo?
          </p>

          {/* Botões */}
          <div className="flex flex-col space-y-4 w-full">
            <button
              onClick={onRestart}
              className="flex justify-center items-center px-6 py-3 bg-[#FF1A1A] text-white rounded-full hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 w-full"
            >
              Ouvir novamente
            </button>

            <button
              onClick={onGoHome}
              className="flex justify-center items-center px-6 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 w-full"
            >
              Voltar para a Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
