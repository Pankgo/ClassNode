const express = require('express');
const app = express();

server.listen(8080, function()
{
    console.log("포트 8080으로 대기중")
});

app.get('/book',function(req,res){
    res.send("도서 페이지 입니다.");
})