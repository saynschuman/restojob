import * as React from 'react';
import {
    AppStoreLinkSmall,
    GooglePlayLinkSmall,
} from '../../common/Buttons/StoreLinks/StoreLinks';
const CSS = require('./IndexTopNav.styl');

export const IndexTopNav: React.SFC = () => {
    return (
        <nav className={CSS.nav}>
            <h1 className={CSS.title}>{__t('indexTopNav.title')}</h1>
            <div className={CSS.list}>
                <a href={__t('indexTopNav.links.cook.link')} className={CSS.link}>{__t('indexTopNav.links.cook.title')}</a>
                <a href={__t('indexTopNav.links.waiter.link')} className={CSS.link}>{__t('indexTopNav.links.waiter.title')}</a>
                <a href={__t('indexTopNav.links.barman.link')} className={CSS.link}>{__t('indexTopNav.links.barman.title')}</a>
                <a href={__t('indexTopNav.links.manager.link')} className={CSS.link}>{__t('indexTopNav.links.manager.title')}</a>
                <a href={__t('indexTopNav.links.other.link')} className={CSS.link}>{__t('indexTopNav.links.other.title')}</a>
            </div>
            <p className={CSS.bottomInfo} dangerouslySetInnerHTML={{ __html: __t('indexTopNav.publish') }} />
        </nav>
    );
};
