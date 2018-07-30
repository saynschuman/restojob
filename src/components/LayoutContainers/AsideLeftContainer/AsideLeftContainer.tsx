import * as React from 'react';
import {
    AppStoreLinkSmall,
    GooglePlayLinkSmall,
} from '../../common/Buttons/StoreLinks/StoreLinks';
const CSS = require('./AsideLeftContainer.styl');

export const AsideLeftContainer: React.SFC = (props) => {
    return (
        <aside className={CSS.asideLeft}>
            {props.children}
        </aside>
    );
};
