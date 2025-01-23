import React from "react";
import Oval from "../../../../../src/constants/images/Oval.jpg";
import Rectangle from "../../../../../src/constants/images/Rectangle.png";
import Like from "../../../../../src/constants/images/Like.png";
import Comments from "../../../../../src/constants/images/Comment.jpg";
import Shape from "../../../../../src/constants/images/Shape.jpg";
import Save from "../../../../../src/constants/images/Save.png";
import LikeInfo from "../../../../../src/constants/images/Likes Info.png";
import text from "../../../../../src/constants/images/text.png";
import instagram from "../../../../../src/constants/images/instagram.png";
import instagram2 from "../../../../../src/constants/images/instagram2.png";
import instagram3 from "../../../../../src/constants/images/instagram3.png";
import Button from "../Buttons/buttons";

const Instagram = () => {
  return (
    <div className="px-6 py-16">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-semibold">
          Check out @FoodieLand on Instagram
        </h2>
        <p className="text-[16px] mt-[24px] max-w-4xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          veritatis molestias expedita, dicta dolorum id. Quaerat dolorum fugiat
          a. Sequi quas quos quasi excepturi aspernatur totam vero aliquid atque
          sunt!
        </p>
      </div>

      <div className="flex justify-between space-x-6">
        <div className="w-[290px]">
          <div className="bg-white p-2 rounded-lg flex items-center mb-4">
            <img src={Oval} alt="Profile" className="w-[25px] h-[25px]" />
            <p className="ml-2 text-sm">FoodieLand</p>
          </div>
          <img
            src={Rectangle}
            alt="Instagram Post"
            className="w-full h-[290px] object-cover rounded-lg mb-4"
          />
          <div className="bg-white p-2 rounded-b-lg">
            <div className="flex justify-between items-center">
              <img src={Like} alt="Like" className="w-[22px] h-[18px]" />
              <img src={Comments} alt="Comment" className="w-[22px] h-[18px]" />
              <img src={Shape} alt="Shape" className="w-[22px] h-[18px]" />
              <img src={Save} alt="Save" className="w-[22px] h-[18px]" />
            </div>
            <div className="mt-2">
              <img
                src={LikeInfo}
                alt="Like Info"
                className="w-[204px] h-[17px]"
              />
              <img src={text} alt="Text" className="w-[267px] h-[28px]" />
            </div>
          </div>
        </div>

        <div className="w-[290px]">
          <div className="bg-white p-2 rounded-lg flex items-center mb-4">
            <img src={Oval} alt="Profile" className="w-[25px] h-[25px]" />
            <p className="ml-2 text-sm">FoodieLand</p>
          </div>
          <img
            src={instagram}
            alt="Instagram Post"
            className="w-full h-[290px] object-cover rounded-lg mb-4"
          />
          <div className="bg-white p-2 rounded-b-lg">
            <div className="flex justify-between items-center">
              <img src={Like} alt="Like" className="w-[22px] h-[18px]" />
              <img src={Comments} alt="Comment" className="w-[22px] h-[18px]" />
              <img src={Shape} alt="Shape" className="w-[22px] h-[18px]" />
              <img src={Save} alt="Save" className="w-[22px] h-[18px]" />
            </div>
            <div className="mt-2">
              <img
                src={LikeInfo}
                alt="Like Info"
                className="w-[204px] h-[17px]"
              />
              <img src={text} alt="Text" className="w-[267px] h-[28px]" />
            </div>
          </div>
        </div>

        <div className="w-[290px]">
          <div className="bg-white p-2 rounded-lg flex items-center mb-4">
            <img src={Oval} alt="Profile" className="w-[25px] h-[25px]" />
            <p className="ml-2 text-sm">FoodieLand</p>
          </div>
          <img
            src={instagram2}
            alt="Instagram Post"
            className="w-full h-[290px] object-cover rounded-lg mb-4"
          />
          <div className="bg-white p-2 rounded-b-lg">
            <div className="flex justify-between items-center">
              <img src={Like} alt="Like" className="w-[22px] h-[18px]" />
              <img src={Comments} alt="Comment" className="w-[22px] h-[18px]" />
              <img src={Shape} alt="Shape" className="w-[22px] h-[18px]" />
              <img src={Save} alt="Save" className="w-[22px] h-[18px]" />
            </div>
            <div className="mt-2">
              <img
                src={LikeInfo}
                alt="Like Info"
                className="w-[204px] h-[17px]"
              />
              <img src={text} alt="Text" className="w-[267px] h-[28px]" />
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-[290px]">
          <div className="bg-white p-2 rounded-lg flex items-center mb-4">
            <img src={Oval} alt="Profile" className="w-[25px] h-[25px]" />
            <p className="ml-2 text-sm">FoodieLand</p>
          </div>
          <img
            src={instagram3}
            alt="Instagram Post"
            className="w-full h-[290px] object-cover rounded-lg mb-4"
          />
          <div className="bg-white p-2 rounded-b-lg">
            <div className="flex justify-between items-center">
              <img src={Like} alt="Like" className="w-[22px] h-[18px]" />
              <img src={Comments} alt="Comment" className="w-[22px] h-[18px]" />
              <img src={Shape} alt="Shape" className="w-[22px] h-[18px]" />
              <img src={Save} alt="Save" className="w-[22px] h-[18px]" />
            </div>
            <div className="mt-2">
              <img
                src={LikeInfo}
                alt="Like Info"
                className="w-[204px] h-[17px]"
              />
              <img src={text} alt="Text" className="w-[267px] h-[28px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Button
          className="w-[229px] h-[60px] bg-black text-white rounded-[10px]"
          text="Visit our Instagram"
        />
      </div>
    </div>
  );
};

export default Instagram;
