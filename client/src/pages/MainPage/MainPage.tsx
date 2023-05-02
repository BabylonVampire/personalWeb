import React, { useEffect } from 'react';
import Head from './components/Head/Head.tsx';
import Body from './components/Body/Body.tsx';
import Item from './components/Body/components/Item/Item.tsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const MainPage = () => {
   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.fromTo('.Head', { opacity: 1 },
         {
            opacity: 0,
            scrollTrigger: {
               trigger: '.Head',
               start: 'center',
               end: 'bottom',
               scrub: true,
            }
         }
      );

      let items = gsap.utils.toArray<HTMLElement>('.item__contaner')
      let images = gsap.utils.toArray<HTMLElement>('.item_image')

      items.forEach(item => {
         gsap.fromTo(item, { opacity: 0, x: (+item.id.slice(-1) % 2 === 0) ? 40: -40, y: 30 },
            {
               opacity: 1,
               x: 0,
               y: 0,
               scrollTrigger: {
                  start: '-500',
                  end: '-300',
                  trigger: item,
                  scrub: true,
               }
            }
         );
      })

      images.forEach(image => {
         gsap.fromTo(image, {top: '-70px'}, {
            top: '70px',
            scrollTrigger: {
               start: '-200',
               end: 'bottom',
               trigger: image,
               scrub: true
            }
         })
      })
   }, [])
   return (
      <div className='mainPage'>
         <Head title={'Добро пожаловать!'} />
         <Body
            gallery_items={[
               <Item title="Рыбак" description='asd' image="/src/pics/tale2.jpg" position={true} index={1} />,
               <Item title="Башня" description='asd' image="/src/pics/tale2.jpg" position={false} index={2} />,
               <Item title="Рыцарь" description='asd' image="/src/pics/tale2.jpg" position={true} index={3} />,
               <Item title="asd" description='asd' image="/src/pics/tale2.jpg" position={false} index={4} />,
               <Item title="asd" description='asd' image="/src/pics/tale2.jpg" position={true} index={5} />,
            ]}
         />
      </div>
   )
};

export default MainPage;
