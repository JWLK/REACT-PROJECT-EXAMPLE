import React from 'react';
import {Row} from 'antd';
import {useSelector} from 'react-redux';

import AppLayout from '../components/AppLayout';
import PostCard_Main from '../components/MainPage/PostCard_Main';
import MainPageContents from "../components/MainPage/MainPageContents";

const Home = () => {
    const {isLoggedIn} = useSelector(state => state.user);
    const {mainPosts} = useSelector(state => state.post);

    return (
        <AppLayout>
            <MainPageContents/>
            <Row gutter={10}>
                {mainPosts.map((c) => {
                    return (
                      <PostCard_Main key={c.id} post={c}/>
                    );
                })}
            </Row>
        </AppLayout>
    );
};

export default Home;
