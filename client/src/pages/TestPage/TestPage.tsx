import React from 'react';
import './TestPage.scss';
import BreakingLines from './testComponents/BreakingLines/BreakingLines';

const TestPage = () => {
	return (
		<div className="testPage">
			<BreakingLines text="Много лет тому назад жил на земле архитектор. Славился он красотой и изощренной тонкостью творений своих. Всякий, кто на них глядел, впадал в трепет перед формами, что складывались в здания." />
		</div>
	);
};

export default TestPage;
