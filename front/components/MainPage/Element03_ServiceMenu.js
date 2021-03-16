import React from 'react';
import {Row, Col} from 'antd';
import {ContentsWrapper} from './MainPageContentsCSS';
import Link from "next/link";

const Element03_ServiceMenu = () => {
	return (
		<ContentsWrapper style={{marginBottom: 20, background: '#fff' }}>
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
	);
};

export default Element03_ServiceMenu;
