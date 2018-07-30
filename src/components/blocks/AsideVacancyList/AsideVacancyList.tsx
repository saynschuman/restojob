import * as React from 'react';
import {
    AppStoreLinkSmall,
    GooglePlayLinkSmall,
} from '../../common/Buttons/StoreLinks/StoreLinks';
import { Link } from 'react-router-dom';
import { Vacancy } from '../../../types';
const CSS = require('./AsideVacancyList.styl');

interface AsideVacancyListProps {
    vacancies: Vacancy[];
}

export const AsideVacancyList: React.SFC<AsideVacancyListProps> = (props) => {
    return (
        <section className={CSS.container}>
            <h1 className={CSS.title}>{__t('asideHotVacanciesTitle')}</h1>
            {props.vacancies.map((vacancy, index) => <Vacancy {...vacancy} key={index}/>)}
        </section>
    );
};

const Vacancy: React.SFC<Vacancy> = (props) => {
    return (
        <a href={props.link} className={CSS.vacancy}>
            <div className={CSS.logoContainer}>
                <img src={props.company.logo} alt="logo"/>
            </div>
            <h2 className={CSS.vacancyTitle}>{props.title}</h2>
            <div className={CSS.salary}>{props.salaryText}</div>
        </a>
    );
};
