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
  Loader,
} from 'components';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import 'primeicons/primeicons.css';
import { selectError, selectIsLoading, selectContacts } from 'redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const allContacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
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

          {isLoading && <Loader />}
          {error && <p>{error.message}</p>}
          {allContacts.length === 0 ? (
            !isLoading && <p>No saved contacts</p>
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
