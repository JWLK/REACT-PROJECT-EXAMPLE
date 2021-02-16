import React from 'react';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { ContentsWrapper } from './MainPageContentsCss';

const MainPageContents = () => {
    const { isLoggedIn } = useSelector(state => state.user);
    const { mainPosts } = useSelector(state => state.post);

    return (
        <Row style={{ marginBottom: 50}}>
            <Col span={4}>
                <ContentsWrapper>
                    <div>text</div>
                </ContentsWrapper>
            </Col>
            <Col span={4}>
                <ContentsWrapper>
                    <div>text</div>
                </ContentsWrapper>
            </Col>
            <Col span={4}>
                <ContentsWrapper>
                    <div>text</div>
                </ContentsWrapper>
            </Col>
        </Row>
    );
};

export default MainPageContents;
