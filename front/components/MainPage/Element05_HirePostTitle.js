import React from 'react';
import {Row, Col} from 'antd';
import {ContentsWrapper} from './MainPageContentsCSS';
import Link from "next/link";

const Element05_HirePostTitle = () => {
	return (
		<ContentsWrapper style={{padding: 20, marginBottom: 20, background: '#fff' }}>
			<Row gutter={10}>
				<div style={{margin: '0 auto'}}>
					<img src='/assets/PremiumHireTItle-obj.svg'/>
				</div>
			</Row>
		</ContentsWrapper>
	);
};

export default Element05_HirePostTitle;
