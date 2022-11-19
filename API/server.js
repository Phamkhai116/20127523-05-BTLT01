//const http = require('http');
const express = require('express')
const app = express()

app.use(express.json());

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

app.post('/api/courses/add', (req, res) => {
    const COURSE = {
        id : req.body.id,
        name : req.body.name,
    }
    COURSES.push(COURSE)
    res.send(JSON.stringify({
        success : true,
        notice : "Bạn đã thêm thành công",
        data : COURSES 
    }));
});

app.put('/api/courses/edit/:id', (req, res) => {
    const COURSE = COURSES.find(COURSES => COURSES.id === parseInt(req.params.id))
    COURSE.name = req.body.name;
    res.send(JSON.stringify({
        success : true,
        notice : "Bạn đã cập nhật thành công",
        data :COURSES
    })); 
});

app.delete('/api/courses/delete/:id', (req, res) => {
    const COURSE = COURSES.find(COURSES => COURSES.id === parseInt(req.params.id))
    let index = COURSES.indexOf(COURSE);
    COURSES.splice(index, 1);
    res.send(JSON.stringify({
        success : true,
        notice : "Bạn đã xóa thành công",
        data :COURSES
    })); 
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port  ${PORT}`));
//server.listen(PORT, () => console.log(`Server running on port ${PORT}`));