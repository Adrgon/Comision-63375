

function Card({children}) {
    //console.log(props)
  return (
    <div style={{border: "1px solid #ddd", padding: "16px", borderRadius: "8px" }}>
        {children}
    </div>
  )
}

export default Card
