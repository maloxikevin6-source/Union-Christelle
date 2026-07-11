export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="flex justify-between items-center p-6 shadow">
        <h1 className="text-2xl font-bold text-pink-600">
          Union-Christelle
        </h1>

        <nav className="hidden md:flex gap-6">
          <a href="#">Accueil</a>
          <a href="#services">Services</a>
          <a href="#apropos">À propos</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="bg-pink-600 text-white px-5 py-2 rounded-lg">
          S'inscrire
        </button>
      </header>

      <section className="text-center py-24 px-6 bg-pink-50">
        <h2 className="text-5xl font-bold mb-6">
          Trouvez votre partenaire de vie.
        </h2>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Union-Christelle accompagne les personnes sérieuses vers une relation durable grâce à un service sécurisé et personnalisé.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-pink-600 text-white px-8 py-3 rounded-xl">
            Commencer
          </button>

          <button className="border border-pink-600 text-pink-600 px-8 py-3 rounded-xl">
            Nous contacter
          </button>
        </div>
      </section>

      <section id="services" className="py-20 px-8">
        <h3 className="text-4xl font-bold text-center mb-12">
          Nos services
        </h3>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="shadow rounded-xl p-6">
            ❤️ Mise en relation
          </div>

          <div className="shadow rounded-xl p-6">
            🔒 Vérification des profils
          </div>

          <div className="shadow rounded-xl p-6">
            🌍 Rencontres internationales
          </div>

          <div className="shadow rounded-xl p-6">
            🤝 Accompagnement personnalisé
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white text-center py-8">
        © 2026 Union-Christelle - Tous droits réservés.
      </footer>
    </main>
  );
}
