import React from 'react'; 
import {Spinner} from '../Spinner/Spiner'
import style from './contactList.module.css'
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, deleteContact } from '../redux/contactsSlise';

import { getFilter } from '../redux/filterSlise';
import {useFetchContactsQuery, useDeleteCotnactMutation} from '../services/contactsApi';   

import {ContactsReducerList} from './contactRenderList'

const ContactList = () => {
    const { data: contact, isFetching } = useFetchContactsQuery();
    const [deleteContact, { isLoading: isDeleting }] = useDeleteCotnactMutation();
    

    
    
//     const dispatch = useDispatch();
//     const contacts = useSelector(getContacts);
//     const filter = useSelector(getFilter);

  

// const visibleCont = contacts.filter(contact => {
//     if (typeof contact.name === 'string') {
//         const normalizedName = contact.name.toLowerCase();
//         return normalizedName.includes(filter.toLowerCase()) ||
//             contact.number.includes(filter);
//     }
//     return false; 
// });




    return (
        // <ul
        // className={style.list}>
        //     {contacts.map(
        //         ({ name, id, number }) => (
        //              <li
        //                 className={style.item}
        //                 key={id}>
        //             <p>
        //                 {name}: {number}
        //             </p>
        //                 <button></button>
        //             </li>
        //         )

        //     )}
        // </ul>

        <div>
            {isFetching && <Spinner size='12'/>}
            {contact &&
                <ContactsReducerList
                contacts={contact}
                onDelete={deleteContact}
                deleting={isDeleting} />}
        </div>
    )
};



//   const visibleContacts = (contacts, filter) => {
//       const normalizedContacts = filter.toLowerCase();
      
//       return contacts.filter(contact =>
//           contact.name &&
//           typeof contact.name === 'string'
//           && contact.name.toLowerCase().includes(normalizedContacts))

//     // return contacts.filter(contact =>
//     //   contact.name.toLowerCase().includes(normalizedContacts))
//   };




// const mapStateToProps = state => {
//     const { filter, items } = state.contacts;
//     const visibleCont = visibleContacts(items, filter);

//     return {
//         visibleCont: visibleCont,
//     }
// };
// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//     contacts: visibleContacts(items, filter)
// });

// const mapStateToProps = state => {
//     const { filter, items } = state.contacts;
//     const visibleCont = visibleContacts(items, filter); // Використовуємо вашу логіку фільтрації тут

//     return {
//         visibleCont: visibleCont,
//     };
// };

// const mapDispatchToProps = dispatch => ({
   
//     deleteContacts: id => dispatch(contactsActions.deleteContacts(id)),

// });





export default ContactList;

ContactList.propType = {
    visibleCont: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired,
    ),
    deliteContacts: PropTypes.func.isRequired,
};