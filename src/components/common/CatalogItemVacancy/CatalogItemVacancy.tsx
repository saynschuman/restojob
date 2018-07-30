import * as React from 'react';
import * as classNames from 'classnames';
import * as moment from 'moment';
import { Link } from 'react-router-dom';
import { Vacancy } from '../../../types';
const CSS = require('./CatalogItemVacancy.styl');

interface CatalogItemVacancyProps {
    vacancy: Vacancy;
    className?: string;
    withoutBottomInfo?: boolean;
}

export const CatalogItemVacancy: React.SFC<CatalogItemVacancyProps>  = (props) => {
    const date = moment(props.vacancy.publishedDate).format('DD MMM');
    const isHot = props.vacancy.isHot;
    const isActiveSearch = props.vacancy.isActive && !isHot;
    const needRenderParams = !isHot && !isActiveSearch;

    const address = props.vacancy.addressesList && props.vacancy.addressesList.find(a => !!a.station);

    return (
        <div className={classNames(CSS.item, props.className)}>
            <div className={CSS.itemLogoContainer}>
                {props.vacancy.company.logo && <img src={props.vacancy.company.logo} alt={'logo'} className={CSS.itemLogo}/>}
            </div>
            <div className={CSS.itemContent}>
                <header className={CSS.vacancyHeader}>
                    <a href={'#'} className={CSS.vacancyTitle}>{props.vacancy.title}</a>
                    <time className={CSS.date}>{date}</time>
                </header>
                <div className={CSS.salary}>
                    <span className={CSS.salaryAmount}>{props.vacancy.salaryText}</span>
                </div>
                {!props.withoutBottomInfo && <div className={CSS.bottomInfo}>
                    <a className={CSS.companyTitle} href={'#'}>{props.vacancy.company.brend}</a>
                    {address && <span className={CSS.addresses}>
                        <span
                            className={CSS.metroCircle}
                            style={{ backgroundColor: `#${address.color}` }}
                        >
                            М
                        </span>
                        {address.station}
                    </span>}
                </div>}
            </div>
            <div className={CSS.itemRightContent}>
                {isHot && <span className={CSS.isHot}/>}
                {isActiveSearch && <span className={CSS.isActiveSearch}>{__t('catalogItemVacancyActive')}</span>}
                {needRenderParams && props.vacancy.params.slice(0, 2).map((param, index) => {
                    return <div className={CSS.vacancyParam} key={index}>
                        <span className={CSS.vacancyParamTitle}>{param[0]}</span>
                        <span className={CSS.vacancyParamValue}>{param[1]}</span>
                    </div>;
                })}
            </div>
        </div>
    );
};
