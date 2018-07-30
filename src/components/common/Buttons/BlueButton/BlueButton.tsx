import * as React from 'react';
import * as classNames from 'classnames';
import { BaseButton, ButtonProps } from '../BaseButton/BaseButton';
const CSS = require('./BlueButton.styl');

export const BlueButton: React.SFC<ButtonProps> = (props) => {
    return (
        <BaseButton
            className={classNames(CSS.blueButton, props.className)}
            waveColor={'rgba(45, 256, 219, 0.5)'}
            onClick={props.onClick}
            isSubmit={props.isSubmit}
        >
            {props.children}
        </BaseButton>
    );
};
