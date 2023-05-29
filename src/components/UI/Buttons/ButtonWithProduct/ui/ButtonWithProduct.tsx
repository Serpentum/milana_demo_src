import React from 'react';
import s from './ButtonWithProduct.module.scss'
import {ReactComponent as Cart} from "../../../../../assets/svg/cart.svg";


export interface IButtonWithProductProps {
  count: number
  itemState: React.Dispatch<React.SetStateAction<number>>
}
const ButtonWithProduct = ({count, itemState}: IButtonWithProductProps) => {

  const handleAdd = () => itemState(p => p + 1)
  const handleRemove = () => itemState(p => p - 1)

  return (
    <div className={s.container}>
      <div className={s.control}>
        <button onClick={handleRemove}>
          -
        </button>
        {count}
        <button onClick={handleAdd}>
          +
        </button>
      </div>
      <button className={s.toCart}>
        <Cart />
      </button>
    </div>
  );
};

export default ButtonWithProduct;
