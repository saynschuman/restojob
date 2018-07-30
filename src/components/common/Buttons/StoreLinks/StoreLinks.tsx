import * as React from 'react';
const CSS = require('./StoreLinks.styl');
import * as classNames from 'classnames';
const appStoreImage = require('./i/appStore.png');
const googlePlayImage = require('./i/googlePlay.png');

const GOOGLE_PLAY_LINK = 'https://play.google.com/store/apps/details?id=com.rj';
const APP_STORE_LINK = 'https://itunes.apple.com/ru/app/id1229483684';

export const AppStoreLink = (onClick: any) => {
    return (
        <a href={APP_STORE_LINK} className={CSS.link}>
            <img src={appStoreImage} alt="appStore" className={CSS.image} onClick={() => onClick()}/>
        </a>
    );
};

export const GooglePlayLink = (onClick: any) => {
    return (
        <a href={GOOGLE_PLAY_LINK} className={CSS.link}>
            <img src={googlePlayImage} alt="appStore" className={CSS.image} onClick={() => onClick()}/>
        </a>
    );
};

export const AppStoreLinkSmall = (onClick: any) => {
    return (
        <a href={APP_STORE_LINK} className={CSS.link}>
            <img src={appStoreImage} alt="appStore" className={classNames(CSS.image, CSS.imageSmall)} onClick={() => onClick()} />
        </a>
    );
};

export const GooglePlayLinkSmall = (onClick: any) => {
    return (
        <a href={GOOGLE_PLAY_LINK} className={CSS.link}>
            <img src={googlePlayImage} alt="googlePlay" className={classNames(CSS.image, CSS.imageSmall)} onClick={() => onClick()} />
        </a>
    );
};
