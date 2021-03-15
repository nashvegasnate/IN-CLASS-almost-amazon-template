// import selectAuthor from './selectAuthor';

const addAuthorForm = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-author-form" class="mb-4">
      <div class="form-group">
        <label for="authorFirst">Author First Name</label>
        <input type="text" class="form-control" id="authorFirst" aria-describedby="authorFirst" placeholder="Enter Author First Name" required>
      </div>
      <div class="form-group">
        <label for="authorLast">Author Last Name</label>
        <input type="text" class="form-control" id="authorLast" aria-describedby="authorLast" placeholder="Enter Author Last Name" required>
      </div>
      <button type="submit" id="submit-author" class="btn btn-primary">Submit Author</button>
    </form>`;
  // selectAuthor();
};

export default addAuthorForm;
