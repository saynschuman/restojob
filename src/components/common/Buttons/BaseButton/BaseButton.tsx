import * as React from 'react';
import * as classNames from 'classnames';
import { WaveAnimation } from '../../WaveAnimation/WaveAnimation';
const CSS = require('./BaseButton.styl');

export interface ButtonProps {
    className?: string;
    onClick?(): any;
    waveColor?: string;
    isSubmit?: boolean;
}

export const BaseButton: React.SFC<ButtonProps>  = (props) => {
    return (
        <button
            type={props.isSubmit ? 'submit' : 'button'}
            onClick={() => {
                if (props.onClick) {
                    props.onClick();
                }
            }}
            className={classNames(CSS.baseButton, props.className)}
        >
            <WaveAnimation color={props.waveColor} />
            {props.children}
        </button>
    );
};
