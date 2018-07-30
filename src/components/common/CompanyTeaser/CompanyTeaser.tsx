import * as React from 'react';
const CSS = require('./CompanyTeaser.styl');
import { Lightbox } from 'react-images';

export interface CompanyTeaserProps {
    brendTitle: string;
    brendLogo: string;
    text: string;
    href: string;
}

export const CompanyTeaser: React.SFC<CompanyTeaserProps> = (props) => {
    return (
        <section className={CSS.container}>
            <img src={props.brendLogo} alt="logo" className={CSS.logo}/>
            <div className={CSS.content}>
                <h1 className={CSS.header}>{__t('companyTeaserWorkIn')} {props.brendTitle}</h1>
                <p className={CSS.text}>{props.text}</p>
                <a href={props.href} className={CSS.link}>{__t('companyTeaserGoTo')}</a>
            </div>
        </section>
    );
};
