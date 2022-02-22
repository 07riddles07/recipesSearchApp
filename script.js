const searchInput = document.querySelector('#search');
const recipes = document.querySelectorAll('.recipe');
const body = document.querySelector('body');

searchInput.addEventListener('keyup', function(event) {
    const word = event.target.value.toLowerCase();
    console.log(word);

    recipes.forEach(item => {
        item.querySelector('p').textContent.toLocaleLowerCase().includes(word) ? (item.style.display = 'block') : (item.style.display = 'none');
    })
})

searchInput.addEventListener ('mousedown', function(event) {
   document.querySelector('#search').value = '';
})
