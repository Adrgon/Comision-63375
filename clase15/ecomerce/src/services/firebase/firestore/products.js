import { db } from '../index'
import { createProductAdapterFromFirebase } from '../../../adapters/ProductAdapter'
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";


export const getProducts = (categoryId) => {
    const productsCollection = categoryId
        ? query(collection(db, "products"), where("category", "==", categoryId))
        : collection(db, "products")
    
    return getDocs(productsCollection)
      .then((querySnapshot) => {
        const productAdapted = querySnapshot.docs.map((doc) => {
          return createProductAdapterFromFirebase(doc);
        });
        return productAdapted;
      })
      .catch((error) => {
        return error;
      });
}

export const getProductById = (itemId) => {
  const productDoc = doc(db, "products", itemId);

  return getDoc(productDoc)
    .then((queryDocumentSnapshot) => {
      const productAdapted = createProductAdapterFromFirebase(
        queryDocumentSnapshot
      );
      return productAdapted;
    })
    .catch((error) => {
      return error;
    });
};
