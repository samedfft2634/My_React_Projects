import Doctors from "../components/Doctors"


const Home = () => {
  return (
    <div className="Home">
      <h1 style={{color:"red"}}>ANATOLIAN HOSPITAL</h1>
      <h3 style={{color:"blueviolet"}}>OUR DOCTORS</h3>
        <Doctors />
    </div>
  )
}

export default Home