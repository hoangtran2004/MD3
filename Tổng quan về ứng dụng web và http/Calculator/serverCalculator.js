const http = require('http');
const qs = require('qs');
const fs = require('fs');

http.createServer(function (req, res) {
    if (req.method === 'GET') {
        fs.readFile('calculator.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end()
        });
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            const number = qs.parse(data);
            fs.readFile('result.html', 'utf-8', function (err, datahtml) {
                if (err) {
                    console.log(err)
                }
                if (number.select) {
                if (number.select==="addition"){
                    datahtml=datahtml.replace('{result}',Number(number.number))
                }
                }
            })
        })
    }
})