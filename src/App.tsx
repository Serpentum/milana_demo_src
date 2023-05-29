import React, {useEffect, useState} from 'react';
import {Content, Header} from "./layout";
import s from './main.module.scss'
import './assets/styles/vars.scss'
import './assets/styles/fonts.scss'

function App() {

  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    if(isScrolled && window.scrollY > 0) return
    if(window.scrollY > 0) {setIsScrolled(true)}
    else {setIsScrolled(false)}
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={s.mainContainer}>
      <Header isScrolled={isScrolled}/>
      <Content />
    </div>
  );
}

export default App;
