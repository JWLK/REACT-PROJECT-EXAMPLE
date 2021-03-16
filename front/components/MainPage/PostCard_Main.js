import React, { useState, useCallback } from 'react';
import {Col, Card, Button, Avatar, Popover, List, Comment } from 'antd';
import PropTypes from 'prop-types';
import { RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import PostCardContent from './PostCardContent_Main';
import PostImages_Main from './PostImages_Main';

const CardWrapper = styled(Col)`
  margin-bottom: 20px;
`;

const PostCard_Main = ({ post }) => {
  const id = useSelector((state) => state.user.me && state.user.me.id);
  return (
    <>
      <CardWrapper key={post.id} span={8}>
        <Card
          cover={post.Images[0] && <PostImages_Main images={post.Images} />}
        >
          <Card.Meta
            style={{textAlign: 'center'}}
            title={<PostCardContent postData={post.content} />}
            description={post.User.nickname}
          />
        </Card>
      </CardWrapper>
    </>
  );
};

PostCard_Main.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.any),
    Images: PropTypes.arrayOf(PropTypes.any),
  }),
};

export default PostCard_Main;
