/// <reference path="../../../../typing/index.d.ts" />

import * as React from 'react';
import {Header} from '../components/header';
import {Footer} from '../components/footer';

interface IMainProps {};

interface IMainState {};

export class Main extends React.Component<IMainProps, IMainState> {
    generatePage() {
        return <main></main>;
    }
    
    render() {
        return (
            <div>
                <Header/>
                {this.generatePage()}
                <Footer/>
            </div>
        );
    }
}
