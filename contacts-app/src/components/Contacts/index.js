import {useState, useEffect} from 'react';
import "./styles.css";
import List from './List';
import Form from './Form';

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: 'Mehmet',
      phone_number: 13423
    },
    {
      fullname: 'Ahmet',
      phone_number: 13423
    },
    {
      fullname: 'Lala',
      phone_number: 3435345
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts])

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts}/>
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}
export default Contacts;