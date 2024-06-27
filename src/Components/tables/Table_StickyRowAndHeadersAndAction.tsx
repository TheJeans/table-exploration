import React, { useState } from "react";
import "../../styles/another.css";
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

const Table_StickyRowAndHeadersAndAction: React.FC<TableProps> = ({
    columns,
    data,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<Props | null>(null);

    const toggleModal = (row?: Props) => {
        setSelectedRow(row || null);
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <section className="mb-4 overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="pt-5 bg-white border border-neutral-100 shadow-lg rounded-xl ">
                        <div className="px-6">
                            <div className="scrolling-section" role="region" aria-labelledby="table-title">
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
                                            <tr key={rowIndex} role="row">
                                                {columns.map(
                                                    (column, colIndex) => (
                                                        <td
                                                            key={colIndex}
                                                            role="gridcell"
                                                            className="py-3 pr-4 border-b border-neutral-100"
                                                        >
                                                            {column.accessor ===
                                                            "action" ? (
                                                                <button
                                                                    onClick={() =>
                                                                        toggleModal(
                                                                            row
                                                                        )
                                                                    }
                                                                >
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
                                                                row[
                                                                    column.accessor as keyof Props
                                                                ]
                                                            )}
                                                        </td>
                                                    )
                                                )}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <CenterModal isOpen={isModalOpen} onClose={() => toggleModal()}>
                    <h2>Row Details</h2>
                    {selectedRow && (
                        <div>
                            <p>
                                <strong>Account Name:</strong>{" "}
                                {selectedRow.accountName}
                            </p>
                            <p>
                                <strong>Email Address:</strong>{" "}
                                {selectedRow.emailAddress}
                            </p>
                            <p>
                                <strong>Account Holder Name:</strong>{" "}
                                {selectedRow.accountHolderName}
                            </p>
                            <p>
                                <strong>Phone Number:</strong>{" "}
                                {selectedRow.phoneNumber}
                            </p>
                            <p>
                                <strong>Location:</strong>{" "}
                                {selectedRow.location}
                            </p>
                            {selectedRow.hasError && (
                                <p>
                                    <strong>Error:</strong>{" "}
                                    {selectedRow.errorMessage}
                                </p>
                            )}
                        </div>
                    )}
                </CenterModal>
                <ul className="mt-10 px-4 container mx-auto">
                    <li>
                        Builds on the view height and width of the tables being
                        set.
                    </li>
                    <li></li>
                </ul>
            </section>
        </>
    );
};

export default Table_StickyRowAndHeadersAndAction;
