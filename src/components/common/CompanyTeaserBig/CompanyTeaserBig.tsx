import * as React from 'react';
const CSS = require('./CompanyTeaserBig.styl');
import * as ReactDOM from 'react-dom';
import { Lightbox } from 'react-images';

export interface CompanyTeaserProps {
    img: string;
    href: string;
}

export const CompanyTeaserBig: React.SFC<CompanyTeaserProps> = (props) => {
    return (
        <a className={CSS.link} href={props.href}>
            <img src={props.img} alt="teaser" className={CSS.img}/>
        </a>
    );
};
