import React from 'react';
import '../styles/stickyRowAndHeaders.css'

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

const Table_StickyRowAndHeaders: React.FC<TableProps> = ({ columns, data }) => {
    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <div className="min-h-[500px] max-h-[800px] overflow-y-auto overflow-x-auto">
                    <table className="min-w-[1000px] bg-white mx-auto">
                        <thead className="">
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
                            <tr key={rowIndex} className="hover:bg-gray-100 ">
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
            <ul className="mt-10 px-4 container mx-auto">
                <li>Builds on the view height and width of the tables being set.</li>
                <li></li>
            </ul>
        </section>
    );
};

export default Table_StickyRowAndHeaders;
