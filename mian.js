// Form display toggle
const style = getComputedStyle(document.getElementById("form"));
const form = document.getElementById('form');

form.style.display = "none";

document.getElementById('formShow').addEventListener('click', () => {
   if (style.display == 'flex') {
      form.style.display = 'none';
   } else {
      form.style.display = 'flex';
   }
});

// Add post (form submission)
form.addEventListener('submit', async (e) => {
   e.preventDefault();

   let name = document.getElementById('name').value;
   let resource = document.getElementById('resource').value;
   let link = document.getElementById('link').value;

   // Send form data to the server (POST request)
   const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, resource, link })
   });

   if (!response.ok) {
      console.error("Failed to submit form:", response.statusText);
      return;
   }

   const newPost = await response.json();

   // Update UI with the new post
   const posts = document.getElementById('posts');
   posts.insertAdjacentHTML("afterBegin", `
      <section class="post">
         <div>
            <a href="${newPost.link}" class="resource">${newPost.resource}</a>
         </div>
         <span class="name">submitted by <strong>${newPost.name}</strong></span>
      </section>
   `);

   form.reset();
   form.style.display = 'none';
});

// Fetch existing posts from the server (GET request)
window.onload = async () => {
   const response = await fetch('/api/submit'); // Same API endpoint for GET requests
   const postsData = await response.json();

   const posts = document.getElementById('posts');
   postsData.forEach(post => {
      posts.insertAdjacentHTML("afterBegin", `
         <section class="post">
            <div>
               <a href="${post.link}" class="resource">${post.resource}</a>
            </div>
            <span class="name">submitted by <strong>${post.name}</strong></span>
         </section>
      `);
   });
}
