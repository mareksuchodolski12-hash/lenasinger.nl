const services = [
  {
    title: 'Śluby',
    description: 'Oprawa muzyczna ceremonii oraz przyjęcia — repertuar dopasowany do Waszej historii.',
  },
  {
    title: 'Eventy firmowe',
    description: 'Elegancka muzyka na gale, bankiety i spotkania biznesowe.',
  },
  {
    title: 'Koncerty i wydarzenia',
    description: 'Występy solowe i kameralne sety live na wydarzeniach lokalnych i prywatnych.',
  },
];

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Wokal na żywo</p>
        <h1>Lena Singer</h1>
        <p className="lead">
          Profesjonalna oprawa muzyczna ślubów, eventów i koncertów. Tworzę atmosferę, którą goście
          zapamiętują na lata.
        </p>
        <div className="actions">
          <a className="button primary" href="mailto:kontakt@lenasinger.nl">
            Zarezerwuj termin
          </a>
          <a className="button ghost" href="#oferta">
            Zobacz ofertę
          </a>
        </div>
      </section>

      <section id="oferta" className="section">
        <h2>Oferta</h2>
        <div className="grid">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact">
        <h2>Kontakt</h2>
        <p>Napisz wiadomość i opisz swój event — przygotuję propozycję dopasowaną do Twoich potrzeb.</p>
        <a className="button primary" href="mailto:kontakt@lenasinger.nl">
          kontakt@lenasinger.nl
        </a>
      </section>
    </main>
  );
}
