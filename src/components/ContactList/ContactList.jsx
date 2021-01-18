import PropTypes from 'prop-types';
import styles from '../ContactList/contactList.module.css';



function Card ({ arr, onDel}){
    return <div className ={styles.container}>
        <ul>{ arr.map(({id, name, number})=> { 
            return <li className ={styles.item} key ={id}><h3 className ={styles.name}>{name} :</h3><a className ={styles.number} href={number}>{number}</a>
            <button className ={styles.btn}  onClick ={()=>{onDel(id)}} type ="button">delite</button></li> })}
        </ul>

    </div>
}


Card.propTypes ={

    arr: PropTypes.array.isRequired,
    onDel: PropTypes.func.isRequired,

}

export default Card;



