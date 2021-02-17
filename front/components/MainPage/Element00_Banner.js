import React from 'react';
import {Col, Carousel} from 'antd';
import {ContentsWrapper, ContentsImageBanner} from './MainPageContentsCSS';
import Link from "next/link";


const Element00_Banner = () => {
	return (
		<Col span={12}>
			<Carousel dotPosition={"right"} autoplay>
				<ContentsWrapper>
					<Link href="#"><a><ContentsImageBanner src='/assets/BannerContents.png'/></a></Link>
				</ContentsWrapper>
				<ContentsWrapper>
					<Link href="#"><a><ContentsImageBanner src='/assets/BannerContents.png'/></a></Link>
				</ContentsWrapper>
			</Carousel>
		</Col>
	);
};

export default Element00_Banner;
