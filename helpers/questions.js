exports.addRecordQuestions = [
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
				answers.password === input
					? true
					: 'Password do not match, Please try again';
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
