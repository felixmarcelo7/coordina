import { MdEmail } from "react-icons/md";
import logoCoordina from "../assets/img/logo.webp";
import { Link } from "react-router-dom";

const ForgetPasswordPage = () => {
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
        <div className="mb-4">
          <h2 className="text-xl font-montserrat-bold">Esqueceu sua senha?</h2>
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
              placeholder="Digite seu e-mail"
              className="border border-gray-300 rounded-lg pl-7 py-2 hover:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 font-montserrat-light-italic"
              required
            />
            <MdEmail className="absolute top-10 left-2" />
          </div>
          <button className="flex w-[100%] justify-center rounded-full px-4 py-2 bg-green-900 text-white hover:bg-green-800 mt-3 font-montserrat-bold">
            Enviar
          </button>
          <Link to="/login" className="text-green-900 font-montserrat-light">
            Voltar
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
