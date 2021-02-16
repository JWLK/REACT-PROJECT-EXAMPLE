import styled, {createGlobalStyle} from 'styled-components';
import {Card, Button} from 'antd';
import {CloseOutlined} from '@ant-design/icons';


export const ContentsWrapper = styled.div`
  height: 180px;
  //background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
`;

export const ContentsCard = styled(Card)`
  width: 100%;
  height: inherit;

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
      margin-left : 10px;
      color: rgba(255, 255, 255, 0.8);
    }

    font-size: 12px;
    padding: 10px 0;
  }

  .ant-card-body {
    padding: 15px 10px;
  }
`;


export const HeaderSection = styled.div`
  background-color: #fff;
  padding-bottom: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .16);;
`;

export const TopMenu = styled(Button)`
  margin-top: 10px;
  color: #707070;
  font-size: 14px;
  font-weight: Bold;

  :hover {
    color: #333;
  }

  :focus {
    color: #333;
  }

  :active {
    color: #333;
  }
`;

export const MainMenu = styled(Button)`
  color: #DD718C;
  font-size: 21px;
  font-weight: Bold;

  :hover {
    color: #FB6E91;
  }

  :focus {
    color: #FB6E91;
  }

  :active {
    color: #FB6E91;
  }
`;