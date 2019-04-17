//user data
let users = [
    {
        id: 1,
        name: 'alice'
    },
    {
        id: 2,
        name: 'yoo'
    },
    {
        id: 3,
        name: 'lee'
    }
]

//기본 node js
/*
const http = require('http');


const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('sum(2,3)');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
*/



//express default


const express = require('express');

const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World!\n');
// });

// app.get('/uesrs', (req, res) => {
//     return res.json(users);
// });

//위의 있는 코드는 아래와 같이 간단하게 사용 가능(애로우 함수 안의 return만 있을 경우 한줄로 작성 가능)
/*
app.get('/users', (req, res) => res.json(users));
 */

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if(!id) {
        return res.status(400).json({error: "Incorrect id"});
    }
    let user = users.filter(user => user.id === id)[0];
    if(!user) {
        return res.status(404).json({error: 'Unknown user'});
    }

    return res.json(user);

    // res.send(req.params.id); //사용자가 입력한 :id 값이 출력됨. (단, 문자열 타입)
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});



// require 사용법
/*
const sum = require('./rq_sum.js');
console.log(sum(1,3));
*/

