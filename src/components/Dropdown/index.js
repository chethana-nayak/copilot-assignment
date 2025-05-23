import React, { useState, useEffect } from "react";

import "./Dropdown.css";

const Dropdown = ({ options, placeholder, value, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    if (onSelect) {
      onSelect(option);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedOption = options.find((option) => option.id === value);

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span
          style={{
            color: selectedOption ? "black" : "gray",
            fontWeight: selectedOption ? "bold" : "normal",
          }}
        >
          {selectedOption ? selectedOption.name : placeholder}
        </span>
        <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>
          &#9662;
        </span>
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option) => (
            <li
              key={option.id}
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}
              style={{
                fontWeight:
                  selectedOption && option.id === selectedOption.id
                    ? "bold"
                    : "normal",
              }}
            >
              <span className="dropdown-item-name">{option.name}</span>
              {selectedOption && option.id === selectedOption.id && (
                <span className="dropdown-tick">
                  <i className="icon-check">&#10003;</i>
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
