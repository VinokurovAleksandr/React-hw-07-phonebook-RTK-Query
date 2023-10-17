import React, { useState } from "react";

import style from '../ContactForm/style.module.css';
import { Spinner } from '../Spinner/Spiner';

import Notiflix from 'notiflix';

import {useCreateContactMutation, useFetchContactsQuery} from '../services/contactsApi';   


export const ContactForm = () => {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contact } = useFetchContactsQuery();

  const [createContact, { isLoading }] = useCreateContactMutation();
  

  const handleChangeAddContacts = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value)
        break;
      case 'number':
        setNumber(value)
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

      
    const options = { name, number };
   

    if (contact.some(({ name: contactName }) => contactName.toLowerCase() === name.toLowerCase())) {
        Notiflix.Notify.warning(
          `Conatct ${name} is already in your cotacts list`
      );
      return;
        
      } else {
        createContact(options)
      }
      resetForm();
  };

    const resetForm = () => {
    setName('');
    setNumber('');
    };
  

  return ( 
    
    <>
       <form
          className={style.form_phonebook}
          onSubmit={handleSubmit}
        >
        <label
          type='text'
            className={style.label_name}
            htmlFor={name}
          >Name
            <input
            type="text"
              value={name}
              onChange={handleChangeAddContacts}
              id={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          </label>
            <label
              className={style.label_name}
              htmlFor={number}
          >
            Number
           <input
              type="tel"
              id={number}
              value={number}
              onChange={handleChangeAddContacts}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          
        <button 
          disabled={isLoading}
    
            className={style.formBtn}
          type="submit"
        > {isLoading ? <Spinner /> : ' Add contact'} 
        </button>  
        </form>
      </>
            
         ); 
};


// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };






