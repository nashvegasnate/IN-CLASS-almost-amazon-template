import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
import { showBooks } from '../components/books';
import { deleteBook, getBooks } from '../helpers/data/bookData';
// import { showAuthors } from '../components/authors';
// import { getAuthors } from '../helpers/data/authorData';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  // put all books on the DOM
  getBooks().then((books) => showBooks(books));
  // getAuthors().then((authors) => showAuthors(authors));
  deleteBook().then((books) => showBooks(books));
};

export default startApp;
