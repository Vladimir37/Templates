/// <reference path="../../../../typing/index.d.ts" />

import * as React from 'react';

interface IHeaderProps {};

interface IHeaderState {};

export class Header extends React.Component<IHeaderProps, IHeaderState> {
    render() {
        return (
            <header>
                <h1>Main title</h1>
            </header>
        );
    }
}
