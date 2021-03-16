import React from 'react';
import {Row, Col} from 'antd';
import {ContentsWrapper, ContentsQuickButtonImage} from './MainPageContentsCSS';
import Link from "next/link";

const Element04_PremiumService = () => {
	return (
		<Col span={6}>
			<ContentsWrapper style={{margin : '0 0 10px 0'}}>
				<Link href="#"><a><ContentsQuickButtonImage src='/assets/ResumeInfo_Apply-obj.svg'/></a></Link>
			</ContentsWrapper>
			<ContentsWrapper>
				<Link href="#"><a><ContentsQuickButtonImage src='/assets/HireInfo_Apply-obj.svg'/></a></Link>
			</ContentsWrapper>
		</Col>
	);
};

export default Element04_PremiumService;
