import React from "react";

import {ContactForm} from './ContactForm/ContactForm';

import ContactList from "./ContactList/ContactList";
import style from './style.module.css';


export default function App ()  {


  return (
 
          <div className={style.phonebook}>
          <h2>
          Phonebook
         </h2>
         <ContactForm />
        
             <div>
          <h2 className={style.name}>Contacts</h2>
           <ContactList
          />
      </div>
         </div> 

    )
  };


