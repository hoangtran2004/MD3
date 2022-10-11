const http = require('http');
const fs = require('fs');
const qs = require('qs');

const serverListToDo = http.createServer(function (req, res) {
    if (req.method === 'GET') {
        fs.readFile('todo.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk
        })
        req.on('end', () => {
            const work = qs.parse(data);
            fs.readFile('display.html', 'utf-8', function (err, datahtml) {
                if (err) {
                    console.log(err)
                }
                datahtml = datahtml.replace('{list1}', work.works1);
                datahtml = datahtml.replace('{list2}', work.works2);
                datahtml = datahtml.replace('{list3}', work.works3);

                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(datahtml);
                return res.end();
            });
        })
        req.on('error', () => {
            console.log('error')
        })
    }
})
serverListToDo.listen(8080, function () {
    console.log('server running at localhost 8080');

});