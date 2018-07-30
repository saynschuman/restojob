import * as React from 'react';
import * as classNames from 'classnames';
const CSS = require('./SalaryCheckboxes.styl');

interface SalaryCheckboxProps {
    onChange?(val: any): any;
    className?: string;
}

interface SalaryCheckboxState {
    isActive: boolean;
}

class SalaryCheckbox extends React.PureComponent<SalaryCheckboxProps, SalaryCheckboxState> {

    state = {
        isActive: false,
    };

    toggle = () => {
        const isActive =  !this.state.isActive;
        this.setState({ isActive });
        if (this.props.onChange) {
            this.props.onChange(isActive);
        }
    }

    render() {
        return (
            <div
                className={classNames(
                    CSS.container,
                    this.props.className,
                    { [CSS.isActive]: this.state.isActive },
                )}
                onClick={this.toggle}
            >
                {this.props.children}
            </div>
        );
    }
}

export const TipsCheckbox: React.SFC<SalaryCheckboxProps> = (props) => {
    return (
        <SalaryCheckbox onChange={props.onChange} className={CSS.tipsCheckbox}>
            {__t('publishVacancyPage.tips')}
        </SalaryCheckbox>
    );
};

export const PercentCheckbox: React.SFC<SalaryCheckboxProps> = (props) => {
    return (
        <SalaryCheckbox onChange={props.onChange} className={CSS.percentCheckbox}>
            {__t('publishVacancyPage.percent')}
        </SalaryCheckbox>
    );
};
