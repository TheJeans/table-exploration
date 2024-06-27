import React, { useState } from "react";
import "../../styles/evenmore.css";
import CenterModal from "../modals/CenterModal";

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

const Table_TableCards: React.FC<TableProps> = ({ columns, data }) => {
    const [selectedRow, setSelectedRow] = useState<Props | null>(null);

    const toggleRow = (row: Props | null) => {
        setSelectedRow(row);
    };

    const closeModal = () => {
        setSelectedRow(null);
    };

    const relatedRows = [
        {
            accountName: "Related Account 1",
            emailAddress: "related1@example.com",
            accountHolderName: "Related Holder 1",
            phoneNumber: "123-456-7890",
            location: "Location 1",
            hasError: false,
            errorMessage: ""
        },
        {
            accountName: "Related Account 2",
            emailAddress: "related2@example.com",
            accountHolderName: "Related Holder 2",
            phoneNumber: "098-765-4321",
            location: "Location 2",
            hasError: true,
            errorMessage: "Sample error message"
        }
    ];

    return (
        <>
            <section className="mb-4 overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="pt-5 bg-white border border-neutral-100 shadow-lg rounded-xl">
                        <div className="px-6">
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
                                                            className="py-5 pr-4 border-b border-neutral-100"
                                                        >
                                                            {column.accessor === "action" ? (
                                                                <button onClick={() => toggleRow(row)}>
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
            </section>
            {selectedRow && (
                <CenterModal isOpen={!!selectedRow} onClose={closeModal}>
                    <h2 className="text-2xl font-semibold mb-4 mt-2">{selectedRow.accountName} Details</h2>
                    <p className="pb-3">
                        <span className="text-gray-400">Email Address:</span> {selectedRow.emailAddress}
                    </p>
                    <p className="pb-3">
                        <span className="text-gray-400">Account Holder Name:</span> {selectedRow.accountHolderName}
                    </p>
                    <p className="pb-3">
                        <span className="text-gray-400">Phone Number:</span> {selectedRow.phoneNumber}
                    </p>
                    <p className="pb-3">
                        <span className="text-gray-400">Location:</span> {selectedRow.location}
                    </p>
                    {selectedRow.hasError && (
                        <p className="pb-3">
                            <span className="text-red-600">Error:</span> {selectedRow.errorMessage}
                        </p>
                    )}
                    <hr/>
                    <h3 className="mt-7 mb-4 text-xl font-semibold">Related Rows</h3>
                    <table className="min-w-[500px] w-full mx-auto">
                        <thead>
                            <tr className="text-left">
                                {columns.map((column, index) => (
                                    <th className="p-0 border-b border-neutral-100" key={index}>
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
                            {relatedRows.map((relatedRow, rowIndex) => (
                                <tr key={rowIndex} role="row">
                                    {columns.map((column, colIndex) => (
                                        <td key={colIndex} role="gridcell" className="py-3 pr-4 border-b border-neutral-100">
                                            {relatedRow[column.accessor as keyof Props]}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </CenterModal>
            )}
        </>
    );
};

export default Table_TableCards;
