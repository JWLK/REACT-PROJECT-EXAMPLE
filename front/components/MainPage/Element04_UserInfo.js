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
		content: '강00 (여, 22세) - 간호조무사 지원합니다',
		date : '2021.01.03',
		link : '#'
	},
	{
		id: 3,
		User: {
			id: 1,
			nickname: '미미벨라',
		},
		content: '박00 (여, 27세) - 맡은일에 최선을 다하겠습니다',
		date : '2021.01.02',
		link : '#'
	},
	{
		id: 2,
		User: {
			id: 1,
			nickname: '미미벨라',
		},
		content: '이00 (여, 24세) - 피부사 지원합니다',
		date : '2021.01.02',
		link : '#'
	},
];

const Element04_HireInfo = () => {
	return (
		<Col span={6}>
			<ContentsWrapper>
				<ContentsCardStyle01 title="실시간 인재정보" extra={<a href="#">더보기</a>}>
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
