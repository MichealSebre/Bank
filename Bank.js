class Bank {

	static nextNumber = 0;

	/**
	 * Constructor for creating a new Bank
	 *
	 */
	constructor() {
		this._accounts = [];
	}

	/**
	 * Add account to the bank
	 *
	 * @returns {number} the account number
	 */
	addAccount() {
		let account = new Account(Bank.nextNumber);
		this._accounts.push(account);
		Bank.nextNumber++;
		return account.getNumber();
	}

	/**
	 * Add savings account to the bank
	 *
	 * @returns {number} the account number
	 */
	addSavingsAccount(interest) {
		let savingsAccount = new Account(Bank.nextNumber, interest);
		this._accounts.push(savingsAccount);
		Bank.nextNumber++;
		return savingsAccount.getNumber();
	}

	/**
	 * Add checking account to the bank
	 *
	 * @returns {number} the account number
	 */
	addCheckingAccount(overdraft) {
		let checkingAccount = new Account(Bank.nextNumber, overdraft);
		this._accounts.push(checkingAccount);
		Bank.nextNumber++;
		return checkingAccount.getNumber();
	}

	/**
	 * Closes an account
	 *
	 * @param {number} number the account number
	 */
	closeAccount(number) {
		this._accounts = this._accounts.filter(function(account) {
			return account.number !== number;
		});
	}

	/**
	 * Shows a list of accounts opened in this bank
	 */
	toString() {
		let accounts = "";
		this._accounts.forEach(account => {
			accounts += account + "\n";
		});
		return accounts;
	}

	/**
	 * Performs needed actions at the end of the month
	 */
	endOfMonth() {
		let endOfMonthReport = "";
		this._accounts.forEach(account => {
			endOfMonthReport + account.endOfMonth();
		})
		return endOfMonthReport;
	}
}