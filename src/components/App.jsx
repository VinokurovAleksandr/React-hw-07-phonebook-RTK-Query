import React, { useState } from "react";
// import { nanoid } from 'nanoid';

import style from './style.module.css';

import {ContactForm} from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from "./ContactList/ContactList";
// import initialContacts from '../components/initialContacts.json'

// import addContact from './redux/contacts-actions/contacts-actions';


export default function App ()  {
  // const [contacts, setContacts] = useState(initialContacts);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts]);

  




  // const deleteContacts = (contactId) => {
  //   setContacts((prevContacts) => 
  //     prevContacts.filter((contact) => contact.id !== contactId)
    
  //     )
  // };

  // const addContact = ({ name, number }) => {
  //   const blockAddContact = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());
  //   if (blockAddContact) {
  //      return alert(`${name} is alredy in contacts`)
  //    }

  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number
  //   };

  //   setContacts((prevContacts) => [...prevContacts, contact])
  // };

  // const visibleContacts = () => {
  //   const normalizedContacts = filter.toLowerCase();

  //   return contact.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedContacts))
  // };
  

  // const visibleCont = visibleContacts();

  return (
 
          <div className={style.phonebook}>
          <h2>
          Phonebook
         </h2>
         <ContactForm />
        
             <div>
          <h2 className={style.name}>Contacts</h2>
           {/* <Filter value={filter} onChange={handleChangeContacts} /> */}
          <Filter  />
           <ContactList
            // visibleCont={visibleCont}
            // deleteContacts={OnDeleteContacts}
          />
      </div>
         </div> 

    )
  };



// export default connect()App();


  // <div className={style.phonebook}>
  //         <h2>
  //         Phonebook
  //        </h2>
  //        {/* <ContactForm onSubmit={addContact} /> */}
  //        <ContactForm />
        
  //            <div>
  //         <h2 className={style.name}>Contacts</h2>
  //          {/* <Filter value={filter} onChange={handleChangeContacts} /> */}
  //         <Filter  />
  //          <ContactList
  //           // visibleCont={visibleCont}
  //           // deleteContacts={OnDeleteContacts}
  //         />
  //     </div>
  //        </div> 