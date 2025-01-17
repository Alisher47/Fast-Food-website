import React from "react";
import image5 from "../../../../src/constants/images/image 20.jpg";
import image6 from "../../../../src/constants/images/image 21.png";

import chef from "../../../../src/constants/images/chef.png";
import onion from "../../../../src/constants/images/onion.png";
import image27 from "../../../../src/constants/images/image 27.png";

const Chef = () => {
  return (
    <div>
      <img
        src={chef}
        alt="Chef"
        className="absolute top-[3234px] left-[650px] w-[660px] h-[597px] object-cover rounded-[15px]"
      />

      <div>
        <img
          src={image5}
          alt="Image 5"
          className="absolute top-[3401px] left-[1244px] w-[80px] h-[80px] rounded-[15px]"
        />
      </div>
      <div>
        <img
          src={onion}
          alt="onion"
          className="absolute top-[3331px] w-[50px] h-[50px] left-[1130px]"
        />
      </div>
      <div>
        <img
          src={image6}
          alt=""
          className=" absolute top-[3334px] w-[80px] h-[80px] left-[752px]"
        />
      </div>
      <div>
        <img
          src={image27}
          alt=""
          className="absolute top-[3657px] w-[50px] h-[50px] left-[684px]"
        />
      </div>
      <div className="absolute top-[3403px] left-[80px] w-[526px] h-[116px] font-inter font-semibold text-[48px] leading-[58.09px] tracking-[-0.04em]">
        Everyone can be a chef in their own kitchen
      </div>
      <p className="absolute top-[3543px] w-[508px] h-[84px] left-[80px] font-inter">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ab maxime
        nemo mollitia delectus ut quos quia minima exercitationem
      </p>
      <button className="absolute top-[3699px] h-[60px] w-[180px] left-[80px] rounded-[16px] bg-black text-white">
        Learn More
      </button>
    </div>
  );
};

export default Chef;
