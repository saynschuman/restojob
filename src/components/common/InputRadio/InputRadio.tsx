import * as React from 'react';
import * as classNames from 'classnames';
const CSS = require('./InputRadio.styl');

interface InputCheckboxProps {
    title: string;
    name: string;
    className?: string;
    onChange?(val: any): any;
}

export const InputRadio: React.SFC<InputCheckboxProps> = (props) => {
    return (
        <label className={classNames(CSS.container, props.className)}>
            <input
                type="radio"
                className={CSS.input}
                name={props.name}
                onChange={(val) => {
                    if (props.onChange) {
                        props.onChange(val);
                    }
                }}
            />
            <span className={CSS.mark}/>
            <span className={CSS.title}>{props.title}</span>
        </label>
    );
};
