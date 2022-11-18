const http = require('http');

const COURSES = [
    {id : 1, name: 'NodeJS'},
    {id : 2, name: 'ReacJS'},
]

const server = http.createServer((req, res) => {
    res.writeHead(404, {
        'Content-type' : 'application/json',
        'X-Powered-By' : 'Node.js'
    })

    res.end(JSON.stringify({
        success : false,
        error : 'NOT FOUND',  
        data : null
    }));
})

const PORT = 3000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));