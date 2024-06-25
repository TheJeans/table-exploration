import React from 'react';
import '../../styles/table.css'

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
                                    className=""
                                >
                                    {column.header}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {columns.map((column, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className=""
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
