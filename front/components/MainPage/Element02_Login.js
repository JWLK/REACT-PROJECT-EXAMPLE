import React from 'react';
import {Row, Col} from 'antd';
import {ContentsWrapper, ContentsCardStyle00, ContentsLoginImage} from './MainPageContentsCSS';
import Link from "next/link";

const Element02_Login = () => {
	return (
		<Col span={6}>
			<ContentsWrapper>
				<ContentsCardStyle00 title="회원 서비스" extra={<><a href="#">회원가입</a><a href="#">비밀번호 찾기</a></>}>
					<Row gutter={10}>
						<Col span={12} style={{height:140, overflow: 'hidden', borderRightWidth: 1, borderRightStyle: 'solid', borderRightColor: '#EEEEEE'}}>
							<Link href="#"><a><ContentsLoginImage src='/assets/main_login_personal.svg'/></a></Link>
						</Col>
						<Col span={12} style={{height:140, overflow: 'hidden'}}>
							<Link href="#"><a><ContentsLoginImage src='/assets/main_login_company.svg'/></a></Link>
						</Col>
					</Row>
				</ContentsCardStyle00>
			</ContentsWrapper>
		</Col>
	);
};

export default Element02_Login;
