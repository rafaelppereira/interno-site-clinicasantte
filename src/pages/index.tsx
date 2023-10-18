import Head from "next/head";
import Link from "next/link";
import { useRef, useState } from "react";

import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { scrollPage } from "@/utils/scroll-page";
import { Contact } from "@/components/plus/Contact";
import { Reveal } from "@/components/animation/Reveal";
import { ButtonQueries } from "@/components/ButtonQueries";

import {
  X,
  List,
  Phone,
  FacebookLogo,
  WhatsappLogo,
  CircleDashed,
  InstagramLogo,
  EnvelopeSimple,
  PhoneDisconnect,
  DeviceMobile,
} from "phosphor-react";
import { convenios } from "@/utils/content/convenios";

export default function HomePage() {
  const [hasToggleMenuMobile, setHasToggleMenuMobile] = useState(false);

  const refAbout: any = useRef();
  const refBanner: any = useRef();
  const refContact: any = useRef();
  const refServices: any = useRef();
  const refConvenios: any = useRef();
  const refProfessionais: any = useRef();

  return (
    <>
      <Head>
        <title>Início | Clínica Santté</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />

        <meta charSet="utf-8" />
        <meta
          name="description"
          content="A Santté Saúde foi idealizada para oferecer o melhor para você e para toda sua família Primamos pelo atendimento humanizado, conforto e qualidade! ​"
        />
        <meta name="author" content="Clínica Santté" />
        <meta
          name="keywords"
          content="clinica, clínica, saúde, saude, santté, Santté"
        />
        <meta name="copyright" content="© 2024 Clínica Santté" />
        <meta name="robots" content="all" />

        <meta property="og:site_name" content="Clínica Santté" />
        <meta property="og:title" content="Conheça o site da clínica Santté" />
        <meta
          property="og:description"
          content="A Santté Saúde foi idealizada para oferecer o melhor para você e para toda sua família Primamos pelo atendimento humanizado, conforto e qualidade!"
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/BSbZ7x31SqmJXdajL7Ut"
        />
        <meta property="og:type" content="website" />
        <meta property="og:updated_time" content="1440432930" />
      </Head>

      <ButtonQueries />

      <header className="fixed left-0 top-0 z-50 w-full">
        <section className="bg-primary-500 w-full h-[30px] lg:h-[50px] flex items-center ">
          <div className="flex items-center justify-between px-8 max-w-7xl w-full mx-auto ">
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="https://www.instagram.com/santtesaude/"
                target="_blank"
                className="bg-primary-400 text-white/90 rounded-full p-[0.3rem] hover:brightness-90 transition-all"
                title="Clique para ir para o nosso Instagram"
              >
                <InstagramLogo size={24} />
              </Link>

              <Link
                href="https://www.facebook.com/santtesaude"
                target="_blank"
                className="bg-primary-400 text-white/90 rounded-full p-[0.3rem] hover:brightness-90 transition-all"
                title="Clique para ir para o nosso Facebook"
              >
                <FacebookLogo size={24} />
              </Link>

              <Link
                href="https://api.whatsapp.com/send?phone=5548991194424"
                target="_blank"
                className="bg-primary-400 text-white/90 rounded-full p-[0.3rem] hover:brightness-90 transition-all"
                title="Clique para ir para o nosso Whatsapp"
              >
                <WhatsappLogo size={24} />
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-2 text-sm font-light text-white">
              <span className="flex items-center gap-2 border-r pr-4 mr-2">
                <EnvelopeSimple size={20} />
                santtesaude@hotmail.com
              </span>
              <span className="flex items-center gap-2 border-r pr-4 mr-2">
                <DeviceMobile size={20} /> (48) 99119-4424
              </span>
              <span className="flex items-center gap-2">
                <Phone size={20} /> 3374-0210
              </span>
            </div>
          </div>
        </section>

        <div className="w-full bg-white border-b-2 border-gray-100">
          <div className="flex items-center justify-between h-[120px] px-8 max-w-7xl mx-auto">
            <figure>
              <img
                className="h-[120px] lg:h-[120px] aspect-square select-none"
                src="/logo.svg"
                alt="Clínica Santté"
              />
            </figure>

            <div className="hidden lg:flex items-center text-[15px] text-gray-500 font-light">
              <button
                onClick={() => scrollPage(refBanner, setHasToggleMenuMobile)}
                className="uppercase border-b-4 border-white hover:border-primary-500 transition-all h-[120px] leading-[120px] px-4 text-primary-500 font-normal"
              >
                Início
              </button>

              <button
                type="button"
                onClick={() => scrollPage(refAbout, setHasToggleMenuMobile)}
                className="uppercase border-b-4 border-white hover:border-primary-500 h-[120px] leading-[120px] px-4"
              >
                Quem somos
              </button>

              <button
                onClick={() => scrollPage(refServices, setHasToggleMenuMobile)}
                className="uppercase border-b-4 border-white hover:border-primary-500 transition-all h-[120px] leading-[120px] px-4"
              >
                Serviços
              </button>
              <button
                onClick={() =>
                  scrollPage(refProfessionais, setHasToggleMenuMobile)
                }
                className="uppercase border-b-4 border-white hover:border-primary-500 transition-all h-[120px] leading-[120px] px-4"
              >
                Especialistas
              </button>
              <button
                onClick={() => scrollPage(refConvenios, setHasToggleMenuMobile)}
                className="uppercase border-b-4 border-white hover:border-primary-500 transition-all h-[120px] leading-[120px] px-4"
              >
                Convênios
              </button>

              <button className="uppercase border-b-4 border-white hover:border-primary-500 transition-all h-[120px] leading-[120px] px-4">
                Estética
              </button>

              <button
                onClick={() => scrollPage(refContact, setHasToggleMenuMobile)}
                className="uppercase border-b-4 border-white hover:border-primary-500 transition-all h-[120px] leading-[120px] px-4"
              >
                Contato
              </button>
            </div>

            <Link
              href=""
              target="_blank"
              title="Clique para entrar em contato"
              className="hidden xl:flex bg-secondary-500 items-center gap-2 text-white px-7 py-3 text-sm rounded-md hover:brightness-90 transition-all"
            >
              <WhatsappLogo size={20} />
              Entrar em contato
            </Link>

            <button
              type="button"
              title="Clique para entrar em contato"
              onClick={() => setHasToggleMenuMobile(!hasToggleMenuMobile)}
              className="flex lg:hidden items-center gap-2 text-zinc-500 p-3 text-sm rounded-md hover:brightness-90 transition-all"
            >
              {hasToggleMenuMobile ? <X size={30} /> : <List size={30} />}
            </button>

            <div
              className={`${
                hasToggleMenuMobile
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              } md:hidden transition-all absolute left-0 top-[165px] w-full px-5 py-8 bg-primary-500 flex flex-col gap-3 text-white uppercase`}
            >
              <button
                onClick={() =>
                  scrollPage(refBanner, setHasToggleMenuMobile, true)
                }
              >
                Início
              </button>

              <button
                type="button"
                onClick={() =>
                  scrollPage(refAbout, setHasToggleMenuMobile, true)
                }
              >
                Quem somos
              </button>

              <button
                onClick={() =>
                  scrollPage(refServices, setHasToggleMenuMobile, true)
                }
              >
                Serviços
              </button>
              <button
                onClick={() =>
                  scrollPage(refProfessionais, setHasToggleMenuMobile, true)
                }
              >
                Especialistas
              </button>
              <button
                onClick={() =>
                  scrollPage(refConvenios, setHasToggleMenuMobile, true)
                }
              >
                Convênios
              </button>

              <button>Estética</button>

              <button
                onClick={() =>
                  scrollPage(refContact, setHasToggleMenuMobile, true)
                }
              >
                Contato
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 h-[12px] flex items-center justify-center" />
      </header>

      <section
        className="mt-[calc(50px+120px+12px)] w-full rounded-md"
        ref={refBanner}
      >
        <Swiper
          effect="fade"
          spaceBetween={20}
          slidesPerView={1}
          pagination={true}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide>
            <div className="w-full h-[350px] md:h-[650px] text-white uppercase bg-zinc-100 bg-banner bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center">
              <Reveal>
                <h1 className="text-5xl md:text-8xl font-semibold drop-shadow-md">
                  Cardiologia
                </h1>
              </Reveal>
              <Reveal>
                <span className="text-2xl md:text-4xl drop-shadow-md font-medium">
                  Consulta de exames
                </span>
              </Reveal>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full  h-[350px] md:h-[650px] text-white uppercase bg-zinc-100 bg-nutricaoBanner bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center">
              <Reveal>
                <h1 className="text-5xl md:text-8xl font-semibold drop-shadow-md">
                  Nutrição
                </h1>
              </Reveal>
              <Reveal>
                <span className="text-2xl mt-2 block md:text-4xl drop-shadow-md font-medium">
                  Clínica e esportiva
                </span>
              </Reveal>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="py-16 md:py-20" ref={refAbout}>
        <div className="container flex flex-col-reverse md:flex-row items-center gap-20">
          <div className="flex-1 md:w-1/2 w-full">
            <Swiper
              effect="fade"
              spaceBetween={50}
              slidesPerView={1}
              pagination={true}
              autoHeight={true}
              className="default"
              modules={[Autoplay, Pagination]}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide className="">
                <Reveal>
                  <img
                    src="/santte/clinica01.JPG"
                    alt="Imagem da Clínica Santté"
                    className="w-full h-full object-cover rounded-lg "
                  />
                </Reveal>
              </SwiperSlide>

              <SwiperSlide className="">
                <Reveal>
                  <img
                    src="/santte/clinica02.JPG"
                    alt="Imagem da Clínica Santté"
                    className="w-full h-full object-cover rounded-lg "
                  />
                </Reveal>
              </SwiperSlide>

              <SwiperSlide className="">
                <Reveal>
                  <img
                    src="/santte/clinica03.JPG"
                    alt="Imagem da Clínica Santté"
                    className="w-full h-full object-cover rounded-lg "
                  />
                </Reveal>
              </SwiperSlide>

              <SwiperSlide className="">
                <Reveal>
                  <img
                    src="/santte/clinica04.JPG"
                    alt="Imagem da Clínica Santté"
                    className="w-full h-full object-cover rounded-lg "
                  />
                </Reveal>
              </SwiperSlide>

              <SwiperSlide className="">
                <Reveal>
                  <img
                    src="/santte/clinica05.JPG"
                    alt="Imagem da Clínica Santté"
                    className="w-full h-full object-cover rounded-lg "
                  />
                </Reveal>
              </SwiperSlide>

              <SwiperSlide className="">
                <Reveal>
                  <img
                    src="/santte/clinica06.JPG"
                    alt="Imagem da Clínica Santté"
                    className="w-full h-full object-cover rounded-lg "
                  />
                </Reveal>
              </SwiperSlide>

              <SwiperSlide className="">
                <Reveal>
                  <img
                    src="/santte/clinica07.JPG"
                    alt="Imagem da Clínica Santté"
                    className="w-full h-full object-cover rounded-lg "
                  />
                </Reveal>
              </SwiperSlide>

              <SwiperSlide className="">
                <Reveal>
                  <img
                    src="/santte/clinica08.JPG"
                    alt="Imagem da Clínica Santté"
                    className="w-full h-full object-cover rounded-lg "
                  />
                </Reveal>
              </SwiperSlide>

              <SwiperSlide className="">
                <Reveal>
                  <img
                    src="/santte/clinica09.JPG"
                    alt="Imagem da Clínica Santté"
                    className="w-full h-full object-cover rounded-lg "
                  />
                </Reveal>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex-1">
            <Reveal>
              <h1 className="sm:text-4xl text-3xl text-zinc-600 font-semibold">
                SOBRE NÓS
              </h1>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-zinc-500 leading-relaxed text-md sm:text-lg">
                A Santté Saúde foi idealizada para oferecer o melhor para você e
                para toda sua família Priorizamos pelo atendimento humanizado,
                conforto e qualidade!
                <br /> <br />
                Somos uma Clínica especializada em consultas e exames em
                Cardiologia, além do atendimento de outras especialidades. Somos
                referência em cardiologia para realizar diagnósticos,
                tratamentos e abordagens clínicas de forma humanizada, com foco
                na segurança, conforto e bem- estar do paciente.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-zinc-100/50 border-t-2 border-b-2 border-zinc-200"
        ref={refServices}
      >
        <div className="container flex justify-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl text-zinc-500 font-semibold border-b-2 border-secondary-500/60 pb-2 px-3">
              Serviços
            </h2>
          </Reveal>
        </div>

        <div className="container flex flex-col md:flex-row gap-10 mt-20">
          <Swiper
            effect="fade"
            spaceBetween={20}
            slidesPerView={1}
            pagination={true}
            autoHeight={true}
            className="default"
            modules={[Autoplay, Pagination]}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide className="n2Class">
              <div className="h-[350px] border-b-[1rem] border-primary-500 overflow-y-auto flex-1 bg-primary-500 p-6 sm:p-10  text-left rounded-md">
                <Reveal>
                  <div className="icon-service w-11 h-11 bg-primary-400 text-white flex items-center justify-center rounded-full">
                    <CircleDashed size={23} />
                  </div>
                  <h1 className="mt-6 text-white text-2xl sm:text-3xl">
                    Ecocardiograma Transtorácico com Color Doppler
                  </h1>
                </Reveal>
                <Reveal>
                  <p className="text-zinc-200 text-sm sm:text-lg md:text-lg mt-2 font-light leading-relaxed ">
                    É um exame cardiológico de imagem que utiliza a técnica do
                    ultrassom. É realizado por médico cardiologista com
                    especialização em imagem. Permite o rastreamento de
                    cardiopatias (doenças do coração) de forma não invasiva,
                    rápida e confortável, sem necessidade de contrastes ou
                    radiação.
                    <br />
                    <strong>Preparo para o exame:</strong> O Ecocardiograma é um
                    procedimento diagnóstico não invasivo e, portanto, não há
                    necessidade de suspensão de medicamentos ou preparo para
                    realização do procedimento.
                    <br />
                    <strong>Orientações</strong> Este exame é realizado somente
                    com agendamento prévio. No dia do Ecocardiograma, o paciente
                    deve chegar 10 minutos antes do horário marcado e trazer o
                    pedido médico, documento de identidade e a carteira do
                    convênio.
                  </p>
                </Reveal>
              </div>
            </SwiperSlide>

            <SwiperSlide className="n2Class">
              <div className="h-[350px] border-b-[1rem] border-rose-500 overflow-y-auto flex-1 bg-primary-500 p-7 sm:p-10  text-left rounded-md">
                <Reveal>
                  <div className="icon-service w-11 h-11 bg-primary-400 text-white flex items-center justify-center rounded-full">
                    <CircleDashed size={23} />
                  </div>
                  <h1 className="mt-6 text-white text-2xl sm:text-3xl">
                    Eletrocardiograma (ECG) de repouso
                  </h1>
                </Reveal>
                <Reveal>
                  <p className="text-zinc-200 text-sm sm:text-lg md:text-lg mt-2 font-light leading-relaxed ">
                    Recebe várias denominações: ECG basal, ECG de superfície,
                    ECG convencional ou, simplesmente, Eletrocardiograma.
                    Trata-se de exame não invasivo, de realização rápida e
                    fácil. Esse exame registra a atividade elétrica do coração e
                    pode prover informações sobre o diagnóstico de problemas
                    estruturais cardíacos, isquemia miocárdica, distúrbios
                    eletrofisiológicos do miocárdio, doenças do pericárdio,
                    posicionamento do coração, estimulação cardíaca artificial,
                    alterações metabólicas e eletrolíticas sistêmicas, além de
                    documentação de influências autonômicas e farmacológicas
                    (tóxicas ou terapêuticas).
                    <br />
                    <br />
                    <strong>Indicações para o Eletrocardiograma:</strong>
                    <br />O Eletrocardiograma é complementar ao processo de
                    diagnóstico de uma consulta cardiológica. Por isso, antes de
                    uma consulta com o cardiologista, é necessária a sua
                    realização. O ECG, habitualmente, é solicitado ao paciente
                    antes de um procedimento cirúrgico, na etapa de preparo
                    pré-operatório.
                    <br />
                    <br />
                    <strong>Preparo para o exame:</strong>
                    <br />O Eletrocardiograma é um exame não invasivo. Portanto,
                    não há necessidade de suspensão de medicamentos ou preparo
                    para a sua realização. Em alguns casos, pode ser necessária
                    a tricotomia (corte de pelos) do tórax, para reduzir e
                    interferência dos registros elétricos.
                    <br />
                    <br />
                    <strong>Orientações:</strong>
                    <br />
                    Este exame não requer agendamento prévio e o laudo fica
                    pronto em 24 horas. No dia do exame, o paciente deve portar:
                    pedido médico, documento de identidade e carteira do
                    convênio.
                  </p>
                </Reveal>
              </div>
            </SwiperSlide>

            <SwiperSlide className="n2Class">
              <div className="h-[350px] border-b-[1rem] border-primary-500 overflow-y-auto flex-1 bg-primary-500 p-7 sm:p-10  text-left rounded-md">
                <Reveal>
                  <div className="icon-service w-11 h-11 bg-primary-400 text-white flex items-center justify-center rounded-full">
                    <CircleDashed size={23} />
                  </div>
                  <h1 className="mt-6 text-white text-2xl sm:text-3xl">
                    Holter 24h
                  </h1>
                </Reveal>
                <Reveal>
                  <p className="text-zinc-200 text-sm sm:text-lg md:text-lg mt-2 font-light leading-relaxed ">
                    É um exame que registra o eletrocardiograma por 24 horas. É
                    indicado para diagnosticar distúrbios na condução elétrica
                    do coração, como arritmias, bloqueios e falhas nos
                    batimentos, mas que acontecem de maneira intermitente, ou
                    seja, para os quais o eletrocardiograma convencional,
                    realizado por poucos segundos, não foi capaz de
                    diagnosticar. O exame de Holter é realizado com a instalação
                    de eletrodos adesivos no tórax, ligados a um pequeno
                    aparelho que ficará preso na cintura.
                    <br />
                    <br />
                    <strong>Preparo para o exame Holter 24H:</strong>
                    <br />O Holter 24h é um procedimento diagnóstico não
                    invasivo e, portanto, não há necessidade de suspensão de
                    medicamentos para realização do procedimento.
                    <br />
                    <br />
                    <strong>Orientações:</strong>
                    <br />
                    O exame Holter é realizado somente com agendamento prévio.
                    No dia do exame, o paciente deverá: <br /> chegar 10 minutos
                    antes do horário marcado; <br />
                    trazer pedido médico, documento de identidade e carteira do
                    convênio; <br />
                    TRAZER UM CINTO, independente do tipo de roupa utilizada
                    (para que o aparelho possa ser fixado na sua cintura);{" "}
                    <br />
                    NÃO será possível tomar banho durante a utilização do
                    aparelho; <br />
                    NÃO passar creme na região do tórax; <br />
                    NÃO é recomendável dormir em colchão magnético; <br />
                    Deverá EVITAR o uso de decotes ou vestidos; <br />
                    EVITAR atividade física extenuante. <br />
                    No dia do exame, o paciente receberá todas as orientações
                    necessárias para a sua correta realização.
                  </p>
                </Reveal>
              </div>
            </SwiperSlide>

            <SwiperSlide className="n2Class">
              <div className="h-[350px] border-b-[1rem] border-rose-500 overflow-y-auto flex-1 bg-primary-500 p-7 sm:p-10  text-left rounded-md">
                <Reveal>
                  <div className="icon-service w-11 h-11 bg-primary-400 text-white flex items-center justify-center rounded-full">
                    <CircleDashed size={23} />
                  </div>
                  <h1 className="mt-6 text-white text-2xl sm:text-3xl">
                    MAPA 24h
                  </h1>
                </Reveal>
                <Reveal>
                  <p className="text-zinc-200 text-sm sm:text-lg md:text-lg mt-2 font-light leading-relaxed ">
                    É um exame onde se registram medidas seriadas da pressão
                    arterial durante o dia e à noite. Normalmente, é realizado
                    quando há dúvidas se as pressões medidas no consultório e de
                    modo eventual estão realmente elevadas em outras ocasiões –
                    ou se é algo momentâneo (Hipertensão do jaleco branco). Este
                    exame também é indicado para avaliar a eficácia da medicação
                    em pacientes já diagnosticados com hipertensão, ou seja,
                    para saber se as medicações estão conseguindo manter as
                    pressões controladas durante o dia e à noite. Desta forma, o
                    médico poderá realizar modificações personalizadas nos
                    horários ou nos tipos de medicamentos, a fim de obter um
                    melhor controle da doença. O MAPA 24h é realizado com a
                    instalação de uma braçadeira para a medição da pressão no
                    braço esquerdo. Esta braçadeira estará conectada a um
                    pequeno aparelho preso na cintura.
                    <br />
                    <br />
                    <strong>Preparo para o exame Mapa 24H:</strong>
                    <br />O MAPA é um procedimento diagnóstico não invasivo.
                    Portanto, não há necessidade de suspensão de medicamentos
                    para a sua realização, EXCETO em caso de outra orientação
                    por parte do seu médico.
                    <br />
                    <br />
                    <strong>Orientações:</strong> <br />
                    Este exame é realizado somente com agendamento prévio. No
                    dia do exame, o paciente deverá: <br />
                    <br />
                    chegar 15 minutos antes do horário marcado; <br />
                    trazer pedido médico, documento de identidade e carteira do
                    convênio; <br />
                    TRAZER UM CINTO, independente do tipo de roupa utilizada
                    para que o aparelho possa ser fixado na sua cintura); <br />
                    NÃO será possível tomar banho durante a utilização do
                    aparelho; <br />
                    NÃO é recomendável dormir em colchão magnético; <br />
                    Deverá EVITAR o uso de decotes ou vestidos apertados; <br />
                    EVITAR atividade física extenuante. <br />
                    No momento em que o aparelho iniciar uma medida, é altamente
                    indicado que o braço onde está a braçadeira fique relaxado e
                    imóvel até a total desinsuflação. Caso contrário, o aparelho
                    tentará aumentar a compressão no local ou poderá não fazer a
                    leitura correta da pressão. No dia do exame de MAPA o
                    paciente receberá todas as orientações necessárias para a
                    sua correta realização <br /> <br />
                  </p>
                </Reveal>
              </div>
            </SwiperSlide>

            <SwiperSlide className="n2Class">
              <div className="h-[350px] border-b-[1rem] border-primary-500 overflow-y-auto flex-1 bg-primary-500 p-7 sm:p-10  text-left rounded-md">
                <Reveal>
                  <div className="icon-service w-11 h-11 bg-primary-400 text-white flex items-center justify-center rounded-full">
                    <CircleDashed size={23} />
                  </div>
                  <h1 className="mt-6 text-white text-2xl sm:text-3xl">
                    Teste Ergométrico
                  </h1>
                </Reveal>
                <Reveal>
                  <p className="text-zinc-200 text-sm sm:text-lg md:text-lg mt-2 font-light leading-relaxed ">
                    Também conhecido como Teste de Esforço ou Teste de Esteira,
                    é um procedimento no qual o paciente é submetido a um
                    esforço físico programado e individualizado. Tem como
                    finalidade avaliar as respostas clínica, hemodinâmica,
                    eletrocardiográfica e metabólica ao exercício.
                    <br />
                    <br />
                    <strong>Como é realizado o Teste Ergométrico:</strong>
                    <br />
                    Para uma melhor qualidade do traçado eletrocardiográfico, o
                    preparo da pele para fixação dos eletrodos é fundamental.
                    Algumas vezes, é necessário raspar os pêlos de alguns pontos
                    do tórax e do abdome e friccionar a pele com gaze e álcool
                    em seguida é passado uma lixa para remover a oleosidade
                    natural destas áreas, onde serão colocados eletrodos
                    descartáveis. No Teste Ergométrico, o paciente caminhará em
                    uma esteira ergométrica e, progressivamente, o médico
                    aumentará a velocidade e/ou a inclinação da esteira até o
                    limite do esforço tolerado. A interrupção do teste
                    ergométrico pode ser solicitada a qualquer momento, devido
                    ao cansaço ou outro motivo. Além disso, o próprio médico que
                    acompanha o exame pode interromper o teste, se julgar
                    necessário. Durante todo o exame, o médico estará
                    monitorando o eletrocardiograma, a pressão arterial, a
                    frequência cardíaca e a condição clínica do paciente.
                    <br />
                    <br />
                    <strong>Riscos ao Paciente:</strong>
                    <br />
                    Apesar de todos os cuidados na realização deste exame,
                    alguns incidentes podem ocorrer. Entre eles, queda da
                    esteira ou alterações clínicas, como resposta anormal da
                    pressão arterial, arritmias, angina do peito, tontura ou
                    desmaio. O exame de Teste Ergométrico pode identificar a
                    grande maioria dos pacientes que apresentam doença
                    coronariana importante e, assim, salvar muitas vidas.
                    Contudo, raramente podem ocorrer complicações, como
                    arritmias graves, infarto e/ou morte. Estes casos
                    excepcionais (menos de 0,01% de óbitos nas estatísticas
                    mundiais) geralmente estão associados à doença cardíaca
                    grave. Assim, estes indivíduos podem apresentar as mesmas
                    complicações em qualquer outra circunstância – geralmente,
                    longe dos recursos necessários para revertê-las. Para estas
                    situações, dispomos de equipamentos de ressuscitação e
                    profissionais habilitados para intervir, se necessário.
                    <br />
                    <br />
                    <strong>Orientações para o exame:</strong>
                    <br />
                    Comparecer com 10 minutos de antecedência ao horário
                    agendado; <br />
                    Para maior conforto durante o exame, recomenda-se o uso de
                    traje esportivo e tênis; <br />
                    Os homens farão o exame com o tórax desnudo e as mulheres
                    devem trajar top ou sutiã; <br />
                    Os homens será necessário a tricotomia (corte de pelos) do
                    tórax; <br />
                    Sugere-se também que se traga uma toalha de rosto; <br />
                    Não fumar ao menos por 3h antes do exame; <br />
                    Não realizar o exame em jejum; <br />
                    Fazer uma refeição leve antes do exame; <br />
                    Evitar beber café, chá preto ou bebidas alcoólicas no dia do
                    exame; <br />
                    Não realizar esforço não habitual por 12h antes do exame;{" "}
                    <br />
                    Se estiver em uso de medicamentos, levar os nomes para
                    informar ao médico; <br />
                    Não deixar de tomar os medicamentos em uso, a menos que
                    solicitado pelo médico; <br />
                    24h antes do exame, não usar cremes, bronzeadores ou
                    substâncias oleosas sobre o tórax; <br />
                    Pacientes menores de 18 anos devem estar acompanhados pelo
                    seu responsável ou representante legal.
                  </p>
                </Reveal>
              </div>
            </SwiperSlide>

            <SwiperSlide className="n2Class">
              <div className="h-[350px] border-b-[1rem] border-rose-500 overflow-y-auto flex-1 bg-primary-500 p-7 sm:p-10  text-left rounded-md">
                <Reveal>
                  <div className="icon-service w-11 h-11 bg-primary-400 text-white flex items-center justify-center rounded-full">
                    <CircleDashed size={23} />
                  </div>
                  <h1 className="mt-6 text-white text-2xl sm:text-3xl">
                    Ultrassom com Doppler de Carótidas e vertebrais
                  </h1>
                </Reveal>
                <Reveal>
                  <p className="text-zinc-200 text-sm sm:text-lg md:text-lg mt-2 font-light leading-relaxed ">
                    É um exame realizado para a avaliação das artérias carótidas
                    e vertebrais de forma não invasiva. Permite ao médico
                    analisar a anatomia (incluindo a presença de placas de
                    gordura na parede dos vasos) e o comportamento do fluxo
                    sanguíneo.
                    <br />
                    <br />
                    <strong>Preparo para o exame:</strong>
                    <br />O doppler de carótidas é um procedimento diagnóstico
                    não invasivo e, portanto, não há necessidade de suspensão de
                    medicamentos ou preparo para realização do procedimento.
                    <br />
                    <strong>Orientações:</strong> <br />
                    Este exame é realizado somente com agendamento prévio. No
                    dia do exame, o paciente deve chegar 10 minutos antes do
                    horário marcado e trazer o pedido médico, documento de
                    identidade e a carteira do convênio.
                  </p>
                </Reveal>
              </div>
            </SwiperSlide>

            <SwiperSlide className="n2Class">
              <div className="h-[350px] border-b-[1rem] border-primary-500 overflow-y-auto flex-1 bg-primary-500 p-7 sm:p-10  text-left rounded-md">
                <Reveal>
                  <div className="icon-service w-11 h-11 bg-primary-400 text-white flex items-center justify-center rounded-full">
                    <CircleDashed size={23} />
                  </div>
                  <h1 className="mt-6 text-white text-2xl sm:text-3xl">
                    Ultrassom com doppler venoso ou arterial dos membros
                    inferiores
                  </h1>
                </Reveal>
                <Reveal>
                  <p className="text-zinc-200 text-sm sm:text-lg md:text-lg mt-2 font-light leading-relaxed ">
                    É um exame utilizado principalmente para investigar a causa
                    de inchaços e dores persistentes nas pernas, comumente
                    associados às varizes. A principal preocupação nesses casos
                    é a formação de coágulos nas veias, inclusive com risco de
                    vida.
                    <br />
                    <br />
                    Além de detectar coágulos intravenosos, o ecodoppler venoso
                    de membros inferiores também é capaz de avaliar todo o
                    sistema vascular da região das pernas e identificar outras
                    doenças.
                    <br />
                    <br />
                    <strong>Preparo para o exame:</strong>
                    <br />O doppler é um procedimento diagnóstico não invasivo
                    e, portanto, não há necessidade de suspensão de medicamentos
                    ou preparo para realização do procedimento.
                    <br />
                    <strong>Orientações:</strong>
                    <br />
                    Este exame é realizado somente com agendamento prévio. No
                    dia do exame, o paciente deve chegar 10 minutos antes do
                    horário marcado e trazer o pedido médico, documento de
                    identidade e a carteira do convênio.
                  </p>
                </Reveal>
              </div>
            </SwiperSlide>

            <SwiperSlide className="n2Class">
              <div className="h-[350px] border-b-[1rem] border-rose-500 overflow-y-auto flex-1 bg-primary-500 p-7 sm:p-10  text-left rounded-md">
                <Reveal>
                  <div className="icon-service w-11 h-11 bg-primary-400 text-white flex items-center justify-center rounded-full">
                    <CircleDashed size={23} />
                  </div>
                  <h1 className="mt-6 text-white text-2xl sm:text-3xl">
                    Ultrassonografia geral
                  </h1>
                </Reveal>
                <Reveal>
                  <p className="text-zinc-200 text-sm sm:text-lg md:text-lg mt-2 font-light leading-relaxed ">
                    É o exame de ultrassom que utiliza ondas sonoras para gerar
                    imagens do corpo humano.
                    <br />
                    <br />É um método muito utilizado para prevenção,
                    tratamento, diagnóstico e para avaliação de estruturas e
                    partes do corpo humano.
                    <br />
                    <br />
                    <strong>Preparo para o exame:</strong>
                    <br />é um procedimento diagnóstico não invasivo e,
                    portanto, as orientações do exame variam de acordo com a
                    região a ser examinada pelo profissional.
                    <br />
                    <strong>Orientações: </strong> <br />
                    Este exame é realizado somente com agendamento prévio. No
                    dia do exame, o paciente deve chegar 10 minutos antes do
                    horário marcado e trazer o pedido médico, documento de
                    identidade e a carteira do convênio.
                  </p>
                </Reveal>
              </div>
            </SwiperSlide>

            <SwiperSlide className="n2Class">
              <div className="h-[350px] border-b-[1rem] border-primary-500 overflow-y-auto flex-1 bg-primary-500 p-7 sm:p-10  text-left rounded-md">
                <Reveal>
                  <div className="icon-service w-11 h-11 bg-primary-400 text-white flex items-center justify-center rounded-full">
                    <CircleDashed size={23} />
                  </div>
                  <h1 className="mt-6 text-white text-2xl sm:text-3xl">
                    Consulta Domiciliar
                  </h1>
                </Reveal>
                <Reveal>
                  <p className="text-zinc-200 text-sm sm:text-lg md:text-lg mt-2 font-light leading-relaxed ">
                    É um atendimento médico realizado em casa. O serviço é
                    realizado por profissionais da saúde e serve para facilitar
                    o acesso ao suporte necessário.
                  </p>
                </Reveal>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="py-20" ref={refProfessionais}>
        <div className="container flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-1 md:sticky md:top-[350px]">
            <Reveal>
              <span className="uppercase text-secondary-500 font-medium text-lg sm:text-xl">
                Quais são?
              </span>
            </Reveal>
            <Reveal>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-500">
                Nossas especialidades
              </h2>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-zinc-500 font-light leading-relaxed text-md sm:text-lg">
                Nossa equipe é formada por profissionais que buscam de forma
                incessante a excelência em atendimento humanizado e acolhedor.
                <br />
                <br />
                Nossas especialidades vão além de consultas, somos referência em
                atendimento cardiológico tanto na realização de diagnósticos,
                consultas e exames, com abordagem humanizada, com foco na
                segurança, conforto e bem-estar do paciente. Em nossa clinica
                temos programas de reabilitação com fisioterapeutas
                especializados, cuidamos também de sua saúde mental com
                profissionais altamente preparados, com muito
                carinho e discrição.
              </p>
            </Reveal>
          </div>

          <div className="flex-1 ">
            <div className="flex flex-col gap-10 mt-10">
              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-secondary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    1
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Cardiologia
                  </h2>
                  <p>
                    Consultas, diagnóstico por imagem, avaliação cardiológica
                    para prática esportiva, métodos gráficos, ergometria,
                    checkup cardiológico, avaliação cardiológica pré operatória
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-secondary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    2
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Cirurgião Vascular
                  </h2>
                  <p>
                    Consultas, diagnóstico por imagem, procedimentos vasculares
                    em consultório.
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-secondary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    3
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Nutrição
                  </h2>
                  <p>
                    Consultas, acompanhamento mensal, avaliação e acompanhamento
                    nutricional pré e pós operatório, nutrição esportiva,
                    bioimpedância
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-secondary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    4
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Psicologia
                  </h2>
                  <p>
                    Consultas, acompanhamento psicoterapêutico, avaliação e
                    acompanhamento pré e pós operatório, atendimento familiar,
                    psicoterapia para casais, atendimento infantil.
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-secondary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    5
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Psiquiatria
                  </h2>
                  <p>
                    Consultas, avaliação diagnóstica, acompanhamento
                    terapêutico.
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-secondary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    6
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Clinico Geral
                  </h2>
                  <p>Consulta, acompanhamento de rotina.</p>
                </div>
              </Reveal>

              <Reveal>
                <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
                  <div className="absolute -left-5 -top-5 w-10 h-10 bg-secondary-500 text-white rounded-full text-2xl flex items-center justify-center">
                    7
                  </div>

                  <h2 className="text-zinc-600/80 leading-relaxed text-md sm:text-lg">
                    Dermatologista
                  </h2>
                  <p>Consultas, procedimento em consultório</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={refConvenios}
        className="py-20 bg-zinc-100/50 border-t-2 border-b-2 border-zinc-200"
      >
        <div className="container flex justify-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl text-zinc-500 font-semibold border-b-2 border-secondary-500/60 pb-2 px-3">
              Convênios
            </h2>
          </Reveal>
        </div>

        <div className="container flex flex-col md:flex-row gap-10 mt-20">
          <Swiper
            effect="fade"
            spaceBetween={20}
            slidesPerView={1}
            pagination={true}
            modules={[Autoplay, Pagination]}
            className="default"
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {convenios.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="w-full flex flex-col aspect-square overflow-hidden bg-white border-2 border-zinc-200 rounded-md">
                    <div className="flex-1 flex items-center justify-center p-5">
                      <img
                        src={item.image_url}
                        alt={`Convênio da ${item.name}`}
                        className=" object-contain"
                      />
                    </div>

                    <div className="bg-primary-500 py-4 uppercase">
                      <Reveal>
                        <h1 className="text-white text-xl">{item.name}</h1>
                      </Reveal>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      <section className="py-20  border-t-2 border-b-2 border-zinc-200">
        <div className="container flex flex-col md:flex-row items-center gap-20">
          <div className="relative rounded-md shrink-0 w-full sm:w-auto">
            <img
              src="/santte/medico.JPG"
              alt="Imagem do médico"
              className="w-full  md:w-[400px] md:h-[500px] aspect-square md:aspect-auto object-cover object-bottom  border-4 border-zinc-200/70"
            />

            <Reveal>
              <div className="absolute w-[90%] text-sm p-5  right-0 -bottom-10 rounded-md  bg-primary-400 text-white">
                <h1 className="text-xl font-medium">Dr. Rafael Meirelles</h1>
                <p className="text-xs mt-3 text-zinc-200 leading-relaxed">
                  - CRM 18004
                </p>
                <p className="text-xs mt-3 text-zinc-200 leading-relaxed">
                  - Graduação em Medicina pela Universidade de Ribeirão Preto SP
                  – UNAER
                </p>

                <p className="text-xs mt-3 text-zinc-200 leading-relaxed">
                  - Residência Médica em Cardiologia - Hospital Beneficência
                  Portuguesa de Ribeirão Preto – SP
                </p>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <h1 className="text-2xl md:text-3xl text-zinc-500 font-semibold">
                Responsável técnico
              </h1>
            </Reveal>
            <Reveal>
              <p className="leading-relaxed text-md md:text-lg mt-4 text-zinc-500">
                <ul>
                  <li className="mb-3">
                    - Membro da American Heart Association.
                  </li>
                  <li className="mb-3">
                    - Membro do American College br of Cardiology.
                  </li>
                  <li className="mb-3">
                    - Membro do Corpo Clínico do Instituto deCardiologia de
                    Santa Catarina.
                  </li>
                  <li className="mb-3">
                    - Membro Titular do Departamento de Ergometria, Exercício,
                    Cardiologia Nuclear e Reabilitação Cardiovascular (DERC) .
                  </li>
                  <li className="mb-3">
                    - Membro Titular da Sociedade Brasileira de Cardiologia
                    (SBC).
                  </li>
                  <li className="">
                    - Título de Especialista em Cardiologia pela Sociedade
                    Brasileira de Cardiologia e Associação Médica Brasileira.
                  </li>
                </ul>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <div ref={refContact}>
        <Contact />
      </div>

      <footer className="bg-primary-500 border-t-2 border-zinc-200">
        <div className="container ">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center gap-2 py-5 px-6 bg-white rounded-b-2xl">
              <img className="w-20" src="/logo.svg" alt="" />
              <p className="hidden md:block pl-5 text-zinc-500 leading-relaxed">
                A Santté Saúde foi idealizada para oferecer o melhor para você e
                para toda sua família Primamos pelo atendimento humanizado,
                conforto e qualidade!
              </p>
            </div>
          </Reveal>
        </div>
        <div className="container py-10">
          <div className="flex flex-col md:flex-row gap-10 md:gap-0">
            <div className="flex-1 flex justify-center ">
              <div className="flex flex-col gap-2 text-white text-center md:text-left">
                <h2 className="text-xl font-medium">Menu</h2>
                <button
                  onClick={() => scrollPage(refAbout, setHasToggleMenuMobile)}
                  className="mt-2 text-center md:text-left  font-light text-zinc-300 hover:brightness-90 transition-all"
                >
                  Quem somos
                </button>
                <button
                  onClick={() =>
                    scrollPage(refServices, setHasToggleMenuMobile)
                  }
                  className="mt-2 text-center md:text-left font-light text-zinc-300 hover:brightness-90 transition-all"
                >
                  Serviços
                </button>
                <button
                  onClick={() =>
                    scrollPage(refProfessionais, setHasToggleMenuMobile)
                  }
                  className="mt-2 text-center md:text-left  font-light text-zinc-300 hover:brightness-90 transition-all"
                >
                  Especialistas
                </button>
                <button
                  onClick={() => scrollPage(refContact, setHasToggleMenuMobile)}
                  className="mt-2 text-center md:text-left  font-light text-zinc-300 hover:brightness-90 transition-all"
                >
                  Contato
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex flex-col gap-2 text-white text-center md:text-left">
                <h2>Redes sociais</h2>
                <Link
                  target="_blank"
                  href=""
                  className="mt-2 flex items-center gap-2 font-light text-zinc-300 hover:brightness-90 transition-all"
                >
                  <InstagramLogo size={24} />
                  Instagram
                </Link>
                <Link
                  target="_blank"
                  href=""
                  className="mt-2 flex items-center gap-2 font-light text-zinc-300 hover:brightness-90 transition-all"
                >
                  <FacebookLogo size={24} />
                  Facebook
                </Link>
                <Link
                  target="_blank"
                  href=""
                  className="mt-2 flex items-center gap-2 font-light text-zinc-300 hover:brightness-90 transition-all"
                >
                  <WhatsappLogo size={24} />
                  Whatsapp
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex flex-col gap-2 text-white text-center md:text-left">
                <h2>Contato</h2>
                <Link
                  target="_blank"
                  href=""
                  className="mt-2 font-light text-zinc-300 hover:brightness-90 transition-all"
                >
                  Whatsapp
                </Link>
                <Link
                  target="_blank"
                  href="mailto:atendimento@clinicasantte.com"
                  className="mt-2 font-light text-zinc-300 hover:brightness-90 transition-all"
                >
                  E-mail
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 mt-10 flex flex-col items-center justify-center">
            <Reveal>
              <span className="text-sm text-zinc-200 font-light text-center md:text-left block">
                Santté Saúde e Bem Estar LTDA - CNPJ: 31.374.439/0001-08 |
                Santté clínica médica
              </span>
            </Reveal>
            <Reveal>
              <span className="text-sm text-zinc-400 mt-2 font-light">
                Feito por Nitro Desenvolvimentos
              </span>
            </Reveal>
          </div>
        </div>
      </footer>
    </>
  );
}
