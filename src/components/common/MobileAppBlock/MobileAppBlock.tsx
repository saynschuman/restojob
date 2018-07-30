import * as React from 'react';
import * as classNames from 'classnames';
import {
    AppStoreLinkSmall,
    GooglePlayLinkSmall,
} from '../Buttons/StoreLinks/StoreLinks';
const CSS = require('./MobileAppBlock.styl');

interface MobileAppBlockProps {
    className?: string;
    withBg?: boolean;
    text?: string;
}

export const MobileAppBlock: React.SFC<MobileAppBlockProps> = (props) => {
    return (
        <section className={classNames(CSS.mobileAppBlock, props.className, { [CSS.withBg]: props.withBg })}>
            <h1 className={CSS.mobileAppTitle}>{__t('mobileAppBlockTitle')}</h1>
            <p className={CSS.text}>{props.text || __t('mobileAppBlockText')}</p>
            <AppStoreLinkSmall />
            <GooglePlayLinkSmall />
        </section>
    );
};
