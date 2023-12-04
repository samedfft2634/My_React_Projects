import { useState,useEffect } from 'react'

const PlayerCard = ({ name, img, statistics }) => {
    let [stat, setStat] = useState(false)
    const handleClick = () => {
        setStat(!stat)
    }
    const handleMouseLeave = () => {
        setTimeout(() => {
          setStat(false);
        }, 1000); 
      };

      useEffect(() => {
        return () => {
          clearTimeout();
        };
      }, []);
	return (
		<div className="PlayerCard" onClick={handleClick} onMouseLeave={handleMouseLeave}>
			<div className="sides">
				<div className="front">
					<img  src={img} alt="playerPhoto" style={{visibility:`${stat ? "hidden" : "visible" }`}}/>
				</div>
				<div className="back">
					<ul style={{display:`${stat ? "block" : "none"}`}}>
						{statistics.map((stats,index) => (
							<li key={index}>{stats}</li>
						))}
					</ul>
				</div>
			</div>
			<h3>{name}</h3>
		</div>
	);
};

export default PlayerCard;
