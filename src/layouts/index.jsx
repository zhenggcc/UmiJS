import React from 'react';
import { unmountComponentAtNode } from 'react-dom';

export default function index(props) {
  return (
    <div>
      <h2>Header</h2>
      {props.children}
      <h2>Footer</h2>
    </div>
  );
}
