import * as React from 'react';
import * as classNames from 'classnames';
import { BaseButton, ButtonProps } from '../BaseButton/BaseButton';
const CSS = require('./GreenButton.styl');

export const GreenButton: React.SFC<ButtonProps> = (props) => {
    return (
        <BaseButton
            className={classNames(CSS.greenButton, props.className)}
            waveColor={'rgba(39, 256, 96, 0.5)'}
            onClick={props.onClick}
            isSubmit={props.isSubmit}
        >
            {props.children}
        </BaseButton>
    );
};
