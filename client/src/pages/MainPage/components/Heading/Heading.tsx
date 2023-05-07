import { FC } from 'react'

interface IHeadingProps {
	heading: string;
}

const Heading: FC<IHeadingProps> = ({heading}) => {
  return (
	<div className='heading'>
		<div className="heading__text">
			{heading}
		</div>
	</div>
  )
}

export default Heading;