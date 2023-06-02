function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(response => response.json())
        .then(posts => {
            // get the reference of the table
            let tableBody = document.querySelector('#posts-table tbody');

            // clear the table body
            tableBody.innerHTML = '';

            // create and add the rows from the api result
            posts.forEach(post => {
                let row = document.createElement('tr');

                row.innerHTML = `
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                    <td>
                        <button onclick="editPost(${post.id})">Edit</button>
                        <button onclick="deletePost(${post.id})">Delete</button>
                    </td>
                `;

                tableBody.appendChild(row);

            });
        });
}

async function createPost(event) {
    event.preventDefault;

    event.preventDefault();

    // get the form elements
    let titleInput = document.querySelector('#title');
@@ -13,19 +44,34 @@ async function createPost(event) {
    }

    // make the api request to post the data to the server to get it created
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            'Content-type': 'application/json'
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
    try {
        let postedJson = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newPost),
        });

        let postedObject = await postedJson.json();

        // clear the form elements
        titleInput.value = '';
        bodyInput.value = '';

        console.log(postedObject);

        // getPosts();
    } catch (error) {
        console.error(error);
    }
}

// create a reference to the dom element form with id create-post-form
let createPostForm = document.querySelector('#create-post-form');

// attach an event listener
createPostForm.addEventListener('submit', createPost);
createPostForm.addEventListener('submit', createPost);

// get all the posts and display as a table below the form
getPosts();