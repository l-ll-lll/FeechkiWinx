const http = require('http');
const fs = require('fs');
const path = require('path')
const DB_PATH = path.join(__dirname,'winx','winx.json');

const server = http.createServer((req, res)=>{
res.setHeader("Access-Control-Allow-Origin", "*");
if(req.url.startsWith("/like")){
    let index = req.url.lastIndexOf("/");
    let id = req.url.substring(index+1);
    let db = JSON.parse(    fs.readFileSync(DB_PATH,err=>{})    );
    db[id].likes++;
    fs.writeFileSync(DB_PATH,JSON.stringify(db),err=>{});
    res.end();
}
if(req.url === '/joke'){
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
        console.log(text);
        let db = fs.readFileSync(DB_PATH);
        let joke = JSON.parse(text);
        db = JSON.parse(db);
        joke.id = db.length;
        joke.likes = 0;
        joke.dislikes = 0;
        db.push(joke);
        fs.writeFile(DB_PATH,JSON.stringify(db),(err)=>{});
        res.writeHead(201);
        res.end();
    })            
}}});
server.listen(3000);