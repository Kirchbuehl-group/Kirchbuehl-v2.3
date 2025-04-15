import React from "react";

const products = [
  {
    name: 'iPad 11" Wi-Fi (A16)',
    price: "399,00 EUR",
    delivery: "5–14 Werktage",
    note: "Solides Einsteigergerät mit starkem Preis-Leistungs-Verhältnis."
  },
  {
    name: 'iPad Pro 11" M2 Wi-Fi',
    price: "749,00 EUR",
    delivery: "5–14 Werktage",
    note: "Top-Leistung für intensive Anwendungen und Lehrer:innen."
  },
  {
    name: 'iPad Air 10,9" (M1)',
    price: "619,00 EUR",
    delivery: "5–14 Werktage",
    note: "Modernes Design, stark für den Schulalltag."
  }
];

const text = {
  de: {
    angebot: "Unsere iPad-Angebote",
    willkommen: "Digitale Bildung. Einfach gemacht.",
    entdecken: "Jetzt Angebote entdecken",
    impressum: "Impressum",
    datenschutz: "Datenschutz",
  }
};

export default function KirchbuehlWebsite() {
  const lang = "de";

  return (
    <div className="font-sans">
      {/* Header mit Logo */}
      <header className="bg-white border-b shadow-sm p-4 flex justify-between items-center">
        <img src="./logo.png" alt="Kirchbühl Group Logo" className="h-10" />
        <nav className="space-x-6 text-sm">
          <a href="#angebote" className="text-gray-700 hover:text-black">Angebote</a>
          <a href="#impressum" className="text-gray-700 hover:text-black">{text[lang].impressum}</a>
          <a href="#datenschutz" className="text-gray-700 hover:text-black">{text[lang].datenschutz}</a>
        </nav>
      </header>

      {/* Hero-Bereich */}
      <section className="bg-gray-100 text-center py-24 px-6">
        <h1 className="text-4xl font-bold mb-4">{text[lang].willkommen}</h1>
        <a href="#angebote" className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900">
          {text[lang].entdecken}
        </a>
      </section>

      {/* iPad-Angebote */}
      <section id="angebote" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{text[lang].angebot}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((ipad, i) => (
              <div key={i} className="bg-gray-50 rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
                <img src={`./ipad${i + 1}.jpg`} alt={ipad.name} className="w-full h-48 object-contain bg-white p-4" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{ipad.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{ipad.note}</p>
                  <details className="text-sm">
                    <summary className="cursor-pointer text-blue-600 hover:underline">Jetzt ansehen</summary>
                    <p className="mt-2"><strong>Preis:</strong> {ipad.price}</p>
                    <p><strong>Lieferzeit:</strong> {ipad.delivery}</p>
                  </details>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impressum */}
      <section id="impressum" className="py-12 px-6 bg-gray-100 text-sm">
        <div className="max-w-4xl mx-auto space-y-2">
          <h3 className="text-xl font-semibold mb-4">Impressum</h3>
          <p>Kirchbühl Group – Fillip Netzke</p>
          <p>Kirchbühlstraße 6, 79677 Schönau im Schwarzwald</p>
          <p>Tel: 0151 47600166</p>
          <p>E-Mail: kirchbuehlgroup@gmail.com</p>
        </div>
      </section>

      {/* Datenschutz */}
      <section id="datenschutz" className="py-12 px-6 bg-white text-sm">
        <div className="max-w-4xl mx-auto space-y-2">
          <h3 className="text-xl font-semibold mb-4">Datenschutzerklärung</h3>
          <p>Ihre Daten werden gemäß DSGVO verarbeitet. Wir verwenden keine Cookies oder Tracking-Tools.</p>
          <p>Für Anfragen zur Datenverarbeitung kontaktieren Sie uns bitte per E-Mail.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 text-center py-6 text-xs text-gray-500">
        &copy; 2024 Kirchbühl Group – Fillip Netzke · {text[lang].impressum} · {text[lang].datenschutz}
      </footer>
    </div>
  );
}