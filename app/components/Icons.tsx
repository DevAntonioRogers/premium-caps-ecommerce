"use client";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentsIcon from "@mui/icons-material/Payments";
import ChatIcon from "@mui/icons-material/Chat";
import LoyaltyIcon from "@mui/icons-material/Loyalty";

const Icons = () => {
  return (
    <div className="w-full bg-background mt-5">
      <div className="flex flex-col  md:flex-row  gap-6 md:gap-1 lg:gap-12 w-[92%] m-auto py-4 lg:max-w-[1500px]">
        <div className="flex items-center gap-4">
          <div className="rounded-full p-3 text-white  bg-black flex">
            <LocalShippingIcon fontSize="small" color="inherit" />
          </div>
          <div>
            <h2 className="text-[20px] text-primary">Free Shipping</h2>
            <h3 className="text-gray-500">Free Shipping for orders over $120</h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-full p-3 text-white bg-black flex">
            <ChatIcon fontSize="small" color="inherit" />
          </div>
          <div>
            <h2 className="text-[20px] text-primary">Support</h2>
            <h3 className="text-gray-500">24 hours a day, 7 days a week</h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-full p-3 text-white  bg-black flex">
            <LoyaltyIcon fontSize="small" color="inherit" />
          </div>
          <div>
            <h2 className="text-[20px] text-primary ">Quality</h2>
            <h3 className="text-gray-500">Top Tier Quality. 100% Satifaction </h3>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="rounded-full p-3 text-white  bg-black flex">
            <PaymentsIcon fontSize="small" color="inherit" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-[20px] text-primary">Payments</h2>
            <h3 className="text-gray-500">Multiple Payments Options Available</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icons;
