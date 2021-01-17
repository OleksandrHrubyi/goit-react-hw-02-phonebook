import PropTypes from 'prop-types';
import styles from '../Filter/filter.module.css';


const Filter = ({value, onChange}) => {
    return <label ><span className={styles.label}>Find contacts by name</span>
        <input className ={styles.input} type ="text" value ={value} placeholder ="find name" onChange ={onChange}></input>
        </label>
}



Filter.propTypes ={
    value: PropTypes.string,
    onChange: PropTypes.func,
}
       

    



export default Filter;