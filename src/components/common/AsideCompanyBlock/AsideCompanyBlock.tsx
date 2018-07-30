import * as React from 'react';
import {
    AppStoreLinkSmall,
    GooglePlayLinkSmall,
} from '../Buttons/StoreLinks/StoreLinks';
import { Company } from '../../../types';
const CSS = require('./AsideCompanyBlock.styl');

interface AsideCompanyBlockProps {
    company: Company;
}

export const AsideCompanyBlock: React.SFC<AsideCompanyBlockProps> = (props) => {
    const vacanciesString = props.company.vacancyPublished.map(v => v.title).join(', ');
    return (
        <section className={CSS.asideCompanyBlock}>
            <img src={props.company.logo} alt="logo" className={CSS.logo}/>
            <h1 className={CSS.title}>{props.company.brend}</h1>
            <p className={CSS.vacancies}>{vacanciesString}</p>
            <a href={__t('asideCompanyLink')} className={CSS.link}>{__t('asideCompanyLinkTitle')}</a>
        </section>
    );
};
