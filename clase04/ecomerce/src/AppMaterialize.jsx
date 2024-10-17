function App() {
  return (
    <>
      <nav>
        <div className="nav-wrapper blue darken-4">
          <a href="#" className="brand-logo">
            Mi Tienda
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Productos</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
            <li>
              <a href="#">Carrito</a>
            </li>
          </ul>
        </div>
        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li>
            <a href="#">Carrito</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
