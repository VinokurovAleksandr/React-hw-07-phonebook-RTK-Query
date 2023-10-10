import React, { useState } from "react";

import { useDispatch, useSelector } from 'react-redux';
// import contactsActions from '.././redux/contacts-actions/contacts-actions';

import style from '../ContactForm/style.module.css';
import { getContacts, addContacts } from '../redux/contactsSlise';
import { Spinner } from '../Spinner/Spiner';

import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import {useCreateContactMutation} from '../services/contactsApi';   




export default function ContactForm() {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const dispatch = useDispatch();
  // const contacts = useSelector(getContacts);


  const [createContact, {isLoading}] = useCreateContactMutation();
  //  const handleSubmit = e => {
  //    e.preventDefault();
     
    //  if (contacts.some(({ name }) => name === name.toLowerCase())) {
    //    Notiflix.Notify.warning(
    //      `Conatct ${name} is already in your cotacts list`
    //    );
    //    return;
    // }

    //  onSubmit({ id: nanoid(), name, number })
    //  dispatch(addContacts({
    //    name: name,
    //    number,
    //    id: nanoid()
    //   }));
    //  createContact(e.target.elements.value)

   
    

    //     resetForm();
    // };

  // const resetForm = () => {
  //   setName('');
  //   setNumber('');
  //   };
  
  // const handleChangeAddContacts = e => {
  //   const { name, value } = e.target;

  //   switch (name) {
  //     case 'name':
  //       setName(value)
  //       break;
  //     case 'number':
  //       setNumber(value)
  //       break;

  //     default:
  //       return;
  //   }
  // };
  

  const handleSubmit = (name, number) => {
    e.preventDefault();

    const name = value.name;
    const number = value.number;

    console.log(e.target.elements.value);
    // console.log(e.currentTarget.elements.number.value);
    createContact(name, number )
    // e.target.reset();
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
            // htmlFor={name}
          >Name
            <input
            type="text"
              // value={name}
              // onChange={handleChangeAddContacts}
              // id={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          </label>
            <label
              className={style.label_name}
          // htmlFor={number}
          >
            Number
           <input
              type="tel"
              // id={number}
              // value={number}
              // onChange={handleChangeAddContacts}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          
        <button 
            disabled={isLoading}
            className={style.formBtn}
            type="submit">
          {isLoading ? <Spinner /> : ' Add contact'} 
           
        </button>  
        </form>
    </>
            
         ); 
};


// const mapDispatchToProps = dispatch => ({
 
//   onSubmit: ( {name, number} ) => {
//       const id = nanoid();
//     const contact = { id, name, number };
//     dispatch(contactsActions.addContacts(contact));
//   }
// });

// export default connect(mapDispatchToProps)(ContactForm);


// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };