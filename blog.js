// When a user submits a comment in the form it needs to be displayed on the page underneath the previous comment.

// Grab the form element
const formElement = document.querySelector('form');

// Add an event listener for when the user submits the form
formElement.addEventListener('submit', function(e){
    e.preventDefault();

    // Grab the information  given by the user in the Name and Comment fields of the form
    const inputName = document.querySelector('input[name=Name]');
    const inputComment = document.querySelector('textarea')
    const nameTask = inputName.value;
    const commentTask = inputComment.value;

    // Grab the date when the post was submitted
    const todaysDate = new Date();

    // When the user has inputted the required information:
    if (nameTask, commentTask) {
        const commentArticle = document.createElement('article');

        // const userImage = document.createElement('img');
        // commentArticle.appendChild(userImage);

        const commentText = document.createElement('div');
        commentArticle.appendChild(commentText);
        // display the name of the user and the date comment was submitted
        const commentName = document.createElement('h5');
        commentName.textContent = (`${todaysDate.toDateString()} by ${nameTask}`);
        commentText.appendChild(commentName);

        // display the comment that the user submitted
        const commentParagraph = document.createElement('p');
        commentParagraph.textContent = commentTask;
        commentText.appendChild(commentParagraph);

        const blogSection = document.querySelector('section.blogPosts');
        blogSection.appendChild(commentArticle);

        // when the user has submitted the form, empty the text fields
        inputName.value = '';
        inputComment.value = '';
    } 

    // prompt the user for the right email
    const inputEmail = document.querySelector('input[name=email]');
    const taskEmail = inputEmail.value;
    if (taskEmail) {
        confirm(`Is this your correct email? \n ${taskEmail}`);
        inputEmail.value = '';
    } else {
        
    }
});