const postList = document.getElementById("post-list");

/**
 * Iterates through the posts array and creates HTML elements for each.
 * @param {Array} posts - The list of post objects from the API.
 */
function displayPosts(posts) {
  posts.forEach(post => {
    // Create elements
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    // Assign text content from the post object
    h1.textContent = post.title;
    p.textContent = post.body;

    // Build the structure: <li> <h1></h1> <p></p> </li>
    li.appendChild(h1);
    li.appendChild(p);

    // Append the new list item to the existing <ul>
    postList.appendChild(li);
  });
}

/**
 * Fetches data from the external API and triggers the display function.
 * Must be an async function to use 'await'.
 */
async function init() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    // Pass the fetched array to the display helper
    displayPosts(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

// Execute the initialization immediately as required by your test
init();
