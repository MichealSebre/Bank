class CheckingAccount extends Account {
    constructor(number, overdraft) {
        super(number);
        this.overdraft = overdraft;
    }

    /**
     * Getter for overdraft limit
     *
     * @returns {number} the overdraft
     */
    getOverdraft() {
        return this._overdraft;
    }

    /**
     * Setter for overdraft limit
     *
     * @param {number} overdraft the overdraft
     */
    setOverdraft(overdraft) {
        this._overdraft = overdraft;
    }

    /**
     * Method to take money out of the account
     *
     * @param {number} amount money to be taken out of the account
     * @returns {undefined}
     * @throws {RangeError} when amount is less than or equal to zero
     * @throws {Error} when the account has insufficient funds (balance)
     */
    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance + Math.abs(this._overdraft)) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "CheckingAccount " + this._number + ": balance " + this._balance + ": overdraft limit " + this._overdraft;
    }

    /**
     * Performs needed actions at the end of the month
     *
     * @returns {string}
     */
    endOfMonth() {
        if (this._balance < 0) {
            return "Warning, low balance " + this.toString();
        } else {
            return "";
        }
    }
}