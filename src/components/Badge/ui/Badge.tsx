import React, {useEffect, useState} from 'react';
import s from './Badge.module.scss'
import clsx from "clsx";

export interface IBadgeProps {
  customClass: string
  count: number
}
const Badge = ({customClass, count}: IBadgeProps) => {
  const [localCount, setLocalCount] = useState(count || 0)

  useEffect(() => {
    setLocalCount(count > 99 ? 99 : count)
  }, [count])

  return localCount
    ? (
      <div className={clsx(s.container, customClass)}>
        +{count}
      </div>
    ) : <></>
};

export default Badge;
