import Header from "./components/Header/Header"
import LessonCard from "./components/LessonCard/LessonCard"


function App() {
  return (
    <div className="App">
    <Header />
    <h3 style={{textAlign:"center", fontFamily:"monospace", fontSize:"3rem",color:"#fff",marginTop:".5rem"}}>Lessons Schedule</h3>
    <main>
    <LessonCard />      
    </main>
    </div>
  )
}

export default App
