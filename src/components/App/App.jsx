import {
  ContactList,
  Filter,
  ContactForm,
  InfoTable,
  PhoneBookForm,
  Title,
  NewContactForm,
  Subtitle,
  ContactListForm,
} from 'components';
import { useSelector } from 'react-redux';
import 'primeicons/primeicons.css';

const App = () => {
  const allContacts = useSelector(state => state.contacts);

  return (
    <PhoneBookForm>
      <Title>My Phonebook</Title>
      <InfoTable>
        <NewContactForm>
          <Subtitle>Add new contact</Subtitle>
          <ContactForm />
        </NewContactForm>
        <ContactListForm>
          <Subtitle>My contacts</Subtitle>
          {allContacts.length === 0 ? (
            <p>No saved contacts</p>
          ) : (
            <div>
              <Filter />
              <ContactList />
            </div>
          )}
        </ContactListForm>
      </InfoTable>
    </PhoneBookForm>
  );
};

export default App;
