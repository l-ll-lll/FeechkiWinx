const url = 'http://localhost:3000/joke';

let xhr = new XMLHttpRequest();
xhr.open('GET', url);

xhr.onload = () => {
    document.getElementById('joke').innerHTML = xhr.response;
}

xhr.send();

function massage(){
    let xml = new XMLHttpRequest();
    let mas = document.getElementById('in').value;
    xml.open('POST', url);
    xml.send(mas);
}