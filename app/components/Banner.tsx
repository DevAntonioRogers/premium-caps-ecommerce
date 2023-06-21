import newsletterBanner from "../../public/newsletter-banner.png";

const Banner = () => {
  return (
    <div className="newsletter-bg flex justify-center items-center">
      <div>
        <div className="text-center">
          <h1 className="sm:text-3xl text-xl font-bold mb-1 bg-white/75 px-3 rounded-md">
            Get a <span className="text-primary"> 20%</span> Off Discount Coupon
          </h1>
          <p>by subscribing to our newsletter</p>
        </div>

        <div className="sm:w-[543px] w-[350px] h-[54px] flex mt-5">
          <div className="flex-1 bg-white pl-4 flex space-x-2 items-center h-full focus-within:text-primary text-black">
            <span>
              <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 14H2C1.4 14 1 13.6 1 13V2C1 1.4 1.4 1 2 1H15C15.6 1 16 1.4 16 2V13C16 13.6 15.6 14 15 14Z"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M3 4L8.5 8.5L14 4"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
            <input
              type="email"
              name="email"
              className="w-full h-full focus:outline-none text-sm placeholder:text-xs placeholder:text-black text-black font-medium tracking-wider "
              placeholder="Email Address"
            />
          </div>
          <button type="submit" className="sm:w-[158px] w-[100px] h-full bg-primary text-sm">
            Get Coupon!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
