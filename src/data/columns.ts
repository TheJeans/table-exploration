export interface Column {
    header: string;
    accessor: string;
}

export const columns: Column[] = [
    { header: 'Account Name', accessor: 'accountName' },
    { header: 'Email Address', accessor: 'emailAddress' },
    { header: 'Account Holder', accessor: 'accountHolderName' },
    { header: 'Phone Number', accessor: 'phoneNumber' },
    { header: 'Location', accessor: 'location' },
    { header: 'Error', accessor: 'errorMessage' },
];

export const withActionColumn: Column[] = [
    { header: '', accessor: 'action' },
    { header: 'Account Name', accessor: 'accountName' },
    { header: 'Email Address', accessor: 'emailAddress' },
    { header: 'Account Holder', accessor: 'accountHolderName' },
    { header: 'Phone Number', accessor: 'phoneNumber' },
    { header: 'Location', accessor: 'location' },
    { header: 'Error', accessor: 'errorMessage' },
];

export const cutColumns: Column[] = [
    { header: '', accessor: 'action' },
    { header: 'Account Name', accessor: 'accountName' },
    { header: 'Email Address', accessor: 'emailAddress' },
    { header: 'Account Holder', accessor: 'accountHolderName' },
    // { header: 'Phone Number', accessor: 'phoneNumber' },
    { header: 'Location', accessor: 'location' },
    { header: 'Error', accessor: 'errorMessage' },
];

export const cutColumns2: Column[] = [
    { header: '', accessor: 'action' },
    { header: 'Account Name', accessor: 'accountName' },
    { header: 'Email Address', accessor: 'emailAddress' },
    { header: 'Account Holder', accessor: 'accountHolderName' },
    // { header: 'Phone Number', accessor: 'phoneNumber' },
    // { header: 'Location', accessor: 'location' },
    { header: 'Error', accessor: 'errorMessage' },
];