import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';

import logo from './logo.svg';

const App = styled('div')({
  textAlign: 'center'
});
const AppHeader = styled('header')({
  backgroundColor: '#282c34',
  minHeight      : '100vh',
  display        : 'flex',
  flexDirection  : 'column',
  alignItems     : 'center',
  justifyContent : 'center',
  fontSize       : 'calc(10px + 2vmin)',
  color          : 'white'
});

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Img = styled('img')({
  height       : '40vmin',
  pointerEvents: 'none',
  animation    : `${spin} infinite 20s linear`
});

export const SamplePage = (): JSX.Element => {

  return (
    <App>
      <AppHeader>
        <Img src={logo} alt="logo" />
        <p>
      Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
      Learn React.
        </a>
      </AppHeader>
    </App>
  );
};
