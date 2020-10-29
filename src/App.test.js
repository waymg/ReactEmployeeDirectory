import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { isTSAnyKeyword } from '@babel/types';

it('renders without crashing', ()=>{
  const div = document.createElement('div');
  // eslint-disable-next-line no-undef
  ReactDOM.render(<App />, div);
  // eslint-disable-next-line no-undef
  ReactDOM.unmountComponentAtNode(div);
});

