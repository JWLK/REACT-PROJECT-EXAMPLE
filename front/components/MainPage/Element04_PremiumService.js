import React from 'react';
import {Row, Col} from 'antd';
import {ContentsWrapper, ContentsServiceImage} from './MainPageContentsCSS';
import Link from "next/link";

const Element04_PremiumService = () => {
	return (
		<Col span={6}>
			<ContentsWrapper>
				<Link href="#"><a><ContentsServiceImage src='/assets/PremiumService-obj.svg'/></a></Link>
			</ContentsWrapper>
		</Col>
	);
};

export default Element04_PremiumService;
