import React from 'react';
import {Col, List } from 'antd';
import {useSelector} from 'react-redux';
import {ContentsWrapper, ContentsCardStyle00, ContentsListStyle00} from './MainPageContentsCSS';
import Link from "next/link";

const dummyPostNotice = [
	{
		id: 4,
		User: {
			id: 1,
			nickname: '미미벨라',
		},
		content: '안녕하세요. 미미벨라에 오신것을 환영 …',
		date : '2021.01.03',
		link : '#'
	},
	{
		id: 3,
		User: {
			id: 1,
			nickname: '미미벨라',
		},
		content: '운영정책 및 서비스 업데이트 정보 공지',
		date : '2021.01.02',
		link : '#'
	},
	{
		id: 2,
		User: {
			id: 1,
			nickname: '미미벨라',
		},
		content: '[이벤트] 가입 즉시 프리미엄 서비스 …',
		date : '2021.01.02',
		link : '#'
	},
	{
		id: 1,
		User: {
			id: 1,
			nickname: '미미벨라',
		},
		content: '[이벤트] 이력서 작성 추첨 이벤트',
		date : '2021.01.01',
		link : '#'
	},
];

const Element01_Notice = () => {
	return (
		<Col span={6}>
			<ContentsWrapper>
				<ContentsCardStyle00 title="새소식" extra={<a href="#">더보기</a>}>
					<ContentsListStyle00
						dataSource={dummyPostNotice}
						renderItem={item => (
							<List.Item
								extra={
									<div className={'extra'}>{item.date}</div>
								}>
								<Link href={item.link}><a>{item.content}</a></Link>
							</List.Item>
						)}
					/>
				</ContentsCardStyle00>
			</ContentsWrapper>
		</Col>
	);
};

export default Element01_Notice;
