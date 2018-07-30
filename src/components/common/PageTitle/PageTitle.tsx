import * as React from 'react';
const CSS = require('./PageTitle.styl');

interface PageTitleProps {
    text: string;
}

export const PageTitle: React.SFC<PageTitleProps> = (props) => {
    return <h1 className={CSS.title}>{props.text}</h1>;
};
