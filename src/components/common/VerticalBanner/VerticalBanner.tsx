import * as React from 'react';
const CSS = require('./VerticalBanner.styl');
import * as ReactDOM from 'react-dom';
import { Lightbox } from 'react-images';

export interface VerticalBannerProps {
    img: string;
    href: string;
}

export class VerticalBanner extends React.PureComponent<VerticalBannerProps> {
    render() {
        return (
            <a href={this.props.href} target={'_blank'} className={CSS.verticalBanner}>
                <img src={this.props.img} />
            </a>
        );
    }
}
