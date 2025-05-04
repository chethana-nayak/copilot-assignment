import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../Dropdown";
import { fetchFilters } from "../../services/article";
import "./ArticleFilters.css";

const ArticleFilters = ({ selectedFilters }) => {
  const [dropdownData, setDropdownData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchFilters();
        setDropdownData(response);
      } catch (error) {
        console.error("Error fetching dropdown data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (filterName, option) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get(filterName) === option?.id) {
      searchParams.delete(filterName);
    } else {
      searchParams.set(filterName, option?.id);
    }
    const newUrl = `${window.location.pathname}${
      searchParams.toString() ? `?${searchParams.toString()}` : ""
    }`;
    navigate(newUrl);
  };

  return (
    <div className="article-filters">
      <div className="filter-dropdowns">
        {dropdownData &&
          Object.keys(dropdownData).map((filterName) => (
            <Dropdown
              key={filterName}
              placeholder={filterName}
              options={dropdownData?.[filterName]}
              value={selectedFilters?.[filterName]}
              onSelect={(value) => handleFilterChange(filterName, value)}
            />
          ))}
      </div>
    </div>
  );
};

export default ArticleFilters;
