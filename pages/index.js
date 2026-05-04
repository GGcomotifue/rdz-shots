export default function Home() {
  return (
    <div style={{fontFamily: "Arial", background: "#0a0a0a", color: "white"}}>
      
      <section style={{textAlign: "center", padding: "100px 20px"}}>
        <h1 style={{fontSize: "50px"}}>RDZ Shots</h1>
        <p>Capturamos momentos únicos</p>
        <button style={{padding: "10px 20px", marginTop: "20px"}}>
          Ver Portafolio
        </button>
      </section>

      <section style={{padding: "50px"}}>
        <h2>Portafolio</h2>
        <p>Aquí irán tus fotos 🔥</p>
      </section>

      <section style={{padding: "50px", background: "#111"}}>
        <h2>Paquetes</h2>
        <p>Básico - $500</p>
        <p>Premium - $1500</p>
      </section>

      <section style={{padding: "50px"}}>
        <h2>Solicitar cotización</h2>
        <input placeholder="Nombre" /><br/><br/>
        <input placeholder="Email" /><br/><br/>
        <textarea placeholder="Mensaje"></textarea><br/><br/>
        <button>Enviar</button>
      </section>

    </div>
  )
}
