import React, {useEffect, useState} from 'react';
import s from './MenuItem.module.scss'
import {TMenuItem} from "../../../model/constant/TMenuItem";
import {Button} from "../../UI/Buttons";
import { ButtonWithProduct } from '../../UI/Buttons/ButtonWithProduct';

const MenuItem = ({view, name, composition, weight, price}: TMenuItem) => {

  const [itemsToAdd, setItemsToAdd] = useState(0)

  const handleClick = () => {
    setItemsToAdd(p => p + 1)
  }

  useEffect(() => {
    console.log(itemsToAdd)
  }, [itemsToAdd])

  return (
    <div className={s.container}>
      <div className={s.imgWrapper}>
        <img src={view} alt={name}/>
      </div>
      <p className={s.title}>{name}</p>
      <div className={s.contentWrapper}>
        <p>Состав: <span>{composition.join(', ')}</span></p>
        <p>Вес: <span>{weight}</span></p>
      </div>
      <div className={s.controlWrapper}>
        <p>{price} ₽</p>
        {
          itemsToAdd > 0
            ? <ButtonWithProduct count={itemsToAdd} itemState={setItemsToAdd}/>
            : <Button onClick={handleClick}>
                В корзину
              </Button>
        }
      </div>
    </div>
  );
};

export default MenuItem;
