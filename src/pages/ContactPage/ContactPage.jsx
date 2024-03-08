// ContactPage.jsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import {ContactList} from './ContactList/ContactList';
import {Filter} from './Filter/Filter';
import { fetchContact } from '../../redux/contact/contactsOperations';
import s from './ContactPage.module.css'
export const ContactPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
      <div className={s.containerContacts}>
        <h2 className={s.title} >Phonebook</h2>
        <ContactForm />
        <h2 className={s.title}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
  );
};

