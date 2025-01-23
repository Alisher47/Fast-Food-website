import React from 'react';
import group2 from '../../../../constants/images/group2.png';
import DetailHeader from './detailHeader';

const RecipeHeader = () => {
  const detail = {
    title: "Health Japanese Food Rice",
    imageSrc: group2
  };

  return (
    <div className="px-4 py-6">
      <DetailHeader
        title={detail.title}
        imageSrc={detail.imageSrc}
      />
    </div>
  );
};

export default RecipeHeader;
