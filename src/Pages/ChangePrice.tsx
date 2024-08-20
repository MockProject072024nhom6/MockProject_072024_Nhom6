import { useState } from "react";
import { Edit, Plus } from 'lucide-react';
import {
  addpriceContainer,
  addpriceInnerContainer,
  addpriceHeader,
  addpriceDivider,
  addpriceAvatarContainer,
  addpriceAvatarWrapper,
  avatarBorder,
  addpriceAvatar,
  addpriceEditIcon,
  addpriceFieldsContainer,
  addpriceField,
  addpriceLabel,
  addpriceInput,
  addpriceTextarea,
  addpriceSelect,
  addpriceButtonsContainer,
  addpriceButton,
  addpriceFileInputContainer,
  addpriceFileInput,
  addpriceFileButton,
  addpriceFileButtonText,
  cancelButton,
  saveButton
} from "../Style/tailwindStyles";
import "../index.css";
import avatar from "../assets/userimg.jpg";

function ChangePrice() {
  const [filter, setFilter] = useState("Item 1");
  const [uploadedFileName, setUploadedFileName] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFileName(file.name);
    }
  };

  return (
    <div className={addpriceContainer}>
      <div className={addpriceInnerContainer}>
        <div className={addpriceHeader}>EDIT PRICE</div>
        <div className={addpriceAvatarContainer}>
          <div className={addpriceDivider}></div>
          <div className={addpriceAvatarWrapper}>
            <div className={avatarBorder}>
              <img src={avatar} alt="Avatar" className={addpriceAvatar} />
            </div>
            <div className={addpriceEditIcon}><Edit size={16} /></div>
          </div>
        </div>
        <div className={addpriceFieldsContainer}>
          <div className={addpriceField}>
            <label className={addpriceLabel}>Name security services</label>
            <input type="text" className={addpriceInput} />
          </div>
          <div className={addpriceField}>
            <label className={addpriceLabel}>ID services</label>
            <input type="text" className={addpriceInput} />
          </div>
          <div className={addpriceField}>
            <label className={addpriceLabel}>Price</label>
            <input type="text" className={addpriceInput} />
          </div>
          <div className={addpriceField}>
            <label className={addpriceLabel}>Image</label>
            <div className={addpriceFileInputContainer}>
              <input 
                type="text" 
                value={uploadedFileName} 
                readOnly 
                className={addpriceFileInput} 
              />
              <label className={addpriceFileButton}>
                <Plus size={16} />
                <span className={addpriceFileButtonText}>Add Image</span>
                <input 
                  type="file" 
                  className="hidden" 
                  onChange={handleFileUpload} 
                />
              </label>
            </div>
          </div>
          <div className={addpriceField}>
            <label className={addpriceLabel}>Term</label>
            <select className={addpriceSelect}>
              <option>Short-term</option>
              <option>Long-term</option>
            </select>
          </div>
          <div className={addpriceField}>
            <label className={addpriceLabel}>Service Details</label>
            <textarea className={addpriceTextarea}></textarea>
          </div>
          <div className={addpriceButtonsContainer}>
            <button className={cancelButton}>Cancel</button>
            <button className={saveButton}>Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePrice;