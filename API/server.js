const http = require('http');

const COURSES = [
    {id : 1, name: 'NodeJS'},
    {id : 2, name: 'ReacJS'},
]

const server = http.createServer((req, res) => {
    res.setHeader('Content-type' , 'application/json')

    res.end(JSON.stringify({
        success : true,
        data : COURSES
    }));
})

const PORT = 3000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));