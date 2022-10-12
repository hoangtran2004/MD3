const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    let datafile = '';
    let html = '';
    fs.readFile('./data/text', 'utf-8', function (err, data) {
        datafile.split(',');
        datafile.forEach((value, index) => {
            html += '<tr>'
            html += `<td> ${index + 1} </td>`
            html += `<td> ${value} </td>`
            html += `<td> <button class="btn btn-danger">Delete</button></td>`
            html += '</tr>'
        })
    })
    fs.readFile('./templates/index.html', 'utf-8', function (err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        data = data.replace('{list-user}', html);
        res.write(data);
        res.end()
    })
})
server.listen(8080, function () {
    console.log('Server running at localhost 8080')
})