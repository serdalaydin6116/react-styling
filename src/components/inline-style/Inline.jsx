const myStyle ={
    parag:{color:"blue",
    fontSize:"3rem",
    fontWeight:"800"},
    div:{
        backgroundColor:"gray",
        fontSize:"3.2rem"
    }
    
}

const Inline = () => {
  return (
    <>

<div style={{backgroundColor:"red", color:"#fff"}}>
    <h1> Hello from inline CSS</h1>
    <div style={myStyle.div}>
        <p style ={myStyle.parag}> CSS Styling</p>
    </div>
</div>


    </>
  )
}

export default Inline
