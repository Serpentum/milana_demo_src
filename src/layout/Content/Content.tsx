import React, {memo} from 'react';
import s from './Content.module.scss'
import Swiper from "../../components/Swiper/ui/Swiper";
import {Menu} from "../../modules/Menu";

const Content = () => {
  return (
    <div className={s.container}>
      <Swiper />
      <Menu />
    </div>
  );
};

export default memo(Content);
