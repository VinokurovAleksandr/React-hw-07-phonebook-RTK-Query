import React from 'react'; 
import {Spinner} from '../Spinner/Spiner'

import {useFetchContactsQuery} from '../services/contactsApi';   
import {ContactsReducerList} from './contactRenderList'

const ContactList = () => {
    const { data: contact, isFetching } = useFetchContactsQuery();


    return (
        <div>
            {isFetching && <Spinner size='12'/>}
            {contact &&  ( <ContactsReducerList
                contacts={contact}
            />
                )}
        </div>
    )
};

export default ContactList;
