import React, { FC } from 'react';
import './Footer.scss';

interface IFooterProps {
   email: string;
   phone: string;
   logo: string;
}

const Footer: FC<IFooterProps> = ({ email, phone, logo }) => (
   <div
      className='Footer'
   >
      <p>
         {email}
      </p>
      <p>
         {phone}
      </p>
      <p>
         {logo}
      </p>
   </div>
);

export default Footer;
