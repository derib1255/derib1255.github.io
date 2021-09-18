
function makeBank() {
    const transactionsDB = [
        { customerId: 1, customerTransactions: [10, 50, -40] },
        { customerId: 2, customerTransactions: [10, 10, -10] },
        { customerId: 3, customerTransactions: [5, -5, 55] },
    ];
    const bank = transactionsDB;


    bank.getBalance = function (id) {
        const customer = transactionsDB.find((customer) => customer.customerId === id);
        let balance = 0;

        for (const transact of customer.customerTransactions) {
            balance += transact;
        }
        return balance;
    };

    bank.bankBalance = function () {

        let babalanc = 0;

        for (let member of bank) {
            for (let element of member.customerTransactions) {
                babalanc = babalanc + element;
            }
        }

        return babalanc;

    };

    return bank;
}