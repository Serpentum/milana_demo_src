import React, {memo, useMemo} from 'react';
import s from './Header.module.scss'
import { ReactComponent as Logo } from '../../assets/svg/logo.svg'
import { ReactComponent as Profile } from '../../assets/svg/profile.svg'
import HeaderNav from "../../modules/HeaderNav/ui/HeaderNav";
import {convertToPhone} from "../../lib/TextConverter";
import {ADDRESS, PHONE} from "../../lib/constant";
import { CartButton } from '../../components/UI/Buttons';
import clsx from "clsx";

export interface IHeaderProps {
  isScrolled: boolean
}
const Header = ({isScrolled}: IHeaderProps) => {
  const phone = useMemo(() => convertToPhone(PHONE), [])
  return (
    <div className={clsx(s.container, {
      [s.scrolled]: isScrolled
    })}>
      <div className={s.leftSide}>
        <Logo />
        <HeaderNav />
      </div>
      <div className={s.rightSide}>
        <p>{phone}</p>
        <p className={s.address}>{ADDRESS}</p>
        <div className={s.profile}>
          <Profile />
        </div>
        <CartButton />
      </div>
    </div>
  );
};

export default memo(Header);
