import styles from './LessonCard.module.css'
import { data } from '../helper/data'

function LessonCard() {
    return (          
        <div className={styles.div} >
           {data.map(({name, hour, image, id})=>(
            <div key={id} className={styles.info}>
                <div className={styles.img}>
                    <img src={image} alt="lessonLogo"  />
                </div>
                <div className={styles.text}>
                    <h3><span>Lesson Name:</span> {name}</h3>
                    <h3><span>Lesson Hour:</span> {hour}</h3>
                </div>
            </div>
           ))} 
        </div>
        
     );
}

export default LessonCard;