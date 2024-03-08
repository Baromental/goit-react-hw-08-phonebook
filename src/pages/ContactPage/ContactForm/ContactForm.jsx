// ContactForm.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../../redux/contact/contactsOperations';
import { selectContact } from '../../../redux/contact/contactsSelectors';
import s from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);
  const isLoading = useSelector((state) => state.contacts.isLoading);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} has been already added`);
      setName('');
      setNumber('');
      return;
    }

    dispatch(addContact({ name, number: number }));
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.input}>
        Name
        <input type="text" name="name" value={name} onChange={handleChange} required />
      </label>

      <label className={s.input}>
        Phone number
        <input type="tel" name="number" value={number} onChange={handleChange} required />
      </label>

      <button className={s.button} type="submit" disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add contact'}
      </button>
    </form>
  );
};

