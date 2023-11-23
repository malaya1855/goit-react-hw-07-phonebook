import {
  ButtonDelete,
  ListItem,
  List,
  ListItemText,
  ListItemLink,
  BtnName,
} from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/slice/contactsSlice';
// import 'primeicons/primeicons.css';

export const ContactList = () => {
  const allContacts = useSelector(state => state.contacts);
  const filterName = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const normalizedFilter = filterName.toLowerCase();
  const filteredContacts = allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return filteredContacts.length === 0 ? (
    <p>No matched contacts in your phone book</p>
  ) : (
    <List>
      {filteredContacts.map(contact => {
        const nameArray = contact.name.split(' ');
        const nameFirstUpperLetter = nameArray
          .map(word => word.replace(word[0], word[0].toUpperCase()))
          .join(' ');
        return (
          <ListItem key={contact.id}>
            <ListItemText>{nameFirstUpperLetter}</ListItemText>
            <ListItemText>{contact.number}</ListItemText>
            <ListItemLink href={`mailto:${contact.email}`}>
              {contact.email}
            </ListItemLink>

            <ButtonDelete
              type="ButtonDelete"
              id={contact.id}
              onClick={() => {
                if (
                  window.confirm('Are you sure you want to delete the contact?')
                ) {
                  dispatch(deleteContact(contact.id));
                }
              }}
            >
              <BtnName className="pi pi-trash"></BtnName>
            </ButtonDelete>
          </ListItem>
        );
      })}
    </List>
  );
};
