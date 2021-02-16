import React from 'react';
import {Row, Col} from 'antd';
import {useSelector} from 'react-redux';
import {ContentsWrapper, ContentsCard} from './MainPageContentsCss';

const MainPageContents = () => {
    const {isLoggedIn} = useSelector(state => state.user);
    const {mainPosts} = useSelector(state => state.post);

    return (
        <Row style={{marginBottom: 50}} gutter={10}>
            <Col span={12}>
                <ContentsWrapper>
                    <div>text</div>
                </ContentsWrapper>
            </Col>
            <Col span={6}>
                <ContentsWrapper>
                    <ContentsCard title="새소식" extra={<a href="#">더보기</a>}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </ContentsCard>
                </ContentsWrapper>
            </Col>
            <Col span={6}>
                <ContentsWrapper>
                    <ContentsCard title="회원 서비스" extra={<><a href="#">회원가입</a><a href="#">비밀번호 찾기</a></>}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </ContentsCard>
                </ContentsWrapper>
            </Col>
        </Row>
    );
};

export default MainPageContents;
