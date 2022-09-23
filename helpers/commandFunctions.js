const chalkTable = require('chalk-table');
const chalk = require('chalk');
const { prompt } = require('inquirer');

const { addRecordQuestions } = require('./questions');
const {
	addRecord,
	deleteRecord,
	listRecords,
	searchRecord,
	listOneRecord,
	updateRecord,
} = require('./dataMapper');

const log = console.log;

const setWelcomeMessage = () => {
	console.log(chalk.yellowBright.italic('\nWelcome to passchase!\n'));
};

//  add command function
const addRec = () => {
	prompt(addRecordQuestions)
		.then((result) => {
			log(chalk.green('\nNew record added'));
			addRecord(result);
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
const showRec = (scope) => {
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
				log(chalk.red(err));
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
	listOneRecord(id)
		.then((result) => {
			if (result) {
				deleteRecord(result.id).then((result) => {
					log(chalk.cyanBright(id + ' deleted successfully'));
				});
			} else {
				log(chalk.yellow('no records found!'));
			}
		})
		.catch((err) => {
			log(chalk.red('cannot delete the record!'));
		});
};

// update command function
const updateRec = (id, field, value) => {
	if (field !== 'id') {
		listOneRecord(id)
			.then((result) => {
				if (result) {
					updateRecord(field, value, id)
						.then((result) => {
							log(chalk.cyanBright(id + ' updated successfully'));
						})
						.catch((err) => {
							log(chalk.red(err));
						});
				} else {
					log(chalk.yellow('no records found!'));
				}
			})
			.catch((err) => {
				log(chalk.red('cannot update the record!'));
			});
	} else {
		log(chalk.yellow('cannot update id property'));
	}
};

module.exports = {
	setWelcomeMessage,
	addRec,
	showRec,
	deleteRec,
	updateRec,
};
