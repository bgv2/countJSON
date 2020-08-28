module.exports = (req, res) => {
    https.get(decodeURI(req.body.jsonfile), (resp) => {
        console.log(resp);
        let data = '';
        let q;
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            q = JSON.parse(data);
        });
        let c = 0;
        for (var key in q) {
            c += q[key].length;
        }
        res.send(c);
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}
