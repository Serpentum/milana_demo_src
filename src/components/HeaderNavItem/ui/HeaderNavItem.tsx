import React, {FC} from 'react';
import s from './HeaderNavItem.module.scss'
import {TNavItem} from "../../../model/constant/TNavItem";

const HeaderNavItem: FC<TNavItem> = ({name, path}) => {
  return (
    <div className={s.container}>
      <a href={path}>{name}</a>
    </div>
  );
};

export default HeaderNavItem;
