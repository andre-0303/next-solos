import Image from "next/image";
import {useRouter} from "next/router";

type ThanksScreenProps = {
  onRestart: () => void;
};

export default function ThanksScreen({ onRestart}: ThanksScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center w-full max-w-sm bg-white rounded-3xl shadow-lg overflow-hidden">

        {/* Red Header */}
        <div className="bg-[#FF1A1A] w-full flex flex-col items-center py-8">
          <div className="relative w-32 h-32">
            <Image
              src="/disco.png"
              alt="Obrigado por ouvir"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1 className="text-4xl font-bold text-white mt-4">Obrigado!</h1>
        </div>

        <div className="flex flex-col items-center py-10 px-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Você finalizou todos os solos!</h2>
          <p className="text-center text-gray-700 mb-8">
            Esperamos que tenha curtido muito! <br /> 
            Quer ouvir de novo?
          </p>
          <button
            onClick={onRestart}
            className="flex items-center px-6 py-3 bg-[#FF1A1A] text-white rounded-full hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Ouvir novamente
          </button>
          
        </div>

      </div>
    </div>
  );
}
