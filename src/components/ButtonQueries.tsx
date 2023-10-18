import { useState } from "react";
import { CaretUp, Plus } from "phosphor-react";
import Link from "next/link";

export function ButtonQueries() {
  const [hasToggleMenuOptions, setHasToggleMenuOptions] = useState(false);

  return (
    <>
      <div
        className={`${
          hasToggleMenuOptions
            ? "scale-100 visible opacity-100"
            : "scale-0 invisible opacity-0"
        } backdrop-blur-md bg-primary-500/80 gap-2 px-7 pt-10 text-sm rounded-tl-[3rem] rounded-md origin-bottom transition-all flex flex-col items-start justify-center fixed right-4 bottom-24 shadow-xl border-4 border-zinc-100 z-[999]`}
      >
        <div className="flex items-center justify-center gap-1">
          <div className="w-1 h-1 bg-[#CD9F97] rounded-full" />
          <p className="text-white  font-light">Consulta Médica Presencial</p>
        </div>

        <div className="flex items-center justify-center gap-1">
          <div className="w-1 h-1 bg-[#CD9F97] rounded-full" />
          <p className="text-white  font-light">Consulta Médica Online</p>
        </div>

        <div className="flex items-center justify-center gap-1">
          <div className="w-1 h-1 bg-[#CD9F97] rounded-full" />
          <p className="text-white  font-light">Visita Domiciliar</p>
        </div>

        <Link
          href="https://api.whatsapp.com/send?phone=5548991194424"
          target="_blank"
          className="w-full flex items-center justify-center gap-2 bg-primary-400 text-white text-sm py-3 mt-2 mb-5 font-light rounded-md hover:brightness-90 transition-all"
          title="Clique para ir para agendar sua consulta"
        >
          <Plus size={18} />
          Agende sua consulta
        </Link>

        <div className="flex items-center justify-center gap-1">
          <div className="w-1 h-1 bg-[#CD9F97] rounded-full" />
          <p className="text-white  font-light">
            Eletrocardiograma Monitoramento
          </p>
        </div>

        <div className="flex items-center justify-center gap-1">
          <div className="w-1 h-1 bg-[#CD9F97] rounded-full" />
          <p className="text-white  font-light">
            Monitoramento da Apneia do Sono
          </p>
        </div>

        <div className="flex items-center justify-center gap-1">
          <div className="w-1 h-1 bg-[#CD9F97] rounded-full" />
          <p className="text-white  md:text-sm font-light">
            Ultrassom com Doppler de Carótidas
          </p>
        </div>

        <div className="flex items-center justify-center gap-1">
          <div className="w-1 h-1 bg-[#CD9F97] rounded-full" />
          <p className="text-white  font-light">
            Ultrassom com Doppler Membros Inf
          </p>
        </div>

        <Link
          href="https://api.whatsapp.com/send?phone=5548991194424"
          target="_blank"
          className="w-full flex items-center justify-center gap-2 bg-primary-400 text-white text-sm py-3 mt-2 mb-5 font-light rounded-md hover:brightness-90 transition-all"
          title="Clique para ir para ver seus resultados e laudos"
        >
          <Plus size={18} />
          Resultados e laudos
        </Link>
      </div>

      <button
        onClick={() => setHasToggleMenuOptions(!hasToggleMenuOptions)}
        className={`${
          !hasToggleMenuOptions && "animate-bounce"
        } fixed z-[999] right-4 bottom-5 px-3 md:px-6 py-2 md:py-4  hover:brightness-90 transition-all flex items-center gap-2 justify-start  bg-primary-500 text-white text-sm md:text-md rounded-md shadow-md border-2 border-primary-400`}
      >
        <CaretUp
          size={20}
          color="#FFF"
          className={
            hasToggleMenuOptions
              ? "rotate-0 transition-all"
              : "rotate-180 transition-all"
          }
        />
        Acessar agendamentos
      </button>
    </>
  );
}
