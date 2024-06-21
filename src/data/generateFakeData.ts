export interface Transaction {
    accountName: string;
    emailAddress: string;
    accountHolderName: string;
    phoneNumber: string;
    location: string;
    hasError: boolean;
    errorMessage: string;
}

export const generateFakeData = (numRows: number): Transaction[] => {
    const accountNames = ['Account A', 'Account B', 'Account C'];
    const emailAddresses = ['one@email.com', 'two@email.com', 'three@email.com'];
    const holderNames = ['John Doe', 'Jane Smith', 'Alice Johnson'];
    const phoneNumbers = ['123-456-7890', '098-765-4321', '555-555-5555'];
    const locations = ['New York, NY', 'Los Angeles, CA', 'Chicago, IL'];
    const errorMessages = ['Network Error', 'Invalid Data', 'Timeout'];

    const transactions: Transaction[] = [];

    for (let i = 0; i < numRows; i++) {
        const hasError = Math.random() > 0.8;
        transactions.push({
            accountName: accountNames[Math.floor(Math.random() * accountNames.length)],
            emailAddress: emailAddresses[Math.floor(Math.random() * emailAddresses.length)],
            accountHolderName: holderNames[Math.floor(Math.random() * holderNames.length)],
            phoneNumber: phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)],
            location: locations[Math.floor(Math.random() * locations.length)],
            hasError,
            errorMessage: hasError ? errorMessages[Math.floor(Math.random() * errorMessages.length)] : '',
        });
    }

    return transactions;
};
