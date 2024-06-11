import React from "react";
import { Link } from "react-router-dom";

const Newletters = () => {
  return (
    <div className="bg-[#1E2832] bg-opacity-5 px-4 py-16">
      <h2 className="mb-8 text-3xl font-semibold capitalize text-center my-8 ">
        Follow products and discounts on Instagram
      </h2>

      {/* insta grid */}
      <div className="flex flex-wrap gap-4 items-center justify-center md-20">
        <Link to="/">
          <img src="/images/instagram/img1.png" alt="img" />
        </Link>
        <Link to="/">
          <img src="/images/instagram/2.png" alt="img" />
        </Link>
        <Link to="/">
          <img src="/images/instagram/img3.png" alt="img" />
        </Link>
        <Link to="/">
          <img src="/images/instagram/img4.png" alt="img" />
        </Link>
        <Link to="/">
          <img src="/images/instagram/img5.png" alt="img" />
        </Link>
        <Link to="/">
          <img src="/images/instagram/img6.png" alt="img" />
        </Link>
      </div>

      {/* newsletters */}
      <div>
        <h2 className="text-3xl font-semibold capitalize text-center my-8 mb-8">
          or subscribe to the newsletters
        </h2>
        <form className="md:w-1/2 mx-auto text-center">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address..."
            className="h-8 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5 placeholder:text-black/50 mr-4"
          />
          <input
            type="submit"
            value={"submit"}
            className="bg-black text-white px-6 py-1 rounded-sm"
          />
        </form>
      </div>
    </div>
  );
};

export default Newletters;
