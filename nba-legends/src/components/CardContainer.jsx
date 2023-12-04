import PlayerCard from "./PlayerCard"


const CardContainer = ({data}) => {
  return (
    <div className="CardContainer">
        {data.map((player,index)=>(
             <PlayerCard {...player} key={index}/>
        ))}
       
    </div>
  )
}

export default CardContainer