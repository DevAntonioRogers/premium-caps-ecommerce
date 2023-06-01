"use client";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const Icons = () => {
  return (
    <div className="flex mt-10 items-center justify-between">
      <div className="rounded-full border-gray-400 border p-5">
        <LocalShippingIcon fontSize="large" />
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
