import { useState, useEffect} from 'react'

function SelectedContact({selectedContactId, setSelectedContactId}) {

  const [contact, setContact] = useState({})

  useEffect(() => {
    async function getSelectedContact() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
        const json = await response.json();
        setContact(json)
      } catch (error) {
        console.error(error)
      }
    }
    getSelectedContact()
  }, [])

  return (
    <div>
      <h2>Selected Contact</h2>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Website: {contact.website}</p>
      <button onClick={() => setSelectedContactId(null)}>Back</button>
    </div>
  )
}

export default SelectedContact