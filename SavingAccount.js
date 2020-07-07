class SavingsAccount extends Account {
    constructor(number, interest) {
        super(number);
        this.interest = interest;
    }

    /**
     * Getter for interest
     *
     * @returns {number} the interest rate
     */
    getInterest() {
        return this._interest;
    }

    /**
     * Setter for interest
     *
     * @param {number} interest the interest rate
     */
    setInterest(interest) {
        this._interest = interest;
    }

    /**
     * Deposits the interest amount into the account
     *
     * @returns {number} calculated interest
     */
    addInterest() {
        let calculatedInterest = this._balance * this._interest / 100;
        this._balance += calculatedInterest;
        return calculatedInterest;
    }

    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "SavingsAccount " + this._number + ": balance " + this._balance + ": interest " + this._interest;
    }

    /**
     * Performs needed actions at the end of the month
     *
     * @returns {string}
     */
    endOfMonth() {
        this.addInterest();
        return "Interest added " + this.toString();
    }
}