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
  saveButton,
  errorText,
  inputError
} from "../Style/tailwindStyles";
import "../index.css";
import avatar from "../assets/userimg.jpg";

// Định nghĩa kiểu dữ liệu cho formData
interface FormData {
  name: string;
  id: string;
  price: string;
  image: string;
  term: string;
  details: string;
}

function AddPrice() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    id: "",
    price: "",
    image: "",
    term: "Short-term",
    details: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: file.name });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name) newErrors.name = "This field is required.";
    if (!formData.id) newErrors.id = "This field is required.";
    if (!formData.price) newErrors.price = "This field is required.";
    if (!formData.image) newErrors.image = "This field is required.";
    if (!formData.details) newErrors.details = "This field is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form data:", formData);
    }
  };

  return (
    <div className={addpriceContainer}>
      <div className={addpriceInnerContainer}>
        <div className={addpriceHeader}>ADD PRICE</div>
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
            <div className="w-full">
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className={`${addpriceInput} ${errors.name ? inputError : ""}`} 
              />
              {errors.name && <p className={errorText}>{errors.name}</p>}
            </div>
          </div>
          <div className={addpriceField}>
            <label className={addpriceLabel}>ID services</label>
            <div className="w-full">
              <input 
                type="text" 
                name="id" 
                value={formData.id} 
                onChange={handleChange} 
                className={`${addpriceInput} ${errors.id ? inputError : ""}`} 
              />
              {errors.id && <p className={errorText}>{errors.id}</p>}
            </div>
          </div>
          <div className={addpriceField}>
            <label className={addpriceLabel}>Price</label>
            <div className="w-full">
              <input 
                type="text" 
                name="price" 
                value={formData.price} 
                onChange={handleChange} 
                className={`${addpriceInput} ${errors.price ? inputError : ""}`} 
              />
              {errors.price && <p className={errorText}>{errors.price}</p>}
            </div>
          </div>
          <div className={addpriceField}>
            <label className={addpriceLabel}>Image</label>
            <div className={addpriceFileInputContainer}>
              <input 
                type="text" 
                value={formData.image} 
                readOnly 
                className={`${addpriceFileInput} ${errors.image ? inputError : ""}`} 
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
              {errors.image && <p className={errorText}>{errors.image}</p>}
            </div>
          </div>
          <div className={addpriceField}>
            <label className={addpriceLabel}>Term</label>
            <select 
              name="term" 
              value={formData.term} 
              onChange={handleChange} 
              className={`${addpriceSelect} ${errors.term ? inputError : ""}`}
            >
              <option>Short-term</option>
              <option>Long-term</option>
            </select>
          </div>
          <div className={addpriceField}>
            <label className={addpriceLabel}>Service Details</label>
            <div className="w-full">
            <textarea 
              name="details" 
              value={formData.details} 
              onChange={handleChange} 
              className={`${addpriceTextarea} ${errors.details ? inputError : ""}`} 
            ></textarea>
            {errors.details && <p className={errorText}>{errors.details}</p>}
            </div>
          </div>
          <div className={addpriceButtonsContainer}>
            <button className={cancelButton}>Cancel</button>
            <button 
              className={saveButton} 
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPrice;

