import React from 'react';
import {useSelector} from 'react-redux';

import AppLayout from '../components/AppLayout';
import PostCard from '../components/PostCard';
import MainPageContents from "../components/MainPage/MainPageContents";

const Home = () => {
    const {isLoggedIn} = useSelector(state => state.user);
    const {mainPosts} = useSelector(state => state.post);

    return (
        <AppLayout>
            <MainPageContents/>
            {mainPosts.map((c) => {
                return (
                    <PostCard key={c.id} post={c}/>
                );
            })}
        </AppLayout>
    );
};

export default Home;
