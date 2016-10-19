/// <reference path="../../../typing/index.d.ts" />

import * as React from 'react';

interface IFooterProps {};

interface IFooterState {};

export class Footer extends React.Component<IFooterProps, IFooterState> {
  render() {
    return (
      <footer>
        <p>Footer</p>
      </footer>
    );
  }
}
