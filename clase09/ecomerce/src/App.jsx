import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from "./components/ItemListContainer";

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greetings={"Tienda Coder"} />}
        />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App
