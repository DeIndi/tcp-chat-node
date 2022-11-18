import net from 'net';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const port = 8070;
const host = '127.0.0.1';
//const client = new net.Socket({address:`${host}:${port}`});
const client = new net.Socket();

const readSendLoop = async () => {
    const rl = await readline.createInterface({ input, output });
    rl.on('line', (input) => {
        client.write( `${input}`);
      });
};

client.connect(port, host, function() {
    console.log('Connected');
    client.write("Hello From Client " + client.address().address);
    readSendLoop();
});
//repl

client.on('data', function(data) {
    console.log('Server Says : ' + data);
});

client.on('close', function() {
    console.log('Connection closed');
});
