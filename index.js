import http from 'http';
import data from './data.js';
const server = http.createServer((request, response) => {
    const endpoint = request.url;
    switch (endpoint) {
        case '/':
            response.end("Welcome!");
            break;
        case '/students':
            response.end(JSON.stringify(data));
            break;
        default:
            response.end("Not found!");
            break;
    }
});
server.listen(8000, ()=>{
    console.log("server is running!")
})