import { FC } from 'react';
import Divider from './components/Divider/Divider';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import './Footer.scss';

interface IFooterProps {
	people: string[];
	email: string;
	phone: string;
}

const Footer: FC<IFooterProps> = ({ people, email, phone }) => {
	const gitHubLink = 'https://github.com/BabylonVampire';
	const telegramLink = 'https://t.me/BabylonVampire';
	const emailLink = '';

	return (
		<div className="footer">
			<div className="contactsAndPeopleContainer">
				<div className="footer__people">
					<div className="footer__people__title">Причастные</div>
					<Divider />
					<div className="footer__people__container">
						{people.map((person) => {
							return (
								<div className="person" key={person}>
									{person}
								</div>
							);
						})}
					</div>
				</div>
				<div className="footer__contacts">
					<div className="footer__contacts__title">Контакты</div>
					<Divider />
					<div className="iconsContainer">
						<a href={`${telegramLink}`}>
							<TelegramIcon
								sx={{
									fontSize: {
										xs: '1.5rem',
										md: '2rem',
										lg: '2.5rem',
										xl: '3rem',
									},
								}}
							/>
						</a>
						<a href={`${gitHubLink}`}>
							<GitHubIcon
								sx={{
									fontSize: {
										xs: '1.5rem',
										md: '2rem',
										lg: '2.5rem',
										xl: '3rem',
									},
								}}
							/>
						</a>
						<a href={`${emailLink}`}>
							<AlternateEmailIcon
								sx={{
									fontSize: {
										xs: '1.5rem',
										md: '2rem',
										lg: '2.5rem',
										xl: '3rem',
									},
								}}
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
