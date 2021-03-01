const showAuthors = (array) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-auth-btn">Add An Author</button>';

  document.querySelector('#store').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#store').innerHTML += `<div class="card">
        <div class="card-body" style="height: 180px;">
        <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
        <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="edit-auth-btn--${item.firebaseKey}">Edit Author</button>
        <button class="btn btn-danger" id="delete-auth--${item.firebaseKey}">Delete Author</button>
        </div>
      </div>`;
  });
};

const emptyAuthors = () => {
  document.querySelector('#store').innerHTML = '<h1>No Authors</h1>';
};

export { showAuthors, emptyAuthors };
