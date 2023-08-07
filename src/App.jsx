import Spline from '@splinetool/react-spline';
import styled from 'styled-components'
import NavBar from './Navbar.jsx';
import './App.css';

export default function App() {
  return (
    <Wrapper>
      <NavBar>
      </NavBar>
      <Spline className="spline" scene="https://prod.spline.design/bdLEqylqiQ855KVP/scene.splinecode" />
       <Content>
          <h1>
            Hi, I am Siddharth Aggarwal.
          </h1>
         </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  positon:relative;

  .spline{
    positon:absolute;
  }
`;

const Content= styled.div`
  postion:absolute;
`;

// const Cover = styled.div`
//   position: relative;
// `
// const Illustration= styled.div`
//   display:flex;
//   flex-direction: row;
//   position : absolute;
// `

