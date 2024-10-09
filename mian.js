// form display toggle
const style = getComputedStyle(document.getElementById("form"))
const form =  document.getElementById('form');

form.style.display = "none";

document.getElementById('formShow').addEventListener('click', () => {
   if(style.display == 'flex') {
      form.style.display = 'none';
   } else{
      form.style.display = 'flex';
   }
})

// add post
form.addEventListener('submit', (e) => {
   e.preventDefault()
   const posts = document.getElementById('posts')

   let name = document.getElementById('name');
   let resource = document.getElementById('resource');
   let link = document.getElementById('link');

   posts.insertAdjacentHTML("afterBegin", `<section class="post"><div><a href="${link.value}" class="resource">${resource.value}</a><div></div></div><span class="name">submitted by <strong>${name.value}</strong></span></section>`);

   name.value = "";
   resource.value = "";
   link.value = "";

   form.style.display = 'none';
})