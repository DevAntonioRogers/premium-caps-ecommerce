"use client";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentsIcon from "@mui/icons-material/Payments";
import ChatIcon from "@mui/icons-material/Chat";
import PaidIcon from "@mui/icons-material/Paid";

const Icons = () => {
  return (
    <div className="flex mt-10 items-center justify-between w-full">
      <div className="flex items-center gap-4 p-2 justify-center">
        <div className="rounded-full p-3 text-white  bg-primary">
          <LocalShippingIcon fontSize="large" color="inherit" />
        </div>
        <div>
          <h2 className="text-2xl text-primary">Free Shipping</h2>
          <h3 className="text-gray-500">Free Shipping for orders over $120</h3>
        </div>
      </div>

      <div className="flex items-center gap-2 p-2">
        <div className="rounded-full p-3 text-white  bg-primary">
          <ChatIcon fontSize="large" color="inherit" />
        </div>
        <div>
          <h2 className="text-2xl text-primary">Support</h2>
          <h3 className="text-gray-500">24 hours a day, 7 days a week</h3>
        </div>
      </div>
      <div className="flex items-center gap-2 p-2">
        <div className="rounded-full p-3 text-white  bg-primary">
          <PaymentsIcon fontSize="large" color="inherit" />
        </div>
        <div>
          <h2 className="text-2xl text-primary">Payments</h2>
          <h3 className="text-gray-500">Multiple Payments Options Available</h3>
        </div>
      </div>
      <div className="flex items-center gap-2 p-2 justify-center">
        <div className="rounded-full p-3 text-white  bg-primary">
          <PaidIcon fontSize="large" color="inherit" />
        </div>
        <div>
          <h2 className="text-2xl text-primary">Refund</h2>
          <h3 className="text-gray-500">100% Money Back Guaranteed</h3>
        </div>
      </div>
    </div>
  );
};

export default Icons;
