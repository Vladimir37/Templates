/// <reference path="../../../../typing/index.d.ts" />

import * as React from 'react';
import {Header} from '../components/header';
import {Footer} from '../components/footer';

interface IMainProps {};

interface IMainState {};

export class NotFound extends React.Component<IMainProps, IMainState> {
    generatePage() {
        return (
            <main>
                <h1>Error 404</h1>
                <h2>Page not found</h2>
            </main>
        );
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
