import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

function CenterModal({isOpen, onClose, children}: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="z-50 fixed inset-0 bg-gray-400 bg-opacity-50 flex justify-center items-center">
            <div className="p-6 bg-white rounded-lg shadow-xl ">
                <button className="float-right" onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
}

export default CenterModal