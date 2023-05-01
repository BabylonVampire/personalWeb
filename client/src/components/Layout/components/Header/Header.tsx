import React, { FC } from 'react';
import './Header.scss';
import { Button } from 'antd';

interface IHeaderProps {
   anchors: {
      place: string,
      text: string,
   }[]
}

const Header: FC<IHeaderProps> = ({ anchors }) => (
   <div className='Header'>
      {
         anchors.map((anchor) => {
            return (
               <Button
                  type="text"
                  className='Anchor'
                  onClick={() => goToAnchor(anchor.place)}
               >
                  {anchor.text}
               </Button>
            )
         })
      }
   </div>
);

const goToAnchor = (anchor) => {
   return;
}

export default Header;
