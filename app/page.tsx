export default function Login() {
  return (
    <main
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-dark.jpg')" }}
    > 
      {/* overlay para contraste */}
      <div className="absolute inset-0 bg-[#02121a]/75"></div>

      {/* halo azul */}
      <div className="absolute w-[900px] h-[900px] bg-cyan-400/20 blur-[220px] rounded-full"></div>

      {/* container */}
      <div className="relative z-10 w-full max-w-md px-6">

        {/* borda glow */}
        <div
          className="p-[2px] rounded-2xl
          bg-gradient-to-r from-cyan-400/40 via-blue-400/20 to-cyan-400/40
          shadow-[0_0_50px_rgba(0,200,255,0.35)]"
        >

          {/* card */}
          <div className="backdrop-blur-xl bg-[#0D1E30]/90 border border-white/10 rounded-2xl p-8 text-center">

            {/* logo */}
            <img src="/logo.png" alt="Logo" className="mx-auto mb-4 " />

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
            <button
              className="
              relative w-full py-3 rounded-lg font-semibold text-white
              bg-gradient-to-b from-cyan-300 via-cyan-500 to-blue-600
              border border-cyan-200/40
              shadow-[0_0_12px_rgba(0,255,255,0.4)]
              overflow-hidden
              hover:brightness-110
              active:scale-[0.98]
              transition
              "
            >
              <span
                className="pointer-events-none absolute inset-0 rounded-lg
                bg-gradient-to-b from-white/40 via-white/10 to-transparent
                opacity-60"
              ></span>

              <span
                className="pointer-events-none absolute inset-[2px] rounded-md
                shadow-[inset_0_2px_6px_rgba(255,255,255,0.35)]"
              ></span>

              <span className="relative z-10">
                Entrar na Roda...
              </span>
            </button>

            {/* loading */}
            <div className="flex items-center justify-center gap-2 text-cyan-300 text-sm mt-4">
              <div className="w-4 h-4 border-2 border-cyan-300 border-t-transparent rounded-full animate-spin"></div>
              Entrando na Roda...
            </div>

            <p className="text-gray-400 text-xs mt-4">
              Dica: utilize o e-mail cadastrado na matrícula
            </p>

          </div>
        </div>

      </div>
    </main>
  )
}