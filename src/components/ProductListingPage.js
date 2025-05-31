// src/pages/ProductListingPage/ProductListingPage.js
import React, { useState } from 'react';
import Header from '../components/Header';
import PlantCard from '../components/PlantCard';
import plantsData from '../utils/PlantData'; // Ensure this path and casing are correct
import styles from './styles/ProductListingPage.module.css'; // Ensure this path is correct

const ProductListingPage = () => {
  // Set the initial state to "Original Plants"
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("Original Plants");

  const handleFilterChange = (categoryName) => {
    setSelectedCategoryFilter(categoryName);
  };

  // Group all plants by category from your plantData
  const allPlantsByCategory = plantsData.reduce((acc, plant) => {
    if (!acc[plant.category]) {
      acc[plant.category] = [];
    }
    acc[plant.category].push(plant);
    return acc;
  }, {});

  // Determine which plants to display based on the selected filter
  let plantsToDisplay = {};

  if (selectedCategoryFilter === "All Plants") { // Option to show all if you add an "All" button
    plantsToDisplay = allPlantsByCategory;
  } else {
    // If a specific category is selected, use it directly as the key
    // This assumes your button values directly match your plantData.category values.
    if (allPlantsByCategory[selectedCategoryFilter]) {
      plantsToDisplay[selectedCategoryFilter] = allPlantsByCategory[selectedCategoryFilter];
    }
  }

  return (
    <>
      <Header /> {/* The Header component */}

      <div className={styles.productListingPage}>
        <div className={styles.content}>
          <h2>Our Plants</h2>
          <div className={styles.option}>
            {/* Buttons to change the filter */}
            <button
              className={`${styles.btn} ${selectedCategoryFilter === "Original Plants" ? styles.activeBtn : ''}`}
              onClick={() => handleFilterChange("Original Plants")}
            >
              Original Plants
            </button>
            <button
              className={`${styles.btn} ${selectedCategoryFilter === "Flower Plants" ? styles.activeBtn : ''}`}
              onClick={() => handleFilterChange("Flower Plants")}
            >
              Flower Plants
            </button>
            <button
              className={`${styles.btn} ${selectedCategoryFilter === "Fake Plants" ? styles.activeBtn : ''}`}
              onClick={() => handleFilterChange("Fake Plants")}
            >
              Fake Plants
            </button>
            {/* You could add an "All Plants" button here if you want: */}
            {/*
            <button
              className={`${styles.btn} ${selectedCategoryFilter === "All Plants" ? styles.activeBtn : ''}`}
              onClick={() => handleFilterChange("All Plants")}
            >
              All Plants
            </button>
            */}
          </div>
          {/* Display message if no plants found for the selected filter */}
          {Object.keys(plantsToDisplay).length === 0 ? (
            <p>No plants found in the "{selectedCategoryFilter}" category.</p>
          ) : (
            // Map through the filtered plants and display them
            Object.keys(plantsToDisplay).map(category => (
              <div key={category} className={styles.categorySection}>
                <h3>{category}</h3>
                <div className={styles.plantGrid}>
                  {plantsToDisplay[category].map(plant => (
                    <PlantCard key={plant.id} plant={plant} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ProductListingPage;