import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import logoCoordina from "../assets/img/logo.webp";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [enabled, setEnabled] = useState("flex");
  const [disabled, setDisabled] = useState("hidden");

  const [isFormVisible, setIsFormVisible] = useState(true);
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  
  const handleButtonClick = () => {
    setIsFormVisible(false);
    setIsMessageVisible(true);
  };

  return (
    <div className="flex items-center w-screen h-screen bg-violet-400 justify-center p-6">
      <div className="w-96 h-auto bg-zinc-300 py-9 px-6 text-center shadow-xl rounded-lg">
        <h1 className="flex justify-center">
          <img
            src={logoCoordina}
            alt="Logo Coordina"
            className="w-[110px] h-[95px] mb-5"
          />
        </h1>
        <form action="#" className={`${enabled} flex-col gap-3`}>
          <div className="flex flex-col gap-1 relative">
            <label htmlFor="user" className="text-left font-montserrat">
              Usuário
            </label>
            <input
              type="email"
              id="user"
              name="email"
              placeholder="Digite seu e-mail"
              className="border border-gray-300 rounded-lg pl-7 py-2 hover:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 font-montserrat-light-italic"
              required
            />

            <FaUser className="absolute top-10 left-2" />
          </div>
          <div className="flex flex-col gap-1 relative">
            <label htmlFor="password" className="text-left font-montserrat">
              Senha
            </label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              className="border border-gray-300 rounded-lg pl-7 py-2 hover:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 font-montserrat-light-italic"
              required
            />
            <FaLock className="absolute top-10 left-2" />
          </div>
          <button className="flex w-[100%] justify-center rounded-full px-4 py-2 bg-blue-900 text-white hover:bg-blue-800 mt-3 font-montserrat-bold">
            Entrar
          </button>
          <Link
            className="text-blue-900 font-montserrat-light"
            onClick={() => {
              setEnabled("hidden");
              setDisabled("block");
            }}
          >
            Esqueceu sua senha?
          </Link>
        </form>
        <div className={disabled}>
          <div className="mb-4">
            <h2 className="text-xl font-montserrat-bold">
              Esqueceu sua senha?
            </h2>
            <p className="font-montserrat-light">
              Redefina sua senha em duas etapas
            </p>
          </div>
          <form action="#" className="flex flex-col gap-3">
            <div className="flex flex-col gap-1 relative">
              <label htmlFor="email" className="text-left font-montserrat">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu e-mail"
                className="border border-gray-300 rounded-lg pl-7 py-2 hover:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 font-montserrat-light-italic"
                required
              />
              <MdEmail className="absolute top-10 left-2" />
            </div>
            <button
              type=""
              className="flex w-[100%] justify-center rounded-full px-4 py-2 bg-green-900 text-white hover:bg-green-800 mt-3 font-montserrat-bold"
              onClick={}
            >
              Enviar
            </button>
            <Link
              className="text-green-900 font-montserrat-light"
              onClick={() => {
                setEnabled("flex");
                setDisabled("hidden");
              }}
            >
              Voltar
            </Link>
          </form>
        </div>
        <div className= "text-left">
          <div className="flex gap-2">
            <IoMdCheckmarkCircleOutline className="text-2xl" />
            <h2 className="font-montserrat-bold text-xl mb-3">
              Email enviado!
            </h2>
          </div>
          <p className="font-montserrat-light font-semibold">
            Se o e-mail estiver registrado com XXXXX, você receberá uma mensagem
            com instruções para definir uma nova senha.
          </p>
          <hr
            className="my-6"
            style={{ backgroundColor: "gray", height: "2px" }}
          />
          <p className="font-montserrat-light text-sm">
            Não recebeu a mensagem? Verifique se o e-mail está correto ou se foi
            para o spam.
          </p>
          <button className="flex w-[100%] justify-center rounded-full px-4 py-2 bg-green-900 text-white hover:bg-green-800 mt-3 font-montserrat-bold">
            Voltar para login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
