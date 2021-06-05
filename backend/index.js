const http = require('http');
const fs = require('fs');
const path = require('path')
const DB_PATH = path.join(__dirname,'winx','winx.json');

const server = http.createServer((req, res)=>{
if(req.url === ''){
    if(req.method === 'GET'){
        fs.readFile(DB_PATH,(err,winx)=>{
            if(err){
                console.error(err);
                res.writeHead(500);
                res.end();
            }
            else{
                res.writeHead(200,{
                    'Content-type': 'text/plain; charset=UTF-8'
                });
                res.end(winx);
            }
        })
    }

   if(req.method==="POST"){
    let text = '';
    req.on("data",(chunk)=>{
        text += chunk;
    });
    req.on("end",()=>{
        let db = fs.readFile(DB_PATH);
        let joke = JSON.parse(text);
        db = JSON.parse(db);
        db.push(joke);
        fs.writeFile(DB_PATH,db);
        res.writeHead(201);
        res.end();
    })            
}}});
server.listen(3000);