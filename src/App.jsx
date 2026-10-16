const pasos = [
  { icono: '💻', titulo: 'Push', detalle: 'git push origin main' },
  { icono: '🐙', titulo: 'GitHub', detalle: 'Rama main' },
  { icono: '⚙️', titulo: 'Actions', detalle: 'Build + deploy' },
  { icono: '🔐', titulo: 'SSH', detalle: 'Secrets EC2' },
  { icono: '☁️', titulo: 'EC2 + Apache', detalle: '/var/www/html' },
]

export default function App() {
  const fecha = new Date().toLocaleString('es-CL')

  return (
    <main className="pantalla">
      <div className="fondo" aria-hidden="true">
        <span className="burbuja b1" />
        <span className="burbuja b2" />
        <span className="burbuja b3" />
      </div>

      <section className="tarjeta">
        <span className="estado">
          <span className="punto" /> Sitio web en línea
        </span>

        <h1 className="titulo">¡Hola Mund! 👋</h1>
        <p className="subtitulo">
          App React desplegada automáticamente en AWS EC2 con Apache
          mediante GitHub Actions.
        </p>

        <ol className="pipeline">
          {pasos.map((p, i) => (
            <li key={p.titulo} className="paso" style={{ animationDelay: `${i * 0.12}s` }}>
              <span className="icono">{p.icono}</span>
              <strong>{p.titulo}</strong>
              <small>{p.detalle}</small>
            </li>
          ))}
        </ol>

        <footer className="pie">Cargado: {fecha}</footer>
      </section>
    </main>
  )
}
