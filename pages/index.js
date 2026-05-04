export default function Home() {
  return (
    <div style={{fontFamily: "Arial", background: "#0a0a0a", color: "white"}}>

      {/* HERO */}
      <section style={{
        height: "100vh",
        backgroundImage: "url('https://www.xatakafoto.com/trucos-y-consejos/estas-son-las-cualidades-que-te-pueden-ayudar-a-convertirte-en-fotografo-profesional')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}>
        <div style={{background: "rgba(0,0,0,0.6)", padding: "40px"}}>
          <h1 style={{fontSize: "60px"}}>RDZ Shots</h1>
          <p>Capturamos momentos únicos</p>
        </div>
      </section>

      {/* PORTAFOLIO */}
      <section style={{padding: "50px"}}>
        <h2>Portafolio</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "10px"
        }}>
          <img src="https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0" />
          <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7" />
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552" />
        </div>
      </section>

      {/* PAQUETES */}
      <section style={{padding: "50px", background: "#111"}}>
        <h2>Paquetes</h2>
        <div style={{display: "flex", gap: "20px", flexWrap: "wrap"}}>
          
          <div style={{background: "#222", padding: "20px", borderRadius: "10px"}}>
            <h3>Básico</h3>
            <p>$500</p>
          </div>

          <div style={{background: "#222", padding: "20px", borderRadius: "10px"}}>
            <h3>Premium</h3>
            <p>$1500</p>
          </div>

        </div>
      </section>

      {/* CONTACTO */}
      <section style={{padding: "50px"}}>
        <h2>Solicitar cotización</h2>
        <input placeholder="Nombre" /><br/><br/>
        <input placeholder="Email" /><br/><br/>
        <textarea placeholder="Mensaje"></textarea><br/><br/>
        <button>Enviar</button>

        <br/><br/>

        <a href="https://wa.me/521XXXXXXXXXX" target="_blank">
          Contáctanos por WhatsApp
        </a>
      </section>

    </div>
  )
}
