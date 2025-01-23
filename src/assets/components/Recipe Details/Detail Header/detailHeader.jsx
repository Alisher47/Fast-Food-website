import React from 'react'
import PrinterSvg from '../../../../constants/icons/printer.svg';
import ShareSvg from '../../../../constants/icons/Share.svg';
import group from '../../../../constants/images/group.png';
import DetailCard from './detailCard';

const detailHeader = ({title, imageSrc}) => {
  return (
    <div>
       <div className=' w-[700px] h-[77px] top-[200px] left-[80px] font-inter font-semibold text-[46px]'>
        <h1>{title}</h1>
       </div>
       <div>
        <img src={group} alt="" 
        className=' w-[700px] h-[50px] top-[315px] left-[80px]'/>
       </div>
       <div className=' w-[80px] h-[80px] top-[250px] left-[1168px] bg-[#E7FAFE] rounded-[50px]'>
             <img src={PrinterSvg} 
             alt=""
             className=' w-[24px] h-[24px] top-[28px] left-[28px]'
             />
       </div>
       <div className=' w-[80px] h-[80px] top-[250px] left-[1280px] bg-[#E7FAFE] rounded-[50px]'>
             <img src={ShareSvg} 
             alt=""
             className=' w-[24px] h-[24px] top-[28px] left-[28px]'
             />
       </div>
       <div className=' w-[840px] h-[600px] top-[429px] left-[80px] '>
          <img src={imageSrc} alt="" />
       </div>
     <DetailCard />
    </div>
  )
}

export default detailHeader
