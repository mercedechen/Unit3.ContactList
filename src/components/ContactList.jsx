import { useState, useEffect } from "react";
import ContactRow from "./ContactRow.jsx"

// const dummyContacts = [
//   { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
//   { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
//   { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
// ];


function ContactList({setSelectedContactId}) {

  // const [contacts, setContacts] = useState(dummyContacts);
  const [contacts, setContacts] = useState([]);
  console.log("contacts: ", contacts);

  // [] is dependency array which will ensure our component will run the effect only once after the component has mounted
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
        const json = await response.json();
        setContacts(json);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => {
          return <ContactRow key={contact.id} setSelectedContactId={setSelectedContactId} contact={contact} />
        })}
      </tbody>
    </table>
  )
}

export default ContactList