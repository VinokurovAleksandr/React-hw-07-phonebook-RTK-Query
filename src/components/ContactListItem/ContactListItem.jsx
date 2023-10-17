import {useDeleteCotnactMutation} from '../services/contactsApi'

import { Spinner } from '../Spinner/Spiner';
import style from '../ContactList/contactList.module.css';

export const ContactListItem = ({ id, name, number }) => {

const [deleteContact, { isLoading: isDeleting }] = useDeleteCotnactMutation();
    return (

        <li className={style.item}>
        <p>
               {name} : {number}
         </p>
        <button                           
            onClick={() => deleteContact(id)}>
            {isDeleting ? <Spinner/> :  'Delete'}
         </button>
        </li>
    )
};