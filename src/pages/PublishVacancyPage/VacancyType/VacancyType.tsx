import { Address } from '../../../types';
import * as React from 'react';
import * as classNames from 'classnames';
const CSS = require('./VacancyType.styl');

export interface VacancyTypeProps {
    icon: string;
    title: string;
    price: string;
    description: string;
    isEnoughMoney: boolean;
    onClick?(): any;
}

export class VacancyType extends React.PureComponent<VacancyTypeProps> {

    onClick = () => {
        this.props.onClick && this.props.onClick();
    }

    render() {
        return (
            <li className={classNames(CSS.container, { [CSS.notAvailable]: !this.props.isEnoughMoney })} onClick={this.onClick}>
                <div className={CSS.titleContainer} style={{ backgroundImage: `url(${this.props.icon}` }}>
                    <h2 className={CSS.title}>{this.props.title}</h2>
                    <div className={CSS.price}>{this.props.price}</div>
                </div>
                <div className={CSS.description} dangerouslySetInnerHTML={{ __html: this.props.description }} />
                {!this.props.isEnoughMoney && <span className={CSS.notEnoughMoney}>{__t('publishVacancyPage.notEnoughMoney')}</span>}
            </li>
        );
    }
}
