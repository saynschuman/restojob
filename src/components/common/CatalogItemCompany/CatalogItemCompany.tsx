import * as React from 'react';
import * as classNames from 'classnames';
import * as moment from 'moment';
import { Link } from 'react-router-dom';
import { Company } from '../../../types';
const CSS = require('./CatalogItemCompany.styl');

interface CatalogItemCompanyProps {
    company: Company;
    className?: string;
}

export const CatalogItemCompany: React.SFC<CatalogItemCompanyProps>  = (props) => {
    const visibleVacancies = props.company.vacancyPublished.slice(0, 3);
    const needMoreLink = props.company.vacancyPublished.length > 3;
    const otherVacanciesCount = props.company.vacancyPublished.length - visibleVacancies.length;
    return (
        <div className={classNames(CSS.item, props.className)}>
            <div className={CSS.logoContainer}>
                <img src={props.company.logo} alt="logo"/>
            </div>

            <div className={CSS.content}>
                <h2 className={CSS.title}>
                    {props.company.brend}
                </h2>
                {visibleVacancies.map((vacancy, index) => {
                    return <a className={CSS.vacancy} href={'#'} key={index}>{vacancy.title}</a>;
                })}
                {needMoreLink && (
                    <a href={'#'} className={CSS.more}>
                        {__t('catalogItemCompanyMore')} {__t('vacancies', { count: otherVacanciesCount })}
                    </a>
                )}
            </div>
        </div>
    );
};
