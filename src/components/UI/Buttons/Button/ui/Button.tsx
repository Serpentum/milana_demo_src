import React, {FC, PropsWithChildren} from 'react';
import s from './Button.module.scss'

export interface IButtonProps {
  onClick: (e: React.MouseEvent) => void
}
const Button: FC<PropsWithChildren<IButtonProps>> = ({children, onClick}) => {
  return (
    <div className={s.container} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
