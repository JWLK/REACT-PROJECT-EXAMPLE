import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Input, Row, Col, Image, Button} from 'antd';
import Link from "next/link";

import { HeaderSection, HeaderWrapper, TopMenu, MainMenu } from './MainPageHeaderCss';
import UserProfile from "../UserProfile";
import LoginForm from "../LoginForm";

const MainPageHeader = () => {
    const { isLoggedIn } = useSelector(state => state.user);
    return (
        <HeaderSection>
            <HeaderWrapper>
                <Row justify="end" align="middle">
                    {!isLoggedIn ?
                        <>
                            <Col>
                                <TopMenu type="link">
                                    로그인
                                </TopMenu>
                            </Col>
                            <Col>
                                <TopMenu type="link">
                                    <Link href="/signup"><a>회원가입</a></Link>
                                </TopMenu>
                            </Col>
                        </>
                        :
                        <>
                            <Col>
                                <TopMenu type="link">
                                    <Link href="/profile"><a>프로필</a></Link>
                                </TopMenu>
                            </Col>
                        </>
                    }
                </Row>

                <Row gutter={0} align="middle">
                    <Col span={8}>
                        <Link href="/"><a><img src='/assets/logo-row-mobile-obj.png'/></a></Link>
                    </Col>
                    <Col span={8}>
                        {/*<Input.Search enterButton style={{ verticalAlign: 'middle' }} />*/}
                    </Col>
                    <Col span={8}>
                        <Row justify="end" gutter={0}>
                            <Col>
                                <MainMenu type="link">
                                    <Link href="/profile"><a>채용정보</a></Link>
                                </MainMenu>
                            </Col>
                            <Col>
                                <MainMenu type="link">
                                    <Link href="/profile"><a>인재정보</a></Link>
                                </MainMenu>
                            </Col>
                            <Col>
                                <MainMenu type="link">
                                    <Link href="/profile"><a>문의하기</a></Link>
                                </MainMenu>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </HeaderWrapper>
        </HeaderSection>
    );
};

export default MainPageHeader;
