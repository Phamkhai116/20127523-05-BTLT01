//const http = require('http');
const express = require('express')
const app = express()
const COURSES = [
    {id : 1, name: 'NodeJS'},
    {id : 2, name: 'ReacJS'},
]

/*const server = http.createServer((req, res) => {
    res.writeHead(404, {
        'Content-type' : 'application/json',
        'X-Powered-By' : 'Node.js'
    })

    res.end(JSON.stringify({
        success : false,
        error : 'NOT FOUND',  
        data : null
    }));
})*/

//const PORT = 3000

app.get('/', (req, res) => {
    res.send('Khải đẹp trai');
});

app.get('/api/courses', (req, res) => {
    res.send(COURSES);
});

app.get('/api/courses/:id', (req, res) => {
    const COURSE = COURSES.find(COURSES => COURSES.id === parseInt(req.params.id))
    if(!COURSE)
        res.status(404).send('ID không tồn tại')
    res.send(COURSE);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port  ${PORT}`));
//server.listen(PORT, () => console.log(`Server running on port ${PORT}`));