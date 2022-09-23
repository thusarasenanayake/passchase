const sqlite = require('sqlite3');
const path = require('path');

// database initialization
const databaseLocation = path.join(__dirname, '../', 'user/', 'passwords.db');
const db = new sqlite.Database(databaseLocation, (err) => {
	if (err) console.log(err);
});
const sql =
	'CREATE TABLE IF NOT EXISTS records(id INTEGER UNIQUE,service TEXT,userName TEXT,email TEXT,password TEXT,phone TEXT,otherDetails TEXT,date TEXT)';

db.serialize(() => {
	db.run(sql, (err) => {
		if (err) {
			console.log(err);
		}
	});
});

exports.listRecords = () => {
	return new Promise((resolve, reject) => {
		const sql = 'SELECT * FROM records';
		db.all(sql, (err, rows) => {
			if (err) reject(err);

			const editedRows = rows.map((r) => ({
				ID: r.id,
				Service: r.service ? r.service : '',
				'User name': r.userName ? r.userName : '',
				'E-mail': r.email ? r.email : '',
				Password: r.password ? r.password : '',
				'Phone number': r.phone ? r.phone : '',
				'Other details': r.otherDetails
					? r.otherDetails.replace(/\r\n|\n|\r|\s+/g, ' ')
					: '',
			}));
			resolve(editedRows);
		});
	});
};

exports.searchRecord = (term) => {
	return new Promise((resolve, reject) => {
		const sql = `SELECT * FROM records WHERE "userName" LIKE ? OR "service" LIKE ? OR "id" LIKE ?`;
		db.all(sql, [`%${term}%`, `%${term}%`, `%${term}%`], (err, rows) => {
			if (err) reject(err);
			const editedRows = rows.map((r) => ({
				ID: r.id,
				Service: r.service ? r.service : '',
				'User name': r.userName ? r.userName : '',
				'E-mail': r.email ? r.email : '',
				Password: r.password ? r.password : '',
				'Phone number': r.phone ? r.phone : '',
				'Other details': r.otherDetails
					? r.otherDetails.replace(/\r\n|\n|\r|\s+/g, ' ')
					: '',
			}));
			resolve(editedRows);
		});
	});
};

exports.addRecord = (data) => {
	return new Promise((resolve, reject) => {
		const values = Object.values(data).toString();
		const sql = `INSERT INTO records VALUES (?, ? ,?, ?, ?, ?, ?, ?)`;
		db.run(
			sql,
			[
				Date.now(),
				data.service.trim(),
				data.userName.trim(),
				data.email.trim(),
				data.password.trim(),
				data.phone.trim(),
				data.otherDetails.trim(),
				data.date.trim(),
			],
			function (err) {
				if (err) {
					reject(err);
					return;
				}
				resolve(true);
			}
		);
	});
};

exports.listOneRecord = (id) => {
	return new Promise((resolve, reject) => {
		const sql = 'SELECT * FROM records WHERE id=?';
		db.get(sql, [id], (err, row) => {
			if (err) reject(err);

			if (row) {
				resolve({
					id: row.id,
				});
			} else {
				resolve(null);
			}
		});
	});
};
exports.updateRecord = (field, value, id) => {
	return new Promise((resolve, reject) => {
		const sql = () => `UPDATE records SET ${field} = ? WHERE id=?`;
		db.run(sql(), [value, id], (err) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(null);
		});
	});
};

exports.deleteRecord = (id) => {
	return new Promise((resolve, reject) => {
		const sql = 'DELETE FROM records WHERE id=?';
		db.run(sql, [id], (err) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(null);
		});
	});
};
