const url = 'http://localhost:3000/joke';

let xhr = new XMLHttpRequest();
xhr.open('GET', url);

xhr.onload = () => {
    /* 
    В response хранится строка json которая описывает массив обьектов всех сообщений.
    Сейчас вы просто выводите эту строчку на HTML.
    Нужно сначало розпарсить response с помощью JSON.parse чтобы получить массив обьектов сообщений.
    Дальше для каждого елемента этого массива (использовать например map или forEach) нужно добавить в HTML его представление (верстку)
    */
    document.getElementById('joke').innerHTML = xhr.response;
}

xhr.send();

function massage(){
    let xml = new XMLHttpRequest();
    let mas = document.getElementById('in').value;
    xml.open('POST', url);
    /* Отправлять просто сообщение нельзя. Посмотрите внимательно на ваш API(backend).
    Там при запросе с методом POST ожидается JSON строка, а вы присылаете туда просто строку шутки.
    Создайте сначало обьект шутки у когорого будут поля автор и шутка можно еще поле дата добавить например,
     а потом уже отправляйте на сервер этот обьект, предварительно превратите его в строку*/
    xml.send(mas);
}