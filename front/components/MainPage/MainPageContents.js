import React from 'react';
import {Row, Col} from 'antd';
import {useSelector} from 'react-redux';
import {ContentsWrapper, ContentsCardStyle00, ContentsImageBanner} from './MainPageContentsCSS';
import Link from "next/link";

const MainPageContents = () => {
	const {isLoggedIn} = useSelector(state => state.user);
	const {mainPosts} = useSelector(state => state.post);

	return (
		<Row style={{marginBottom: 50}} gutter={10}>
			<Col span={12}>
				<ContentsWrapper>
					<Link href="/"><a><ContentsImageBanner src='/assets/BannerContents.png'/></a></Link>
				</ContentsWrapper>
			</Col>
			<Col span={6}>
				<ContentsWrapper>
					<ContentsCardStyle00 title="새소식" extra={<a href="#">더보기</a>}>
						<p>Card content</p>
						<p>Card content</p>
						<p>Card content</p>
					</ContentsCardStyle00>
				</ContentsWrapper>
			</Col>
			<Col span={6}>
				<ContentsWrapper>
					<ContentsCardStyle00 title="회원 서비스" extra={<><a href="#">회원가입</a><a href="#">비밀번호 찾기</a></>}>
						<p>Card content</p>
						<p>Card content</p>
						<p>Card content</p>
					</ContentsCardStyle00>
				</ContentsWrapper>
			</Col>
		</Row>
	);
};

export default MainPageContents;
