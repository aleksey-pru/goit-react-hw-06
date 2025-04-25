import s from "./Contact.module.css";
import { FaPhone } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <div className={s.infoContainer}>
        <p className={s.name}>
          <BsPersonFill />
          {name}
        </p>

        <p className={s.name}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </div>
  );
};

export default Contact;
