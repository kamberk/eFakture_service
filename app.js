const app = require('./index');

port = 8183
host = '0.0.0.0'

app.listen(port, host, () => {
    console.log('\x1b[32m', 'SERVIS ZA eFAKTURE, MOLIMO NE ZATVARAJTE PROZOR!');
})