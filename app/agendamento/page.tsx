"use client";

import { useState } from "react";

export default function AgendamentoPage() {
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const [menuOpen, setMenuOpen] = useState(false);
  const [stage, setStage] = useState<"login" | "register" | "schedule">(
    "login",
  );

  // Form states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPhone, setRegisterPhone] = useState("");
  const [registerBirthDate, setRegisterBirthDate] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");

  const content = {
    pt: {
      title: "Agendar Consulta",
      loginTitle: "Entre na sua conta",
      registerTitle: "Criar nova conta",
      scheduleTitle: "Escolha a data",
      email: "E-mail",
      password: "Senha",
      confirmPassword: "Confirmar senha",
      name: "Nome completo",
      phone: "Telefone",
      birthDate: "Data de nascimento",
      loginButton: "Entrar",
      registerButton: "Cadastrar",
      googleLogin: "Entrar com Google",
      noAccount: "Não tem conta?",
      hasAccount: "Já tem conta?",
      createAccount: "Criar conta",
      backToLogin: "Voltar para login",
      menuHome: "Início",
      menuAbout: "Quem Sou Eu",
      menuCardOfDay: "Carta do Dia",
      menuConsultation: "Agendar Consulta",
    },
    en: {
      title: "Schedule Consultation",
      loginTitle: "Sign in to your account",
      registerTitle: "Create new account",
      scheduleTitle: "Choose date",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm password",
      name: "Full name",
      phone: "Phone",
      birthDate: "Birth date",
      loginButton: "Sign in",
      registerButton: "Register",
      googleLogin: "Sign in with Google",
      noAccount: "Don't have an account?",
      hasAccount: "Already have an account?",
      createAccount: "Create account",
      backToLogin: "Back to login",
      menuHome: "Home",
      menuAbout: "About Me",
      menuCardOfDay: "Card of the Day",
      menuConsultation: "Schedule Consultation",
    },
  };

  const handleGoogleLogin = () => {
    // TODO: Implement Google OAuth
    alert("Google login will be implemented");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    setStage("schedule");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerPassword !== registerConfirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // TODO: Implement registration logic
    setStage("schedule");
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* SIDEBAR MENU */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between border-b px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 p-2">
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <circle
                    cx="50"
                    cy="25"
                    r="18"
                    fill="none"
                    stroke="url(#grad1-menu)"
                    strokeWidth="2"
                  />
                  <circle
                    cx="30"
                    cy="55"
                    r="18"
                    fill="none"
                    stroke="url(#grad2-menu)"
                    strokeWidth="2"
                  />
                  <circle
                    cx="70"
                    cy="55"
                    r="18"
                    fill="none"
                    stroke="url(#grad3-menu)"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient
                      id="grad1-menu"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#9333ea" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                    <linearGradient
                      id="grad2-menu"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                    <linearGradient
                      id="grad3-menu"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#fb923c" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="font-semibold">Taróloga Calil</span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto py-4">
            <a
              href="/"
              className="flex items-center gap-3 px-4 py-3 hover:bg-violet-50 transition-colors"
            >
              <span className="text-2xl">🏠</span>
              <span className="font-medium">{content[language].menuHome}</span>
            </a>
            <a
              href="/"
              className="flex items-center gap-3 px-4 py-3 hover:bg-violet-50 transition-colors"
            >
              <span className="text-2xl">🔮</span>
              <span className="font-medium">{content[language].menuAbout}</span>
            </a>
            <a
              href="/carta-do-dia"
              className="flex items-center gap-3 px-4 py-3 hover:bg-violet-50 transition-colors"
            >
              <span className="text-2xl">🎴</span>
              <span className="font-medium">
                {content[language].menuCardOfDay}
              </span>
            </a>
            <a
              href="/agendamento"
              className="flex items-center gap-3 px-4 py-3 bg-violet-100 border-l-4 border-violet-600 transition-colors"
            >
              <span className="text-2xl">📅</span>
              <span className="font-semibold text-violet-700">
                {content[language].menuConsultation}
              </span>
            </a>
          </nav>

          {/* Menu Footer */}
          <div className="border-t px-4 py-4">
            <p className="text-sm text-gray-600 text-center">
              © 2026 Taróloga Calil
            </p>
          </div>
        </div>
      </aside>

      {/* HEADER */}
      <header className="flex items-center justify-between border-b px-4 py-3">
        {/* LEFT SIDE: Hamburger Menu + Logo + Name */}
        <div className="flex items-center gap-3">
          {/* Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Menu"
          >
            <span
              className={`block h-0.5 w-6 bg-zinc-900 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-zinc-900 transition-all ${menuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-zinc-900 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>

          {/* Logo */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 p-2">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <circle
                cx="50"
                cy="25"
                r="18"
                fill="none"
                stroke="url(#grad1)"
                strokeWidth="2"
              />
              <circle
                cx="30"
                cy="55"
                r="18"
                fill="none"
                stroke="url(#grad2)"
                strokeWidth="2"
              />
              <circle
                cx="70"
                cy="55"
                r="18"
                fill="none"
                stroke="url(#grad3)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9333ea" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
                <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Name */}
          <div className="font-semibold">Taróloga Calil</div>
        </div>

        {/* LANGUAGE SWITCHER */}
        <div className="flex gap-2">
          <button
            onClick={() => setLanguage("pt")}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              language === "pt"
                ? "bg-violet-600 text-white"
                : "text-zinc-500 hover:bg-zinc-100"
            }`}
          >
            PT
          </button>
          <button
            onClick={() => setLanguage("en")}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              language === "en"
                ? "bg-violet-600 text-white"
                : "text-zinc-500 hover:bg-zinc-100"
            }`}
          >
            EN
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-md px-4 py-8">
        {/* TITLE */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="text-4xl">📅</span>
          <h1 className="text-center text-3xl font-semibold text-violet-700 font-[family-name:var(--font-cinzel)]">
            {content[language].title}
          </h1>
        </div>

        {/* LOGIN FORM */}
        {stage === "login" && (
          <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
            <h2 className="text-xl font-semibold text-center text-zinc-800">
              {content[language].loginTitle}
            </h2>

            {/* Google Login Button */}
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="font-medium text-gray-700">
                {content[language].googleLogin}
              </span>
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">ou</span>
              </div>
            </div>

            {/* Email/Password Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {content[language].email}
                </label>
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {content[language].password}
                </label>
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-violet-600 text-white py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors"
              >
                {content[language].loginButton}
              </button>
            </form>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                {content[language].noAccount}{" "}
                <button
                  onClick={() => setStage("register")}
                  className="text-violet-600 font-semibold hover:text-violet-700"
                >
                  {content[language].createAccount}
                </button>
              </p>
            </div>
          </div>
        )}

        {/* REGISTER FORM */}
        {stage === "register" && (
          <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
            <h2 className="text-xl font-semibold text-center text-zinc-800">
              {content[language].registerTitle}
            </h2>

            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {content[language].name}
                </label>
                <input
                  type="text"
                  value={registerName}
                  onChange={(e) => setRegisterName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {content[language].email}
                </label>
                <input
                  type="email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {content[language].phone}
                </label>
                <input
                  type="tel"
                  value={registerPhone}
                  onChange={(e) => setRegisterPhone(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {content[language].birthDate}
                </label>
                <input
                  type="date"
                  value={registerBirthDate}
                  onChange={(e) => setRegisterBirthDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {content[language].password}
                </label>
                <input
                  type="password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {content[language].confirmPassword}
                </label>
                <input
                  type="password"
                  value={registerConfirmPassword}
                  onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-violet-600 text-white py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors"
              >
                {content[language].registerButton}
              </button>
            </form>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                {content[language].hasAccount}{" "}
                <button
                  onClick={() => setStage("login")}
                  className="text-violet-600 font-semibold hover:text-violet-700"
                >
                  {content[language].backToLogin}
                </button>
              </p>
            </div>
          </div>
        )}

        {/* SCHEDULE SCREEN - Placeholder */}
        {stage === "schedule" && (
          <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
            <h2 className="text-xl font-semibold text-center text-zinc-800">
              {content[language].scheduleTitle}
            </h2>
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">
                📅 Tela de agendamento será implementada em breve
              </p>
              <p className="text-sm text-gray-500">
                (Integração com Google Calendar necessária)
              </p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
