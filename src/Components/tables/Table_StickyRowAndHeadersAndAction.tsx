import React, { useState } from 'react';
import '../../styles/stickyRowAndHeaders.css'
import CenterModal from '../modals/CenterModal';

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

const Table_StickyRowAndHeadersAndAction: React.FC<TableProps> = ({ columns, data }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<Props | null>(null);

    const toggleModal = (row?: Props) => {
        setSelectedRow(row || null);
        setIsModalOpen(!isModalOpen);
    };

    return (
        <section className="py-8" aria-labelledby="table-title">
            <h2 id="table-title" className="sr-only">Account Information Table</h2>
            <div className="container mx-auto px-4">
                <div className="min-h-[500px] max-h-[800px] overflow-y-auto overflow-x-auto" role="region" aria-labelledby="table-title">
                    <table className="min-w-[1000px] mx-auto" role="grid">
                        <thead>
                        <tr role="row">
                            {columns.map((column, index) => (
                                <th
                                    key={index}
                                    role="columnheader"
                                    scope="col"
                                    tabIndex={0}
                                >
                                    {column.header}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex} role="row">
                                {columns.map((column, colIndex) => (
                                    <td
                                        key={colIndex}
                                        role="gridcell"
                                    >
                                        {column.accessor === 'action' ? (
                                            <button onClick={() => toggleModal(row)}>...</button>
                                        ) : (
                                            row[column.accessor as keyof Props]
                                        )}
                                    </td>
                                ))}
                                
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <CenterModal isOpen={isModalOpen} onClose={() => toggleModal()}>
                <h2>Row Details</h2>
                {selectedRow && (
                    <div>
                        <p><strong>Account Name:</strong> {selectedRow.accountName}</p>
                        <p><strong>Email Address:</strong> {selectedRow.emailAddress}</p>
                        <p><strong>Account Holder Name:</strong> {selectedRow.accountHolderName}</p>
                        <p><strong>Phone Number:</strong> {selectedRow.phoneNumber}</p>
                        <p><strong>Location:</strong> {selectedRow.location}</p>
                        {selectedRow.hasError && <p><strong>Error:</strong> {selectedRow.errorMessage}</p>}
                    </div>
                )}
            </CenterModal>
            <ul className="mt-10 px-4 container mx-auto">
                <li>Builds on the view height and width of the tables being set.</li>
                <li></li>
            </ul>
        </section>
    );
};

export default Table_StickyRowAndHeadersAndAction;
