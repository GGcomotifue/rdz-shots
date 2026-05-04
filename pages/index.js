export default function Home() {
  return (
    <div>

    <section className="hero-pro">
  <h1 className="logo-center">RDZ Shots</h1>
</section>

      <section className="section">
        <h2>Portafolio</h2>
        <div className="grid">
          <img src="" />
          <img src="" />
          <img src="" />
          
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
