import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


const Page2 = () => {
  useEffect(() => {
    let initAnimation = () => {
      if (window.innerWidth > 480) {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.rotateText', {
          transform: 'rotateX(-70deg)',
          opacity: 0,
          duration: 1,
          stagger: 3,
          scrollTrigger: {
            trigger: '.rotateText',
            start: 'top 80%',
            end: 'top -320%',
            scrub: 5,
            markers: false,
          },
        });
      } else {
        // Kill all ScrollTriggers if screen width is <= 480px
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        gsap.set('.rotateText', { clearProps: 'all' });
      }
    };

    // Initial check when component mounts
    initAnimation();

    // Resize listener to re-evaluate the animation on screen size change
    window.addEventListener('resize', initAnimation);

    // Cleanup: remove resize listener and kill all ScrollTriggers on unmount
    return () => {
      window.removeEventListener('resize', initAnimation);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id='section2' className='bg-white text-center text-black p-20'>
      <h3 className='p2-1 text-gray-500 text-xl font-[anzo3]'>
        © Navneetprasad1709@gmail.com | Designed and Developed
      </h3>

      <div className='rotateText mt-6'>
        <h1 className='rtext text-[42vw] font-[anzo5] text-black uppercase leading-[35vw]'>
          IMPACTFUL
        </h1>
      </div>
      <div className='rotateText'>
        <h1 className='rtext2 text-[42vw] font-[anzo5] text-black uppercase leading-[35vw]'>
          design
        </h1>
      </div>
      <div className='rotateText'>
        <h1 className='rtext text-[42vw] font-[anzo5] text-black uppercase leading-[35vw]'>
          is the
        </h1>
      </div>
      <div className='rotateText'>
        <h1 className='rtext text-[42vw] font-[anzo5] text-black uppercase leading-[35vw]'>
          design
        </h1>
      </div>
      <div className='rotateText '>
        <h1 className='rtext2 text-[42vw] font-[anzo5] text-black uppercase leading-[35vw]'>
          that
        </h1>
      </div>
      <div className='rotateText'>
        <h1 className='rtext text-[42vw] font-[anzo5] text-black uppercase leading-[35vw]'>
          works!
        </h1>
      </div>
      <div className=''>
      <img className='  absolute astro ml-[63vw] m-[-30vw] h-[25vw]' src="https://static.wixstatic.com/media/11062b_4f092394da7646e2aaf05f5bf79f141af000.png/v1/fill/w_280,h_259,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/11062b_4f092394da7646e2aaf05f5bf79f141af000.png" alt="" />
      </div>
    </div>
  );
};

export default Page2;
