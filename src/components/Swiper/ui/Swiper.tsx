import React from 'react';
import s from './Swiper.module.scss'
import sl1 from '../../../assets/img/swiper/sl1.png'
import sl2 from '../../../assets/img/swiper/sl2.png'
import sl3 from '../../../assets/img/swiper/sl3.png'

import {ReactComponent as Arrow} from '../../../assets/svg/arrow.svg'

const Swiper = () => {
  return (
    <div className={s.container}>
      <div className={s.arrowPrev}>
        <Arrow />
      </div>
      <div className={s.slider}>
        <img src={sl1} alt="slider"/>
        <img src={sl2} alt="slider"/>
        <img src={sl3} alt="slider"/>
      </div>
      <div className={s.arrowNext}>
        <Arrow />
      </div>
    </div>
  );
};

export default Swiper;
