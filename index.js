#!/usr/bin/env node
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

// program
// 	.command('init')
// 	.alias('i')
// 	.description('Initialize passchase')
// 	.action(() => init());

program.parse(process.argv);
