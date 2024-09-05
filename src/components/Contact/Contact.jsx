import { FaUser, FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

const Contact = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contact}>
      <div>
        <p>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhone className={css.icon} />
          {phone}
        </p>
      </div>
      <button
        onClick={() => handleDelete(id)}
        className="button secondary selfCenter"
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
