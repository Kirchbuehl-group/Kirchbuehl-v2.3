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
    angebot: "Unsere iPad-Angebote"
  },
  en: {
    angebot: "Our iPad Offers"
  }
};

export default function KirchbuehlWebsite() {
  const lang = "de";

  return (
    <section id="angebote" className="py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{text[lang].angebot}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((ipad, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
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
  );
}