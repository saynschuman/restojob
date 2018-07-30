import * as React from 'react';
import {
    AppStoreLinkSmall,
    GooglePlayLinkSmall,
} from '../../common/Buttons/StoreLinks/StoreLinks';
const CSS = require('./AsideRightContainer.styl');

export const AsideRightContainer: React.SFC = (props) => {
    return (
        <aside className={CSS.asideRight}>
            {props.children}
        </aside>
    );
};
