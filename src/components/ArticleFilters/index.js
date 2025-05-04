import React, { useState, useEffect } from "react";
import Dropdown from "../Dropdown";
import { fetchFilters } from "../../services/article";
import "./ArticleFilters.css";

const ArticleFilters = () => {
  const [dropdownData, setDropdownData] = useState();
  const [selectedFilters, setSelectedFilters] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = fetchFilters();
        setDropdownData(response);
      } catch (error) {
        console.error("Error fetching dropdown data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (filterName, option) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (updatedFilters[filterName]?.id === option?.id) {
        delete updatedFilters[filterName];
      } else {
        updatedFilters[filterName] = option;
      }
      return updatedFilters;
    });
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
