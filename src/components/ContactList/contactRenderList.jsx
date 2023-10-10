import style from './contactList.module.css';
import {Spinner} from '../Spinner/Spiner';

export const ContactsReducerList = ({ contacts, onDelete, deleting }) => {
    return (
        <div>
            <div>
                <ul className={style.list}>
            {contacts.map(({id, name, number}) => (
                <li key={id} className={style.item}>
                    <p>
                        {name} : {number}{" "}
                    </p>
                    <button
                            
                        onClick={() => onDelete(id)}>
                        {deleting ? <Spinner/> :  'Delete'}
                    </button>
                </li>
            ))}
        </ul>
            </div>
              
    </div>
     
    )
};