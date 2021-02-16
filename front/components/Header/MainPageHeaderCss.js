import styled, { createGlobalStyle } from 'styled-components';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';


export const HeaderSection = styled.div`
  background-color: #fff;
  padding-bottom: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
  margin-bottom: 25px;
`;

export const HeaderWrapper = styled.div`
  position: relative;
  max-width: 1300px;
  margin: 0 auto;
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