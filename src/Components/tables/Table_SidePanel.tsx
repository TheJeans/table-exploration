import React, { useState } from "react";
import '../../styles/sidePanel.css'

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

function Table_SidePanel({ columns, data }:TableProps) {
    const [selectedRow, setSelectedRow] = useState<Props | null>(null);

    const handleRowClick = (row: Props) => {
        setSelectedRow(row);
    };
    return (
        <section className="py-8 bg-neutral-100">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-3/4 px-4 mb-8 lg:mb-0">
                        <div className="px-6 pb-6 pt-4 bg-white shadow-md rounded-lg">
                            <div className="flex flex-wrap items-center mb-3">
                                <div>
                                    <div className="flex items-center">
                                        <h3 className="mr-2 text-xl font-bold">
                                            Lorem Ipsum
                                        </h3>
                                        <span className="py-1 px-2 bg-indigo-500 text-xs text-white rounded-full">
                                            14 Current Exceptions
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500">
                                        Information about recent tasks
                                    </p>
                                </div>
                                <a
                                    className="ml-auto flex items-center py-2 px-3 text-xs text-white bg-indigo-500 hover:bg-indigo-600 rounded"
                                    href="#"
                                >
                                    <span>Filter</span>
                                </a>
                            </div>
                            <div className="overflow-hidden">
                                <div
                                    className="scrolling-section"
                                    role="region"
                                    aria-labelledby="table-title"
                                >
                                    <table className="min-w-[1000px] w-full mx-auto">
                                        <thead>
                                            <tr className="text-left">
                                                {columns.map((column, index) => (
                                                    <th
                                                        className="p-0 border-b border-neutral-100"
                                                        key={index}
                                                    >
                                                        <div className="pb-3.5">
                                                            <span className="text-sm text-gray-400 font-medium uppercase">
                                                                {column.header}
                                                            </span>
                                                        </div>
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {data.map((row, rowIndex) => (
                                            <React.Fragment key={rowIndex}>
                                                <tr role="row">
                                                    {columns.map((column, colIndex) => (
                                                        <td
                                                            key={colIndex}
                                                            role="gridcell"
                                                            className="py-3 pr-4 border-b border-neutral-100"
                                                        >
                                                            {column.accessor === "action" ? (
                                                                <button onClick={() => handleRowClick(row)}>
                                                                    <svg
                                                                        width="20"
                                                                        height="20"
                                                                        viewBox="0 0 20 20"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <circle
                                                                            cx="10"
                                                                            cy="10"
                                                                            r="9.25"
                                                                            fill="white"
                                                                            stroke="#B8C1CC"
                                                                            strokeWidth="1.5"
                                                                        ></circle>
                                                                        <path
                                                                            d="M13.5 8.5L10 12L6.5 8.5"
                                                                            stroke="#B8C1CC"
                                                                            strokeWidth="1.5"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        ></path>
                                                                    </svg>
                                                                </button>
                                                            ) : (
                                                                row[column.accessor as keyof Props]
                                                            )}
                                                        </td>
                                                    ))}
                                                </tr>
                                            </React.Fragment>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/4 px-4">
                        <div className="relative px-6 pb-6 py-4 bg-white shadow-md rounded-lg">
                            <div className="mb-6">
                            {selectedRow ? (
                                <>
                                    <div className="mb-6">
                                        <h3 className="text-xl font-bold">Details</h3>
                                        <p className="text-sm text-gray-500">Lorem ipsum dolor amet</p>
                                    </div>
                                    <div>
                                        <p><strong>Account Name:</strong> {selectedRow.accountName}</p>
                                        <p><strong>Email Address:</strong> {selectedRow.emailAddress}</p>
                                        <p><strong>Account Holder Name:</strong> {selectedRow.accountHolderName}</p>
                                        <p><strong>Phone Number:</strong> {selectedRow.phoneNumber}</p>
                                        <p><strong>Location:</strong> {selectedRow.location}</p>
                                        {selectedRow.hasError && (
                                            <p><strong>Error:</strong> {selectedRow.errorMessage}</p>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold">Details</h3>
                                    <p className="text-sm text-gray-500">Select a row to see details</p>
                                </div>
                            )}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Table_SidePanel;
