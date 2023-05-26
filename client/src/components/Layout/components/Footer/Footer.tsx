import { FC } from 'react';
import './Footer.scss';
import Divider from './components/Divider/Divider';

interface IFooterProps {
	people: string[];
	email: string;
	phone: string;
}

const Footer: FC<IFooterProps> = ({ people, email, phone }) => (
	<div className='footer'>
		<div className="footer__people">
			<div className="footer__people__title">
				Причастные
			</div>
			<Divider />
			<div className="footer__people__container">
				{
					people.map((person) => {
						return (
							<div className="person" key={person}>
								{person}
							</div>
						)
					})
				}
			</div>
		</div>
		<div className="footer__contacts">
			<div className="footer__contacts__title">
				Контакты
			</div>
			<Divider />
			<div className="footer__contacts__container">
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
