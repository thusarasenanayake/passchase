fs = require('fs');
const { program } = require('commander');
const chalk = require('chalk');
const chalkTable = require('chalk-table');
const { prompt } = require('inquirer');
const {
	addRecord,
	deleteRecord,
	listRecords,
	searchRecord,
} = require('./dataMapper');

const log = console.log;

// setting questions
const questions = [
	{
		type: 'input',
		name: 'service',
		message: 'Service name',
	},
	{
		type: 'input',
		name: 'userName',
		message: 'User name',
	},
	{
		type: 'input',
		name: 'email',
		message: 'E-mail',
	},
	{
		type: 'password',
		name: 'password',
		message: 'Password',
	},
	{
		type: 'list',
		name: 'showPassword',
		choices: (answers) => [{ name: 'true', short: answers.password }, 'false'],
		message: 'Show password',
	},
	{
		type: 'password',
		name: 'passwordConf',
		message: 'Confirm your password',
		validate: (input, answers) => {
			const message =
				answers.password === input ? true : 'Password do not match';
			return message;
		},
	},
	{
		type: 'input',
		name: 'phone',
		message: 'Phone number',
	},
	{
		type: 'editor',
		name: 'otherDetails',
		message: 'Other details',
	},
	{
		type: 'input',
		name: 'date',
		message: 'Created at',
		default: () => new Date(Date.now()).toLocaleString(),
	},
];

// setting meta data
program.version('0.0.1').description('CLI password management tool');

// setting welcome page

log(chalk.yellowBright.italic('\nWelcome to passchase!\n'));

// save answers
const saveAnswers = (result) => {
	log(chalk.green('\nNew record added'));
	addRecord(result);
};

//  add command function
const add = () => {
	prompt(questions)
		.then((result) => {
			saveAnswers(result);
		})
		.catch((err) => {
			if (err.isTtyError) {
				log(
					chalk.red("Prompt couldn't be rendered in the current environment")
				);
			} else {
				console.error(err);
			}
		});
};

// show command function
const show = (scope) => {
	if (scope === 'all') {
		listRecords()
			.then((result) => {
				if (result.length > 0) {
					const table = chalkTable({ leftPad: 2 }, result);
					log(table);
				} else {
					log(chalk.yellow('empty database'));
				}
			})
			.catch((err) => {
				log.red(err);
			});
	} else {
		const searchTerm = scope;
		searchRecord(searchTerm)
			.then((result) => {
				if (result.length > 0) {
					const table = chalkTable({ leftPad: 3 }, result);
					log(table);
				} else {
					log(chalk.yellow('no records found!'));
				}
			})
			.catch((err) => {
				log(chalk.red(err));
			});
	}
};
// delete command function
const deleteRec = (id) => {
	deleteRecord(id)
		.then((result) => {
			// if (result) {
			log(chalk.green('Item deleted successfully'));
			// } else {
			// 	log(chalk.yellow('no records found!'));
			// }
		})
		.catch((err) => {
			log(chalk.red(err));
		});
};

program.command('add').alias('a').description('Add a new record').action(add);
program
	.command('show <scope>')
	.alias('s')
	.description('Show records')
	.action((scope) => show(scope));

program
	.command('delete <id>')
	.alias('d')
	.description('Delete a record')
	.action((id) => deleteRec(id));

program.parse(process.argv);
