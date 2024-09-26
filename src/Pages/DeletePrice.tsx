import { useState } from "react";
import {
  modalContainer,
  modalContent,
  modalHeader,
  cancelButton,
  deleteButton,
} from "../Style/tailwindStyles";
import "../index.css";

function DeletePrice() {
  return (
    <div className={modalContainer}>
      <div className={modalContent}>
        <div className={modalHeader}>
          Confirm deletion of this information?
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <button className={cancelButton}>Cancel</button>
          <button className={deleteButton}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default DeletePrice;
