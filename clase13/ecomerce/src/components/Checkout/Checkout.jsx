import {useState} from "react" 
import { useCart } from "../../hooks/useCart";
import {db} from '../../services/firebase'
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";


export default function Checkout() {
  //const [loading, setLoading] = useState(false)
  const [orderCreated, setOrderCreated] = useState(false)

  const {cart, totalQuantity, getTotal, clearCart} = useCart()
  const total = getTotal()

  const createOrder = async () => {
    //setLoading(true)
    const objOrder = {
      buyer: {
        firstName: "Adrian",
        lastName: "Gonzalez",
        phone: "123456789",
        address: "Acan nomas",
      }, 
      items: cart,
      totalQuantity,
      total,
      date: new Date()
    }

    
    const ids = cart.map((item)=> item.id)
    const productRef = collection(db, "products")

    const productsAddedFromFirestore = await getDocs(
      query(productRef, where(documentId(), "in", ids)))

      const { docs } = productsAddedFromFirestore

      const outOfStock = [];
      const batch = writeBatch(db)

      docs.forEach((doc) => {
        const dataDoc = doc.data()
        const stockDb = dataDoc.stock

        const productAddedToCart = cart.find((prod) => prod.id === doc.id)
        const prodQuantity = productAddedToCart.quantity

        if(stockDb >= prodQuantity) {
          batch.update(doc.ref, {stock: stockDb - prodQuantity})
        }else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      })

      if(outOfStock.length === 0) {
        await batch.commit();
        const orderRef = collection(db, "orders")
        const orderAdded = await addDoc(orderRef, objOrder);
        console.log(`El id de su orden es ${orderAdded.id}`);
        clearCart()
        setOrderCreated(true)


      }else {
        console.log("Hay productos fuera de stock")
      }

  }


  if(orderCreated) {
    <h1>La orden fue creada correctamente</h1>
  }


  return <>
    <h1>Checkout</h1>
    {/* formulario de checkout */}
    <button className="btn btn-primary" onClick={createOrder}>Generar Orden</button>
  </>;
}
