import React, {memo} from 'react';
import s from './CartButton.module.scss'
import {ReactComponent as Cart} from "../../../../../assets/svg/cart.svg";
import {Badge} from "../../../../Badge";

const CartButton = () => {
  return (
    <div className={s.container}>
      <div className={s.cart}>
        <Cart />
        <Badge customClass={s.badge} count={10} />
      </div>
      <div className={s.etc}>
        <p>218 ₽</p>
        <p>2 товара</p>
      </div>
    </div>
  );
};

export default memo(CartButton);
