import React from 'react';
import style from './style.module.css';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import contactsActions from '../redux/contacts-actions/contacts-actions';
import {getFilter, setFilter} from '../redux/filterSlise';

export default function Filter() {
    
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    const onChange = e => {
        dispatch(setFilter(e.target.value))
    };

    return (
        <label
        className={style.find_contacts}
        type='name'
        value={filter}
        onChange={onChange}
        >Find contacts by name
        <input />
    </label>  
    )

 
};

// const mapStateToProps = (state) => ({
//   value: state.contacts.filter
// })

// const mapDispatchToProps = dispatch => ({
//     onChange: (e) => dispatch(contactsActions.changeFilter(e.target.value)),
    
// })


// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

// Filter.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// };

