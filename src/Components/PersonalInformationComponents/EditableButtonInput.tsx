import React, { useState } from 'react';
import { I_props_EditableButton } from '../../Types/GuardTypes';

const EditableButtonInput: React.FC<I_props_EditableButton> = ({
  initialText,
  type,
  label,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);
  const [showPassword, setShowPassword] = useState(
    type === 'password' ? false : true
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev);
  };
  return (
    <section>
      <div className="relative p-2 border-2 my-1 rounded-lg flex items-center w-9/12">
        <div className="items-center ml-2 truncate">{label}</div>
        <div className="flex  items-center flex-grow justify-end ">
          <div className="relative flex justify-end mr-2  flex-grow ">
            {isEditing ? (
              <input
                type={showPassword ? 'text' : 'password'}
                value={text}
                onChange={handleChange}
                onBlur={handleBlur}
                title={label}
                placeholder={label}
                autoFocus
                className="px-3 py-1 rounded-lg max-w-72 w-full h-8 bg-gray-200 border border-gray-300 focus:outline-none text-start"
              />
            ) : type !== 'password' ? (
              <button
                onDoubleClick={handleEditClick}
                className="px-3 py-1 rounded-lg text-gray-400 max-w-72 w-full h-8 bg-gray-200 hover:bg-blue-600 text-start truncate"
              >
                {text}
              </button>
            ) : (
              <input
                type={showPassword ? 'text' : 'password'}
                value={text}
                onChange={handleChange}
                onBlur={handleBlur}
                title={label}
                placeholder={label}
                autoFocus
                className="pl-3 py-1 rounded-lg h-8 bg-gray-200 border border-gray-300 focus:outline-none text-start"
              />
            )}
          </div>

          {type === 'password' && (
            <button
              onClick={toggleShowPassword}
              className="px-3 py-1 mr-2 rounded-lg bg-gray-300 hover:bg-gray-400"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          )}

          <button
            onClick={handleEditClick}
            className="px-3 mr-2 py-2  rounded-lg bg-gray-300 hover:bg-gray-400"
          >
            Edit
          </button>
        </div>
      </div>
    </section>
  );
};

export default EditableButtonInput;
