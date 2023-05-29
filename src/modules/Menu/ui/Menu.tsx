import React, {memo} from 'react';
import s from './Menu.module.scss'
import {ContentRow} from "../../../components/ContentRow";
import {MENU_MOCK} from "../../../lib/constant";
import { MenuItem } from '../../../components/MenuItem';

const Menu = () => {
  return (
    <div className={s.container}>
      <ContentRow title={'Суши'}>
        <div className={s.itemWrapper}>
          {MENU_MOCK.map((item, id) => <MenuItem key={id} {...item}/>)}
        </div>
      </ContentRow>
    </div>
  );
};

export default memo(Menu);
