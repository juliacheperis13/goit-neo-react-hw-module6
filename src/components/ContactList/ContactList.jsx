import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

const ContactList = () => {
  const allContacts = useSelector((state) => state.contacts);
  const searchRequest = useSelector((state) => state.filters.name);

  const contacts = allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchRequest.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {contacts.length > 0 ? (
        contacts.map(({ id, name, phone }) => (
          <li key={id} className="container">
            <Contact
              name={name}
              phone={phone}
              id={id}
            />
          </li>
        ))
      ) : (
        <p className={css.message}>No contacts found</p>
      )}
    </ul>
  );
};

export default ContactList;
