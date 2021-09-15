const { program } = require('commander');
const {
	setWelcomeMessage,
	addRec,
	showRec,
	deleteRec,
	updateRec,
} = require('./helpers/commandFunctions');

// setting meta data
program.version('0.0.1').description('CLI password management tool');

setWelcomeMessage();

const { createReadStream, createWriteStream } = require('fs');
const { pipeline } = require('stream');
const crypto = require('crypto-js');
const { promisify } = require('util');

var key = crypto.enc.Hex.parse('000102030405060708090a0b0c0d0e0f');
var iv = crypto.enc.Hex.parse('101112131415161718191a1b1c1d1e1f');

promisify(pipeline)(
	createReadStream('./text.txt'),
	crypto.AES.encrypt('Message', key, { iv: iv }).toString(),
	createWriteStream('./text.txt.enc')
)
	.then(() => {
		/* ... */
	})
	.catch((err) => {
		/* ... */
	});

program
	.command('add')
	.alias('a')
	.description('Add a new record')
	.action(addRec);
program
	.command('show <scope>')
	.alias('s')
	.description('Show records')
	.action((scope) => showRec(scope));

program
	.command('delete <id>')
	.alias('d')
	.description('Delete a record')
	.action((id) => deleteRec(id));

program
	.command('update <id> <field> <value>')
	.alias('u')
	.description('Delete a record')
	.action((id, field, value) => updateRec(id, field, value));

program
	.command('init')
	.alias('i')
	.description('Initialize passchase')
	.action(() => init());

program.parse(process.argv);
