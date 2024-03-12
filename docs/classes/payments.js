export class payments {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} isowed Rs ${this.amount} for ${this.details}.`;
    }
}
