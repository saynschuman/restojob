import * as React from 'react';
const CSS = require('./PageContainer.styl');
import * as classNames from 'classnames';

export const PageContainer: React.SFC = (props) => {
    return <div className={CSS.container}>{props.children}</div>;
};

export const ColumnsPageContainer: React.SFC = (props) => {
    return <div className={classNames(CSS.container, CSS.columnsLayout)}>{props.children}</div>;
};

