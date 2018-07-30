import * as React from 'react';
const CSS = require('./CompanyImage.styl');

export interface CompanyImageProps {
    img: string;
}

export class CompanyImage extends React.PureComponent<CompanyImageProps> {
    render() {
        return (
            <img src={this.props.img} className={CSS.CompanyImmage} />
        );
    }
}
