import React from 'react';
import '../style.css';

interface Props {
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmationPopup: React.FC<Props> = ({ message, onCancel, onConfirm }) => {
  return (
    <div className="confirmation-popup">
      <div className="confirmation-content">
        <p>{message}</p>
        <div className="confirmation-buttons">
          <button className="bg-red-500 text-white mr-2 px-4 py-2 rounded" onClick={onCancel}>
            Cancel
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={onConfirm}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
