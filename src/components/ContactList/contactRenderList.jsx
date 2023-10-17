import style from './contactList.module.css';
import {Spinner} from '../Spinner/Spiner';
// import {useDeleteContactMutation} from '../services/contactsApi'

export const ContactsReducerList = ({ contacts, onDelete, deleting }) => {
// const [deleteContact, { isLoading }] = useDeleteContactMutation();

    return (
            <div>
                <ul className={style.list}>
            {contacts.map(({id, name, number}) => (
                <li key={id} className={style.item}>
                    <p>
                        {name} : {number}
                    </p>
                    <button                           
                        onClick={() => onDelete(id)}>
                        {deleting ? <Spinner/> :  'Delete'}
                    </button>
                </li>
            ))}
        </ul>
            </div>
     
    )
};