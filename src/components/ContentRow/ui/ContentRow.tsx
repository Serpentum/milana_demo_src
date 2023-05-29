import React, {FC, PropsWithChildren} from 'react';
import s from './ContentRow.module.scss'


export interface IContentRowProps {
  title: string
}

const ContentRow: FC<PropsWithChildren<IContentRowProps>> = ({children, title}) => {
  return (
    <div className={s.container}>
      <h3 className={s.title}>{title}</h3>
      {children}
    </div>
  );
};

export default ContentRow;
