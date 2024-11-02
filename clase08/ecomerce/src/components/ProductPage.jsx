import Card from "./Card"


function ProductPage() {
  return (
    <>
      <Card>
        <h2>Producto Destacado</h2>
        <p>Este es un producto muy solicitado</p>
      </Card>
      <Card>
        <img
          width={150}
          height={150}
          src="https://media.gq.com.mx/photos/601047f419128da7b9d1b9c2/16:9/w_2560%2Cc_limit/Los%2520Simpson%2520-%2520GQ.jpg"
        />
      </Card>
      
    </>
  );
}

export default ProductPage
