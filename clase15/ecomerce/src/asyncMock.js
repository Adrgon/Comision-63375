const products = [
  {
    id: "1",
    name: "iphone 12",
    price: 1000,
    category: "celular",
    img: "https://www.ubuy.com.ar/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9zZW8vQXBwbGUtaVBob25lLTEyLTY0R0ItQmx1ZS01Ry1GdWxseS1VbmxvY2tlZC1CLUdyYWRlLVVzZWQtQ2VsbHBob25lXzBkMDk1MWJjLTViNzgtNGRiYy05OTQ5LTNkOWJkMzE5MTE3Ni4wZGE3NWM0MjQzZmJlMjk0ZTNjM2UxOTg0NjU5MWMzZS5qcGVn.jpg",
    stock: 25,
    description: "Descripcion de Iphone 12",
  },
  {
    id: "2",
    name: "samsung s21",
    price: 800,
    category: "celular",
    img: "https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzalaro-thumb-368338803",
    stock: 16,
    description: "Descripcion de Samsung s21",
  },
  {
    id: "3",
    name: "Ipad 8va generacion",
    price: 1200,
    category: "tablet",
    img: "https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw",
    stock: 0,
    description: "Descripcion de Ipad",
  },
  {
    id: "4",
    name: "notebook",
    price: 1200,
    category: "computer",
    img: "https://bangho.vtexassets.com/arquivos/ids/161330/notebook-gamer-gm-15z12-gtx1650-4gb-gddr6-windows-11-1.jpg?v=638082621108000000",
    stock: 0,
    description: "Descripcion de Ipad",
  },
  {
    id: "5",
    name: "Google Pixel",
    price: 800,
    category: "celular",
    img: "https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzalaro-thumb-368338803",
    stock: 16,
    description: "Descripcion de Samsung s21",
  },
  {
    id: "6",
    name: "Motorola Razor",
    price: 800,
    category: "celular",
    img: "https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzalaro-thumb-368338803",
    stock: 16,
    description: "Descripcion de Samsung s21",
  },
  {
    id: "7",
    name: "Galaxies Tab",
    price: 1200,
    category: "tablet",
    img: "https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw",
    stock: 0,
    description: "Descripcion de Ipad",
  },
  {
    id: "8",
    name: "Ipad Mini",
    price: 1200,
    category: "tablet",
    img: "https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw",
    stock: 0,
    description: "Descripcion de Ipad mini",
  },
  {
    id: "9",
    name: "notebook",
    price: 1200,
    category: "computer",
    img: "https://bangho.vtexassets.com/arquivos/ids/161330/notebook-gamer-gm-15z12-gtx1650-4gb-gddr6-windows-11-1.jpg?v=638082621108000000",
    stock: 0,
    description: "Descripcion de computer",
  },
  {
    id: "10",
    name: "notebook",
    price: 1200,
    category: "computer",
    img: "/public/images/notebook10.jpg",
    stock: 0,
    description: "Descripcion de computer",
  },
];


// obtener todos los productos
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2500);
  });
};

// obtener los productos por categoria
export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod)=> prod.category === categoryId));
    }, 2500);
  });
}

// obtener un solo producto por id
 export const getProductByID = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productId));
      }, 1000);
    });
};
