import CartWidget from "../CartWidget/CartWidget"


function NavBar() {
  return (
    <>
      <ul>
        <li>Home</li>
        <li>Productos</li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </>
  );
}

export default NavBar
