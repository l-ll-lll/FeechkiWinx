const url = 'http://localhost:3000/joke';

let xhr = new XMLHttpRequest();
xhr.open('GET', url);

xhr.onload = () => {
    let jokes = JSON.parse(xhr.response);
    jokes.map(joke => {
            document.getElementById('joke').innerHTML += `
    Joke:${joke.joke} Autor:${joke.autor}
    `;
    })

   
}

xhr.send();

function massage(){
    let xml = new XMLHttpRequest();
    let mas = document.getElementById('in').value;
    xml.open('POST', url);
    let joke = {
        joke: mas,
        autor: 'yura'
    }
    xml.send();
}