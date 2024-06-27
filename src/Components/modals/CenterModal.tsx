import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

function CenterModal({isOpen, onClose, children}: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="z-50 fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded">
                <button className="float-right" onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
}

export default CenterModal