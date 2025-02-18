import { FaUser, FaLock } from "react-icons/fa";
import logoCoordina from "../assets/img/logo.webp";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const LoginPage = () => {

  const schema = yup.object({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo de 6 caracteres"),
  });

  const saveData = (data) => {
    console.log(data);
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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

        <form
          onSubmit={handleSubmit(saveData)}
          action="#"
          className="flex flex-col gap-3"
        >
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
              {...register("email")}
            />
            {errors?.email && (
              <span className="text-red-500 text-left font-montserrat-light-italic text-sm">
                {errors?.email?.message}
              </span>
            )}
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
              {...register("password")}
            />
            {errors?.password && (
              <span className="text-red-500 text-left font-montserrat-light-italic text-sm">
                {errors?.password?.message}
              </span>
            )}
            <FaLock className="absolute top-10 left-2" />
          </div>

          <input
            type="submit"
            value="Entrar"
            className="flex w-[100%] justify-center rounded-full px-4 py-2 bg-blue-900 text-white hover:bg-blue-800 mt-3 font-montserrat-bold"
          />
          <Link to={"/resend"} className="text-blue-900 font-montserrat-light">
            Esqueceu sua senha?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
