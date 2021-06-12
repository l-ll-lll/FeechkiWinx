const url = 'http://localhost:3000/joke';

let xhr = new XMLHttpRequest();
xhr.open('GET', url);

xhr.onload = () => {
    let jokes = JSON.parse(xhr.response);
    jokes.map(joke => {
            document.getElementById('joke').innerHTML += `
    Joke:${joke.joke}<br> Autor:${joke.autor}<br><button id="like" class="like">Like<button><br><button id="dizlike" class="dizlike">Dizlike</button><br><br>
    `;
    })

   
}

xhr.send();

function massage(){
    let xml = new XMLHttpRequest();
    let mas = document.getElementById('in').value;
    let masau = document.getElementById('inau').value;
    xml.open('POST', url);
    let joke = {
        joke: mas,
        autor: masau
    }
    xml.send(JSON.stringify(joke));
}