export const createProductAdapterFromFirebase = (doc) => {
    const data = doc.data()

    return {
        id: doc.id,
        name: data.name,
        category: data.category,
        img: data.img,
        price: data.price,
        stock: data.stock,
        description: data.description
    }

}
