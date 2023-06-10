"use client";

import React from "react";
import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("newArrivals");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tabs">
        <button className={activeTab === "newArrivals" ? "active" : ""} onClick={() => handleTabChange("newArrivals")}>
          New Arrivals
        </button>
        <button className={activeTab === "bestSellers" ? "active" : ""} onClick={() => handleTabChange("bestSellers")}>
          Best Sellers
        </button>
        <button className={activeTab === "saleItems" ? "active" : ""} onClick={() => handleTabChange("saleItems")}>
          Sale Items
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "newArrivals" && <>FML</>}
        {activeTab === "bestSellers" && <>FML</>}
        {activeTab === "saleItems" && <div>dscdsc</div>}
      </div>
    </div>
  );
};

export default Tabs;
