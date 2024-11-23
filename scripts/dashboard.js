// Step 1: Select the form and post list elements

const form = document.getElementById('new-post-form');
const postList = document.getElementById('post-list');

// Step 2: Add event listiner for submit

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('post-title').value
    const content = document.getElementById('post-content').value
    const author = document.getElementById('post-author').value

    const post = document.createElement('div');
    post.classList.add('post')
    post.innerHTML = `
        <h4>${title}</h4>
        <p>${content}</p>
        <small>By ${author}</small>

    `;

    postList.appendChild(post);

    form.reset();
});


