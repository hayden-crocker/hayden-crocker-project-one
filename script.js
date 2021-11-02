const formElement = document.querySelector('form');

formElement.addEventListener('submit', function(e){
    e.preventDefault();
    //set name input
    const inputName = document.querySelector('input[name=Name], textarea');
    const taskName = inputName.value;
    if (taskName) {
        const commentArticle = document.createElement('article');

        const commentName = document.createElement('h5');
        commentName.textContent = taskName;
        commentArticle.appendChild(commentName);

        const blogSection = document.querySelector('section.blogPosts');
        blogSection.appendChild(commentArticle);

        inputName.value = '';
    }

    // set email input
    const inputEmail = document.querySelector('input[name=email]');
    const taskEmail = inputEmail.value;
    if (taskEmail) {
        // console.log(taskEmail);
        inputEmail.value = '';
    }

    // set comment input
    // const textareaEl = document.querySelector('textarea');
    // const comment = textareaEl;
    // if (comment) {
    //     // console.log(comment);
    //     inputEmail.value = '';
    // }
});