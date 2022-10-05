import React, { useEffect, useRef } from 'react'
import FooterImg from '../Asset/Images/footer444.png';
import lottie from 'lottie-web';

function Footer() {

  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      render: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../Asset/Lottie/walking.json')
    })

    lottie.loadAnimation({
      container: container.current,
      render: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../Asset/Lottie/skate.json')
    })
  }, [])


  return (
    <>
      <div className=" container" style={{ height: 80, position: 'absolute', left: '10' }} ref={container}></div>
      <div className=" container" style={{ height: 80, position: 'absolute' }} ref={container}></div>
      <img src={FooterImg} width={'100%'}></img>
    </>
  )
}

export default Footer