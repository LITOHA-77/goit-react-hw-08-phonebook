import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/Phonebook/phonebook-selectors';
import  { contactsOperations } from '../../redux/Phonebook/index';
import { toast } from 'react-toastify';
import { BtnAdd } from '../Button/Button';

import s from './Form.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmint = e => {
    e.preventDefault();
    const comparableElement = contacts.some(
      element => element.name.toLowerCase() === name.toLowerCase(),
    );
    if (comparableElement) {
      resetForm();
      return alert(`${name} is already in the directory`);
    }
    dispatch(contactsOperations.addContact({ name, number }));
    toast.success('Contact added to the phonebook!', {
      position: 'top-center',
      autoClose: 2500,
    });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };


  return (
    <div className={s.container}>
      <form onSubmit={handleSubmint} className={s.form}>
        <h3 className={s.label}>Name</h3>
        <label >
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </label>
        <h3 className={s.label}>Phone number</h3>
        <label >
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </label>
        <BtnAdd/>
      </form>
    </div>
  );
}


export default ContactForm;
