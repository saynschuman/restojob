import * as React from 'react';
const CSS = require('./CitySelect.styl');
import Select from 'react-select';
import { Lightbox } from 'react-images';

interface City {
    label: string;
    value: string;
}

export interface CitySelectProps {
    cities: City[];
    currentCity: string;
    onChange(City): any;
}

export class CitySelect extends React.PureComponent<CitySelectProps> {
    render() {
        return (
            <Select
                className={CSS.select}
                optionClassName={CSS.option}
                value={this.props.currentCity}
                onChange={selectedCity => this.props.onChange(selectedCity)}
                options={this.props.cities}
                autoBlur={true}
                searchable={false}
                clearable={false}
            />
        );
    }
}
