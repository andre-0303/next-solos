"use client";

import Image from "next/image";

type HomeScreenProps = {
  onProceed: () => void;
};

export default function HomeScreen({ onProceed }: HomeScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="flex flex-col items-center w-full max-w-sm bg-white rounded-3xl shadow-lg overflow-hidden">

        <div className="bg-[#FF1A1A] w-full flex flex-col items-center py-8">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40">
            <Image
              src="/disco.png"
              alt="Discos-Zidas Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4">Discos-Zidas</h1>
        </div>

        {/* White Content Section */}
        <div className="flex flex-col items-center py-10 px-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Bem-vindo!</h2>
          <p className="text-center text-gray-700 mb-8">
            Esse é um projeto de melhores solos do rock and roll. Aproveite e
            ouça eles com calma...
          </p>
          <button
            onClick={onProceed}
            className="flex items-center px-6 py-3 bg-[#FF1A1A] cursor-pointer text-white rounded-full hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            aria-label="Prosseguir para os solos"
          >
            Prosseguir
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}
