// @flow
import React from 'react';

import styled from 'styled-components/native';

// import {
//   LiveProvider as _LiveProvider,
//   LiveEditor as _LiveEditor,
//   LiveError as _LiveError,
//   LivePreview as _LivePreview,
// } from 'react-live';

// import buttonExample from './Button.example';

// const GlobalStyle = createGlobalStyle`
//   body {
//     font-size: 16px;
//     line-height: 1.2;
//     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
//     font-style: normal;
//     padding: 0;
//     margin: 0;
//     color: rgb(46, 68, 78);
//     -webkit-font-smoothing: subpixel-antialiased;
//   }

//   * {
//     box-sizing: border-box;
//   }
// `;

const Body = styled.View`
  width: 100%;
  min-width: 100%;
  min-height: 100%;

  background-image: linear-gradient(20deg, #e6356f, #69e7f7);

  padding: 30px 20px;
`;

const Heading = styled.View`
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 26px;
`;

const Subtitle = styled.Text``;

const Content = styled.View`
  width: 100%;
  max-width: 860px;

  margin: 0 auto;
  margin-top: 60px;
`;

const Code = styled.Text`
  white-space: pre;
  /* vertical-align: middle; */
  font-family: monospace;
  display: inline-block;
  background-color: #1e1f27;
  color: #c5c8c6;
  /* padding: 0.1px 0.3px 0.15; */
  font-size: 10px;
  ${props => props.customStyle || ''}
  /* border-radius: 10px; */
`;

const CustomText = styled(Code)`
  ${props => props.customColor ? `color: ${props.customColor};` : ''}
`

const App = () => (
  <Body>
    <Content>
      <Heading>
        <Title>
          Interactive sandbox for <Code customStyle='font-weight: 700; font-size: 32px;'>styled-components</Code>
        </Title>
        <Subtitle>
          Make changes to the <Code>./src</Code> and see them take effect in realtime!
        </Subtitle>
        <Subtitle>
          <CustomText
            id='PPPPP'
            customColor='red'
            customStyle='background-color: white; font-weight: 200; margin-left: 50px;'
          >
            Red on white
          </CustomText>
        </Subtitle>
      </Heading>
    </Content>
  </Body>
);

export default App;
