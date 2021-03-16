import React from 'react';
import {Col, List } from 'antd';
import {useSelector} from 'react-redux';
import {ContentsWrapper, ContentsCardStyle01, ContentsListStyle01} from './MainPageContentsCSS';
import Link from "next/link";

const dummyPostNotice = [
	{
		id: 4,
		User: {
			id: 1,
			nickname: '미미벨라',
		},
		content: '[서울강남00의원] 피부과 12월 오픈 신입/경역집 모집',
		date : '2021.01.03',
		link : '#'
	},
	{
		id: 3,
		User: {
			id: 1,
			nickname: '미미벨라',
		},
		content: '[서울강남00의원] 피부과 12월 오픈 신입/경역집 모집',
		date : '2021.01.02',
		link : '#'
	},
	{
		id: 2,
		User: {
			id: 1,
			nickname: '미미벨라',
		},
		content: '[서울강남00의원] 피부과 12월 오픈 신입/경역집 모집',
		date : '2021.01.02',
		link : '#'
	},
];

const Element04_HireInfo = () => {
	return (
		<Col span={6}>
			<ContentsWrapper>
				<ContentsCardStyle01 title="실시간 채용정보" extra={<a href="#">더보기</a>}>
					<ContentsListStyle01
						dataSource={dummyPostNotice}
						renderItem={item => (
							<List.Item>
								<Link href={item.link}><a>{item.content}</a></Link>
							</List.Item>
						)}
					/>
				</ContentsCardStyle01>
			</ContentsWrapper>
		</Col>
	);
};

export default Element04_HireInfo;
