import React, {memo} from 'react';
import s from './HeaderNav.module.scss'
import {NAV_LIST} from "../../../lib/constant";
import {HeaderNavItem} from "../../../components/HeaderNavItem";

const HeaderNav = () => {

  return (
    <div className={s.container}>
      {NAV_LIST.map((el, id) => <HeaderNavItem key={id} {...el}/>)}
    </div>
  );
};

export default memo(HeaderNav);
