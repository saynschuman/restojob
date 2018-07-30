import * as React from 'react';
const CSS = require('./MainContainer.styl');
import * as classNames from 'classnames';

interface MainContainerProps {
    className?: string;
}

export const MainContainer: React.SFC<MainContainerProps> = (props) => {
    return <main className={classNames(props.className, CSS.mainContent)}>{props.children}</main>;
};

export const MainContainerBig: React.SFC = (props) => {
    return <MainContainer className={CSS.mainContentBig}>{props.children}</MainContainer>;
};
