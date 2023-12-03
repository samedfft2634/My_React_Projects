import './Card.scss'

const Card = ({data}) => {
  return (
    <div className="cardList">
        {data.map(({id, title, date, desc, image})=>(
            <div className='card' key={id}>
                <div className="cardImg">
                    <div className='img'>
                    <img src={image} alt="horosLogo" />
                    <span className='date'>{date}</span>
                    </div>
                    <span className="title">{title}</span>
                    <p className='description'>{desc}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Card