import CardWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav >
      <div >
        <a  href="#">
          Tienda Coder
        </a>
        <button
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span ></span>
        </button>
        <div  id="navbarSupportedContent">
          <ul >
            <li >
              <a  aria-current="page" href="#">
                Home
              </a>
            </li>
            <li >
              <a  href="#">
                Link
              </a>
            </li>
          </ul>
          <form  role="search">
            <CardWidget cartCount={7} />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
