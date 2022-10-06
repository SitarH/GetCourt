import React, { useEffect, useRef } from 'react'
import FooterImg from '../Asset/Images/footer444.png';
import lottie from 'lottie-web';

function Footer() {

  const container = useRef(null);
  const containertwo = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      render: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../Asset/Lottie/walking2.json')
    })

    lottie.loadAnimation({
      container: containertwo.current,
      render: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../Asset/Lottie/skate4.json')
    })
  }, [])


  return (
    <footer style={{position: 'absolute', bottom: '0', width: '100%'}}>
      <div className=" container" style={{ height: 80, position: 'absolute', transform: 'translate(85vw, 5vh)'}} ref={container}></div>
      <div className=" container" style={{ height: 80, position: 'absolute', transform: 'translate(10vw, 11vh)' }} ref={containertwo}></div>
      <img src={FooterImg} width={'100%'}></img>
    </footer>
  )
}

export default Footer