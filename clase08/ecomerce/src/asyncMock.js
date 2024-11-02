const products = [
  {
    id: 1,
    name: "Bicicleta Paseo",
    price: 100000,
    category: "Bicicletas",
    img: "img/bicicleta1.jpg",
    stock: 12,
    description: "Bicicleta de carrera con 26 cambios",
  },
  {
    id: 2,
    name: "Bicicleta Montaña",
    price: 150000,
    category: "Bicicletas",
    img: "img/bicicleta2.jpg",
    stock: 8,
    description: "Bicicleta de montaña con suspensión completa",
  },
  {
    id: 3,
    name: "Bicicleta Eléctrica",
    price: 250000,
    category: "Bicicletas",
    img: "img/bicicleta3.jpg",
    stock: 5,
    description: "Bicicleta eléctrica con batería de larga duración",
  },
  {
    id: 4,
    name: "Bicicleta BMX",
    price: 120000,
    category: "Bicicletas",
    img: "img/bicicleta4.jpg",
    stock: 10,
    description: "Bicicleta BMX para acrobacias y trucos",
  },
  {
    id: 5,
    name: "Bicicleta Plegable",
    price: 90000,
    category: "Bicicletas",
    img: "img/bicicleta5.jpg",
    stock: 15,
    description: "Bicicleta plegable, ideal para la ciudad",
  },
  {
    id: 6,
    name: "Bicicleta de Carretera",
    price: 180000,
    category: "Bicicletas",
    img: "img/bicicleta6.jpg",
    stock: 7,
    description: "Bicicleta ligera para velocidad en carretera",
  },
  {
    id: 7,
    name: "Bicicleta Infantil",
    price: 70000,
    category: "Bicicletas",
    img: "img/bicicleta7.jpg",
    stock: 20,
    description: "Bicicleta para niños con ruedas de entrenamiento",
  },
  {
    id: 8,
    name: "Bicicleta Tandem",
    price: 200000,
    category: "Bicicletas",
    img: "img/bicicleta8.jpg",
    stock: 3,
    description: "Bicicleta tándem para dos personas",
  },
  {
    id: 9,
    name: "Bicicleta de Gravel",
    price: 220000,
    category: "Bicicletas",
    img: "img/bicicleta9.jpg",
    stock: 6,
    description: "Bicicleta versátil para caminos de grava y asfalto",
  },
  {
    id: 10,
    name: "Bicicleta de Paseo Vintage",
    price: 130000,
    category: "Bicicletas",
    img: "img/bicicleta10.jpg",
    stock: 9,
    description: "Bicicleta de paseo con diseño vintage",
  },
];

export const getProducts = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },2500)
    })
}

/* export const getProductByID = (id) => {
    console.log(id)
}; */
