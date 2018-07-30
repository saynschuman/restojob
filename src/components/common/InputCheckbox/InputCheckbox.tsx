import * as React from 'react';
import * as classNames from 'classnames';
const CSS = require('./InputCheckbox.styl');

interface InputCheckboxProps {
    title: string;
    className?: string;
    onChange?(val: any): any;
}

export const InputCheckbox: React.SFC<InputCheckboxProps> = (props) => {
    return (
        <label className={classNames(CSS.container, props.className)}>
            <input
                type="checkbox"
                className={CSS.input}
                name={props.title}
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
