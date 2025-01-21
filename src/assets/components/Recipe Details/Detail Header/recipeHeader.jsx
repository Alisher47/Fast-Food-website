import React from 'react';
import group2 from '../../../../constants/images/group2.png';
import DetailHeader from './detailHeader'; 

const RecipeHeader = () => {
  const details = [
    {
      title: "Health Japanese Food Rice",
      imageSrc: group2
    }
  ];

  return (
    <div>
      {details.map((detail, index) => {
        return (
          <DetailHeader
            key={index}
            title={detail.title}
            imageSrc={detail.imageSrc}
          />
        );
      })}
    </div>
  );
};

export default RecipeHeader;
