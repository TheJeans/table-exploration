import React from 'react';

interface Column {
    header: string;
    accessor: string;
}

interface Props {
    accountName: string;
    emailAddress: string;
    accountHolderName: string;
    phoneNumber: string;
    location: string;
    hasError: boolean;
    errorMessage: string;
}

interface TableProps {
    columns: Column[];
    data: Props[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <div className="overflow-x-auto">
                    <table className="min-w-[1000px] bg-white mx-auto">
                        <thead>
                        <tr>
                            {columns.map((column, index) => (
                                <th
                                    key={index}
                                    className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 tracking-wider"
                                >
                                    {column.header}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex} className="hover:bg-gray-100">
                                {columns.map((column, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className="px-4 py-2 border-b border-gray-200 text-sm leading-5 text-gray-700"
                                    >
                                        {row[column.accessor as keyof Props]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Table;
