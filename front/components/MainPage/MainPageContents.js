import React from 'react';
import {Row, Col, Carousel, List} from 'antd';
import {useSelector} from 'react-redux';
import {
	ContentsWrapper,
	ContentsImageBanner,
	ContentsCardStyle00,
	ContentsListStyle00,
	ContentsLoginImage
} from './MainPageContentsCSS';
import Link from "next/link";
import Element00_Banner from "./Element00_Banner";
import Element01_Notice from "./Element01_Notice";
import Element02_Login from "./Element02_Login";

const dummyPostNotice = [
	{
		id: 4,
		User: {
			id: 1,
			nickname: '미미벨라',
		},
		content: '안녕하세요. 미미벨라에 오신것을 환영 …',
		date: '2021.01.03',
		link: '#'
	},
	{
		id: 3,
		User: {
			id: 1,
			nickname: '미미벨라',
		},
		content: '운영정책 및 서비스 업데이트 정보 공지',
		date: '2021.01.02',
		link: '#'
	},
	{
		id: 2,
		User: {
			id: 1,
			nickname: '미미벨라',
		},
		content: '[이벤트] 가입 즉시 프리미엄 서비스 …',
		date: '2021.01.02',
		link: '#'
	},
	{
		id: 1,
		User: {
			id: 1,
			nickname: '미미벨라',
		},
		content: '[이벤트] 이력서 작성 추첨 이벤트',
		date: '2021.01.01',
		link: '#'
	},
];

const MainPageContents = () => {
	const {isLoggedIn} = useSelector(state => state.user);
	const {mainPosts} = useSelector(state => state.post);

	return (
		<>
			<Row style={{marginBottom: 20}} gutter={10}>
				<Element00_Banner/>
				<Element01_Notice/>
				<Element02_Login/>
			</Row>
			<ContentsWrapper style={{marginBottom: 50, background: '#fff' }}>
				<Row gutter={10}>
					<Col span={11} style={{height: 150}}>
						<div style={{margin: '40px 70px'}}>
							<img src='/assets/Hire-Info-Text-obj.svg'/>
						</div>
					</Col>
					<Col span={13} style={{height: 150}}>
						<Row>
							<Col span={4} style={{margin: 10}}>
								<Link href="#"><a><img src='/assets/ic_nurse.svg'/></a></Link>
							</Col>
							<Col span={4} style={{margin: 10}}>
								<Link href="#"><a><img src='/assets/ic_skinmanager.svg'/></a></Link>
							</Col>
							<Col span={4} style={{margin: 10}}>
								<Link href="#"><a><img src='/assets/ic_communicator.svg'/></a></Link>
							</Col>
							<Col span={4} style={{margin: 10}}>
								<Link href="#"><a><img src='/assets/ic_maketer.svg'/></a></Link>
							</Col>
							<Col span={4} style={{margin: 10}}>
								<Link href="#"><a><img src='/assets/ic_etc.svg'/></a></Link>
							</Col>
						</Row>
					</Col>
				</Row>
			</ContentsWrapper>
		</>
	);
};

export default MainPageContents;
