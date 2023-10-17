import style from './contactList.module.css';

import {ContactListItem} from '../ContactListItem/ContactListItem';

export const ContactsReducerList = ({ contacts}) => {

    return (
            <div>
                <ul className={style.list}>
                {contacts.map(({ id, name, number }) => (
                    <ContactListItem
                        key={id}
                        name={name}
                        number={number}
                        {...contacts} />
            ))}
        </ul>
            </div>
    )
};