import net from 'net';
const client = new net.Socket();
const port = 8070;
const host = '127.0.0.1';

client.connect(port, host, function() {
    console.log('Connected');
    client.write("Hello From Client " + client.address().address);
    //client.close();
});

client.on('data', function(data) {
    console.log('Server Says : ' + data);
});

client.on('close', function() {
    console.log('Connection closed');
});