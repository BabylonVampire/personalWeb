import './Dunes.scss'

const Dunes = () => {
	return (
		<svg className="dunes"
			viewBox="0 24 150 28"
			preserveAspectRatio="none">
			<defs>
				<path id="gentle-dune"
					d="M-160 44c30 0 
						58-18 88-18s
						58 18 88 18 
						58-18 88-18 
						58 18 88 18
						v44h-352z"
				/>
			</defs>
			<g className="parallax-dune">
				<use xlinkHref="#gentle-dune" x="150" y="6" fill="rgb(0,0,0)" />
				<use xlinkHref="#gentle-dune" x="100" y="3" fill="rgb(2,0,36)" />
				<use xlinkHref="#gentle-dune" x="50" y="0" fill="rgb(14 14 80)" />
			</g>
		</svg>

	)
}

export default Dunes;