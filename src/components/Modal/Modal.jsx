import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CheckCircle } from "@mui/icons-material";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

export default function BasicModal({ onClose }) {
  return (
    <div className="modal-overlay">
    <div className="modal-content">
      <CheckCircle className="modal-icon" />
      <h2 className="modal-title">Thank You!</h2>
      <p className="modal-message">We appreciate your message.</p>
      <p className="modal-message">
        Our team will get back to you within 24 hours.
      </p>
      <button className="modal-button" onClick={onClose}>
        Close
      </button>
    </div>
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 9999;
        }

        .modal-content {
          background-color: #fff;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          padding: 24px;
          max-width: 400px;
          text-align: center;
        }

        .modal-title {
          font-size: 24px;
          margin-bottom: 16px;
        }
        .modal-icon {
          color: #007bff;
          font-size: 48px;
          margin-bottom: 24px;
        }
        .modal-message {
          margin-bottom: 12px;
        }

        .modal-button {
          background-color: #007bff;
          color: #fff;
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
}
