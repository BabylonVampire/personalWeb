import { FC } from 'react'
import { taleContentRender } from '../utils/taleContentRender'
import { ITaleProps } from '../../types/ITaleProps.interface'
import './Waste.scss'
import Dunes from './components/Dunes/Dunes'

interface IWasteProps {
	tale: ITaleProps
}

const Waste: FC<IWasteProps> = ({ tale }) => {
	return (
		<div className="waste">
			<div className="waste__hero">
				<Dunes />
				<div className="waste__hero__leftPart" />
				<div className="waste__hero__rightPart" />
			</div>
			<div className="waste__container">
				{
					taleContentRender(tale)
				}
				<div className="epilogue" />
			</div>
		</div>
	)
}

export default Waste