import React, { useState, useEffect } from "react";
import { nanoid } from 'nanoid';

import style from './style.module.css';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from "./ContactList/ContactList";


export default function App ()  {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  },[contacts])

  

  const handleChangeContacts = e => {
    e.preventDefault();

     setFilter(e.target.value);
  };


  const deliteContacts = (contactId) => {
    setContacts((prevContacts) => 
      prevContacts.filter((contact) => contact.id !== contactId)
    
      )
  };

  const addContact = ({ name, number }) => {
    const blockAddContact = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());
    if (blockAddContact) {
       return alert(`${name} is alredy in contacts`)
     }

    const contact = {
      id: nanoid(),
      name,
      number
    };

    setContacts((prevContacts) => [...prevContacts, contact])
  };

  const visibleContacts = () => {
    const normalizedContacts = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContacts))
  };
  

  const visibleCont = visibleContacts();

  return (
      <div className={style.phonebook}>
         <h2>
          Phonebook
        </h2>
        <ContactForm onSubmit={addContact} />
            <div>
          <h2 className={style.name}>Contacts</h2>
          <Filter value={filter} onChange={handleChangeContacts} />
          <ContactList
            visibleCont={visibleCont}
            deliteContacts={deliteContacts}
          />
      </div>
         </div>
    )

  };
