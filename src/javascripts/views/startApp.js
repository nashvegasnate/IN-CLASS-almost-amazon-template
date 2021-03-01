import { showAuthors } from '../components/authors';
import { showBooks } from '../components/books';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
import { getAuthors } from '../helpers/data/authorData';
import { getBooks } from '../helpers/data/bookData';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  // put all books on the DOM
  getBooks().then((books) => showBooks(books));
  getAuthors().then((authors) => showAuthors(authors));
};

export default startApp;
