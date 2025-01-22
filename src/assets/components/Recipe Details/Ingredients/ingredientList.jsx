import React from "react";

const ingredientList = ({listData}) => {
  return (
    <div>
      <div className="absolute top-[1273px] w-[184px] h-[44px] left-[80px] font-inter font-semibold text-[36px] ">
        <h3>Ingredients</h3>
        <div className="absolute w-[144px] h-[29px] top-[100px] text-[20px] font-inter font-semibold">
          <h1>For main dish</h1>
          <div className="absolute w-[206px] h-[28px] top-[33px] left-[128px] text-[16px] font-inter font-semibold"></div>
        </div>
      </div>
      <div className="absolute top-[1450px] w-[24px] h-[24px]">
            <input type="checkbox" name="checkbox" id="" 
            />
          </div>
          <div className="absolute top-[1550px] w-[24px] h-[24px]">
            <input type="checkbox" name="checkbox" id="" 
            />
          </div>
          <div className="absolute left-[170px] top-[1450px] text-[18px]">
          {listData}
          </div>
          <div className="absolute left-[170px] top-[1550px] text-[18px]">
          {listData}
          </div>
          <input type="checkbox" name="checkbox" id="" className="absolute top-[1660px] left-[120px]"/>
          <div className="absolute left-[170px] top-[1650px] text-[18px]">
          {listData}
          </div>
          <input type="checkbox" name="checkbox" id="" className="absolute top-[1780px] left-[120px]"/>
          <div className="absolute left-[170px] top-[1779px] text-[18px]">
          {listData}
          </div>
    </div>
  );
};

export default ingredientList;
