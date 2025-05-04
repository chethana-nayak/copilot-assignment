import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; 

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <button onClick={handleBack} style={styles.button}>
      <FaArrowLeft style={styles.icon} />
      <span style={styles.text}>Back</span>
    </button>
  );
};

const styles = {
  button: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    color: "#007BFF",
  },
  icon: {
    marginRight: "8px",
  },
  text: {
    fontWeight: "bold",
  },
};

export default BackButton;
