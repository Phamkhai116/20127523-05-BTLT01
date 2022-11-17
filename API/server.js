const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-type' , 'text/plain')
    res.write('Hello word');
    res.end();
})

const PORT = 3000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));