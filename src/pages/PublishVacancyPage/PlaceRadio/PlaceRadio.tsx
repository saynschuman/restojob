import * as React from 'react';
import { InputRadio } from '../../../components/common/InputRadio/InputRadio';
const CSS = require('./PlaceRadio.styl');

interface PlaceRadioProps {
    title: string;
    city: string;
}

export const PlaceRadio: React.SFC<PlaceRadioProps> = (props) => {
    return (
        <div className={CSS.container}>
            <InputRadio title={props.title} name={'place'} className={CSS.input} />
            <span className={CSS.placeCity}>{props.city}</span>
        </div>
    );
};
