let button = document.querySelector('#btnGetData');
let display = document.querySelector('#showData');

button.addEventListener("click", () => {
    getData();
});

function getData(){

    fetch('https://akademia108.pl/api/ajax/get-post.php',{
        method: 'GET',
        mode: 'cors'
    })
        .then(response => response.json())
        .then((data) => {
            display.innerText += data.userId + '\n';
            display.innerText += data.id + '\n';
            display.innerText += data.title + '\n';
            display.innerText += data.body + '\n';
        });


}
