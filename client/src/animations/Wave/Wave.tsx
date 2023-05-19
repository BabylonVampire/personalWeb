import './Wave.scss';

function Wave() {
	return (
		<svg className="editorial"
			viewBox="0 24 150 28"
			preserveAspectRatio="none">
			<defs>
				<path id="gentle-wave"
					d="M-160 44c30 0 
						58-18 88-18s
						58 18 88 18 
						58-18 88-18 
						58 18 88 18
						v44h-352z"
				/>
			</defs>
			<g className="parallax">
				<use xlinkHref="#gentle-wave" x="50" y="6" fill="rgb(0,0,0)" />
				<use xlinkHref="#gentle-wave" x="50" y="3" fill="rgb(2,0,36)" />
				<use xlinkHref="#gentle-wave" x="50" y="0" fill="rgb(14 14 80)" />
			</g>
		</svg>

	)
}

export default Wave