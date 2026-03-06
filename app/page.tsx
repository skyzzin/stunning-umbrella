export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#02121a] via-[#062b38] to-[#02121a] relative overflow-hidden">

      {/* halo azul de fundo */}
      <div className="absolute w-[900px] h-[900px] bg-cyan-400/20 blur-[220px] rounded-full"></div>

      {/* borda glow */}
      <div className="relative z-10 w-[400px] p-[2px] rounded-2xl
      bg-gradient-to-r from-cyan-400/40 via-blue-400/20 to-cyan-400/40
      shadow-[0_0_50px_rgba(0,200,255,0.35)]">

        {/* card */}
        <div className="backdrop-blur-xl bg-[#071b24]/90 border border-white/10 rounded-2xl p-8 text-center">

          {/* logo */}
          <h1 className="text-3xl font-bold text-cyan-400 mb-1 tracking-wider">
            CTE
          </h1>

          <h2 className="text-xl text-white font-semibold mb-2">
            Portal do Aluno
          </h2>

          <p className="text-gray-300 text-sm mb-6">
            Acesse sua jornada: treinos, presença e evolução na graduação.
          </p>

          {/* email */}
          <div className="text-left mb-4">
            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="email"
              placeholder="seuemail@email.com"
              className="w-full mt-1 p-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>

          {/* senha */}
          <div className="text-left mb-6">
            <label className="text-gray-300 text-sm">Senha</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 p-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>

          {/* botão */}
          <button className="w-full py-3 rounded-lg font-semibold text-white
          bg-gradient-to-r from-cyan-500 to-blue-500
          shadow-lg shadow-cyan-500/30
          hover:scale-[1.03] hover:shadow-cyan-400/50
          transition">
            Entrar no Portal
          </button>

          {/* loading */}
          <div className="flex items-center justify-center gap-2 text-cyan-300 text-sm mt-4">
            <div className="w-4 h-4 border-2 border-cyan-300 border-t-transparent rounded-full animate-spin"></div>
            Entrando no portal...
          </div>

          <p className="text-gray-400 text-xs mt-4">
            Dica: utilize o e-mail cadastrado pela secretaria.
          </p>

        </div>
      </div>
    </div>
  )
}