import {FaUser, FaLock} from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="flex items-center w-screen h-screen bg-slate-600 justify-center p-6">
      <div className="w-80 h-auto bg-white p-6 text-center shadow-md rounded-lg">
        <h1>Coordina</h1>
        <form action="#" className="flex flex-col gap-3">
          <div className="flex flex-col gap-1 relative">
            <label htmlFor="user" className="text-left">
              Usuário
            </label>
            <input
              type="email"
              id="user"
              placeholder="Digite seu e-mail"
              className="border border-gray-300 rounded-lg pl-7 py-2 hover:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <FaUser className="absolute top-10 left-2" />
          </div>
          <div className="flex flex-col gap-1 relative">
            <label htmlFor="password" className="text-left">
              Senha
            </label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              className="border border-gray-300 rounded-lg pl-7 py-2 hover:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <FaLock className="absolute top-10 left-2"/>
          </div>
          <button className="flex w-[100%] justify-center rounded-full px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 mt-3">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
