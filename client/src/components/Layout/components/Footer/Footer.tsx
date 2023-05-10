import { FC } from 'react';
import './Footer.scss';
import Divider from './components/Divider/Divider';

interface IFooterProps {
   people: string[];
   email: string;
   phone: string;
}

const Footer: FC<IFooterProps> = ({ people, email, phone }) => (
   <div className='Footer'>
      <div className="people_container">
         <div className="people_title">
            причатные
         </div>
         <Divider />
         <div className="people">
            {
               people.map((person) => {
                  return (
                     <div className="person">
                        {person}
                     </div>
                  )
               })
            }
         </div>
      </div>
      <div className="contacts_conteiner">
         <div className="contacts_title">
            контакты
         </div>
         <Divider />
         <div className="contacts">
            <div className="phone">
               {phone}
            </div>
            <div className="email">
               {email}
            </div>
            <div className="logo" />
         </div>
      </div>
   </div>
);

export default Footer;
