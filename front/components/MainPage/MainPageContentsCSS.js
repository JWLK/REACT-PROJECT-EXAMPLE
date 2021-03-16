import styled from 'styled-components';
import {Col, Card, Button, List} from 'antd';


export const ContentsWrapper = styled.div`
  overflow: hidden;
  //background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
`;

export const ContentsImageBanner = styled.img`
  height: 200px;
  display: block;
  margin-left: -25px;
`

export const ContentsCardStyle00 = styled(Card)`
  width: 100%;
  height: 200px;

  .ant-card-head {
    min-height: 0px;
    padding: 0px 10px;
    color: #fff;
    font-size: 16px;
    background-color: #DD7171;
  }

  .ant-card-head-title {
    padding: 10px 0;
  }

  .ant-card-extra {
    a {
      margin-left: 10px;
      color: rgba(255, 255, 255, 0.8);
    }

    font-size: 10px;
    padding: 10px 0;
  }

  .ant-card-body {
    padding: 5px 10px;
  }
`;

export const ContentsListStyle00 = styled(List)`
  a {
    color: #707070;
    font-size: 12px;

    :hover {
      color: #333;
    }

    :focus {
      color: #333;
    }

    :active {
      color: #333;
    }
  }

  .ant-list-item {
    padding: 8px 0;
  }

  .extra {
    font-size: 10px;
    font-color: #707070;
  }

`
export const ContentsLoginImage = styled.img`
  height: 150px;
  display: block;
  margin: 0 auto;
`

export const ContentsCardStyle01 = styled(Card)`
  width: 100%;
  height: 148px;

  .ant-card-head {
    min-height: 0px;
    padding: 0px 10px;
    color: #DD7171;
    font-size: 14px;
    background-color: #fff;
    border-bottom: 1px solid #DD7171;
  }

  .ant-card-head-title {
    padding: 5px 0;
  }

  .ant-card-extra {
    a {
      margin-left: 10px;
      color: #333;
    }

    font-size: 10px;
    padding: 10px 0;
  }

  .ant-card-body {
    padding: 5px 10px;
  }
`;

export const ContentsListStyle01 = styled(List)`
  a {
    color: #707070;
    font-size: 12px;

    :hover {
      color: #333;
    }

    :focus {
      color: #333;
    }

    :active {
      color: #333;
    }
  }

  .ant-list-item {
    padding: 8px 0;
  }

  .extra {
    font-size: 10px;
    font-color: #707070;
  }
` ;


export const ContentsServiceImage = styled.img`
  height: 148px;
  display: block;
  margin: 0 auto;
  margin-left: -10px;
`

export const ContentsQuickButtonImage = styled.img`
  height: 65px;
  display: block;
  margin: 0 auto;
  margin-top: 5px;
  transform:scale(1.8);             /*  default */
  -webkit-transform:scale(1.8);  /*  크롬 */
  -moz-transform:scale(1.8);     /* FireFox */
  -o-transform:scale(1.8);        /* Opera */
`
