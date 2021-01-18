import React,{Component} from 'react';
import styles from '../PhonebookForm/phonebookForm.module.css';
const { v4: uuidv4 } = require('uuid');


class PhonebookForm extends Component {
    
    state = {
        name: '',
        number: ''
    }
    
    nameInputId = uuidv4();
    numberInputId = uuidv4();
    
    handleSubmit = (e) => {
        e.preventDefault();
        
        if(this.state.name.length === 0)
        {
            alert('Please enter name')
            return
        }

        if(this.state.number.length === 0)
        {
            alert('Please enter number')
            return
        }

        this.props.onSubmit(this.state);
        this.reset();
    }
    
    reset = ()=> {
        this.setState({
            name: '',
            number: ''
        })
    }


    handleChange = (event) => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        })
    }
    
    
    
    render (){
        const {name, number} = this.state;
        
        return <div>
            
            <form className ={styles.form} onSubmit ={this.handleSubmit}>
                
                <label className ={styles.label}> <span className ={styles.name}>Name</span>  <input className ={styles.input} name ="name" type ="text" value ={name} placeholder ="enter name" onChange ={this.handleChange}/></label>
                
                <label className ={styles.label}> Number <input className ={styles.input} name ="number" type ="number" value ={number} placeholder ="enter number" onChange ={this.handleChange}/></label>
               
                <button className ={styles.btn} type ="submit">add contact</button>
                
            </form>
            
        </div>
    }
}


export default PhonebookForm;