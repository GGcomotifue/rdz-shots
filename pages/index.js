export default function Home() {
  return (
    <div>

      <section className="hero">
        <div className="overlay">
          <h1>RDZ Shots</h1>
          <p>Capturamos momentos únicos</p>
        </div>
      </section>

      <section className="section">
        <h2>Portafolio</h2>
        <div className="grid">
          <img src="https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0" />
          <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7" />
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552" />
        </div>
      </section>

      <section className="section">
        <h2>Paquetes</h2>
        <div style={{display: "flex", gap: "20px"}}>
          <div className="card">
            <h3>Básico</h3>
            <p>$500</p>
          </div>

          <div className="card">
            <h3>Premium</h3>
            <p>$1500</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Contacto</h2>
        <a className="whatsapp" href="https://wa.me/521XXXXXXXXXX">
          Escríbenos por WhatsApp
        </a>
      </section>

    </div>
  )
}
