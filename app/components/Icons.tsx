"use client";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const Icons = () => {
  return (
    <div className="flex mt-10 items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="rounded-full border-gray-700 border p-5 text-black/90">
          <LocalShippingIcon fontSize="large" color="inherit" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-primary">Free Shipping</h2>
          <h3 className="text-gray-500">Free Shipping for orders over $120</h3>
        </div>
      </div>

      <div className="rounded-full border-gray-400 border p-5">
        <LocalShippingIcon fontSize="large" />
      </div>
      <div className="rounded-full border-gray-400 border p-5">
        <LocalShippingIcon fontSize="large" />
      </div>
      <div className="rounded-full border-gray-400 border p-5">
        <LocalShippingIcon fontSize="large" />
      </div>
    </div>
  );
};

export default Icons;
