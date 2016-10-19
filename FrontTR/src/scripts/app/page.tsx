/// <reference path="../../../typing/index.d.ts" />

import * as React from 'react';
import {Header} from './header';
import {Footer} from './footer';

interface IMainProps {};

interface IMainState {};

export class Page extends React.Component<IMainProps, IMainState> {
  render() {
    return (
      <div>
        <Header/>
        <main></main>
        <Footer/>
      </div>
    );
  }
}
