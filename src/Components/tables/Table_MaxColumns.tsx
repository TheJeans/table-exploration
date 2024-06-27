import React, { useState } from "react";
import "../../styles/another.css";

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

const Table_MaxColumns: React.FC<TableProps> = ({ columns, data }) => {
    const [expandedRowIndex, setExpandedRowIndex] = useState<number | null>(null);

    const toggleRow = (index: number) => {
        setExpandedRowIndex(expandedRowIndex === index ? null : index);
    };

    return (
        <>
            <section className="mb-4 overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="pt-5 bg-white border border-neutral-100 shadow-lg rounded-xl ">
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
                                                        className="py-3 pr-4 border-b border-neutral-100"
                                                    >
                                                        {column.accessor === "action" ? (
                                                            <button onClick={() => toggleRow(rowIndex)}>
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
                                            {expandedRowIndex === rowIndex && (
                                                <tr className="">
                                                    <td colSpan={columns.length} className="">
                                                        <div className="p-2 bg-neutral-200 rounded-md">
                                                            <div className="p-4 bg-white rounded-sm">
                                                                <h2 className="text-lg font-semibold mb-2">{row.accountName} Details</h2>
                                                                <p>
                                                                    <strong>Phone Number:</strong> {row.phoneNumber}
                                                                </p>
                                                                {row.hasError && (
                                                                    <p>
                                                                        <strong>Error:</strong> {row.errorMessage}
                                                                    </p>
                                                                )}
                                                                
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )}
                                        </React.Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Table_MaxColumns;
