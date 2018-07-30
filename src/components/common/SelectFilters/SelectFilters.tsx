import * as React from 'react';
import * as classNames from 'classnames';

const CSS = require('./SelectFilters.styl');

export interface IFiltersProps<T> {
    filters: SelectFilterOption<T>[];
    onChange(value: T): void;
    value: T;
}

export interface SelectFilterOption<T> {
    title: string;
    value: T;
}

export class SelectFilters<T> extends React.PureComponent<IFiltersProps<T>, null> {
    render() {
        return (
            <div className={CSS.container}>
                {this.props.filters.map((filter, index) => {
                    return (
                        <label
                            key={index}
                            className={
                                classNames(
                                    CSS.filter,
                                    {
                                        [CSS.active]: filter.value === this.props.value,
                                    },
                                )
                            }
                        >
                            <input
                                type="checkbox"
                                className={CSS.checkbox}
                                checked={filter.value === this.props.value}
                                onChange={() => this.props.onChange(filter.value)}
                            />
                            {filter.title}
                        </label>
                    );
                })}
            </div>
        );
    }
}
