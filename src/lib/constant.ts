import { TNavItem } from "../model/constant/TNavItem";
import {TMenuItem} from "../model/constant/TMenuItem";
import content1 from '../assets/img/menu/content 1.png'
import content2 from '../assets/img/menu/content 2.png'
import content3 from '../assets/img/menu/content 3.png'

export const PHONE = 79522467679
export const ADDRESS = 'г. Санкт-Петербург, проспект Медиков, 3'
export const NAV_LIST: TNavItem[] = [
  {name: 'Суши', path: '#'},
  {name: 'Роллы', path: '#'},
  {name: 'Поке', path: '#'},
  {name: 'Пицца', path: '#'},
  {name: 'Десерты', path: '#'},
  {name: 'Напитки', path: '#'},
]

export const MENU_MOCK: TMenuItem[] = [
  {
    view: content1,
    name: 'Суши кальмар',
    composition: [
      'рис',
      'нори',
      'креветка'
    ],
    weight: '40 гр',
    price: 129
  },
  {
    view: content2,
    name: 'Суши лосось',
    composition: [
      'рис',
      'нори',
      'угорь'
    ],
    weight: '40 гр',
    price: 109
  },
  {
    view: content3,
    name: 'Суши краб',
    composition: [
      'рис',
      'лосось',
    ],
    weight: '40 гр',
    price: 119
  },
  {
    view: content3,
    name: 'Суши краб',
    composition: [
      'рис',
      'лосось',
    ],
    weight: '40 гр',
    price: 119
  },
  {
    view: content3,
    name: 'Суши краб',
    composition: [
      'рис',
      'лосось',
    ],
    weight: '40 гр',
    price: 119
  },
  {
    view: content3,
    name: 'Суши краб',
    composition: [
      'рис',
      'лосось',
    ],
    weight: '40 гр',
    price: 119
  },
  {
    view: content3,
    name: 'Суши краб',
    composition: [
      'рис',
      'лосось',
    ],
    weight: '40 гр',
    price: 119
  },
  {
    view: content3,
    name: 'Суши краб',
    composition: [
      'рис',
      'лосось',
    ],
    weight: '40 гр',
    price: 119
  },
  {
    view: content3,
    name: 'Суши краб',
    composition: [
      'рис',
      'лосось',
    ],
    weight: '40 гр',
    price: 119
  },
  {
    view: content3,
    name: 'Суши краб',
    composition: [
      'рис',
      'лосось',
    ],
    weight: '40 гр',
    price: 119
  },
]
