import * as React from 'react';
import { PageContainer } from '../../components/LayoutContainers/PageContainer/PageContainer';
import { IndexTopNav } from '../../components/blocks/IndexTopNav/IndexTopNav';
import { MobileAppBlock } from '../../components/common/MobileAppBlock/MobileAppBlock';
import {
    CatalogItemCompany,
} from '../../components/common/CatalogItemCompany/CatalogItemCompany';
import {
    CatalogItemVacancy,
} from '../../components/common/CatalogItemVacancy/CatalogItemVacancy';
import { Company, Employee, Vacancy } from '../../types';
import { CompanyTeaserBig } from '../../components/common/CompanyTeaserBig/CompanyTeaserBig';
import { BlueButton } from '../../components/common/Buttons/BlueButton/BlueButton';
import { CatalogItemEmployee } from '../../components/common/CatalogItemEmployee/CatalogItemEmployee';
import { CollapsibleText } from '../../components/common/CollapsibleText/CollapsibleText';
const CSS = require('./IndexPage.styl');
const teaserImg = require('../../assets/images/teaser.png');

interface IndexPageProps {
    bestCompanies: Company[];
    hotVacancies: Vacancy[];
    employeesKitchen: Employee[];
    employeesBar: Employee[];
    employeesManagement: Employee[];

    vacanciesCount: string;
    employersCount: string;
    employeesCount: string;

    cityString: string;
}

export class IndexPage extends React.PureComponent<IndexPageProps> {
    render() {
        return (
            <PageContainer>
                <div className={CSS.topBlock}>
                    <IndexTopNav />
                    <div className={CSS.topBlockRightColumn}>
                        <ul className={CSS.stats}>
                            <li className={CSS.statsItem}>
                                <span className={CSS.statsNumber}>{this.props.vacanciesCount}</span>
                                {__t('index.vacancies', { count: +this.props.vacanciesCount.replace(/\s+/g, '') })}
                            </li>
                            <li className={CSS.statsItem}>
                                <span className={CSS.statsNumber}>{this.props.employersCount}</span>
                                {__t('index.employers', { count: +this.props.employersCount.replace(/\s+/g, '') })}
                            </li>
                            <li className={CSS.statsItem}>
                                <span className={CSS.statsNumber}>{this.props.employeesCount}</span>
                                {__t('index.employees')}
                            </li>
                        </ul>

                        <MobileAppBlock
                            withBg={true}
                            className={CSS.mobileAppBlock}
                            text={__t('index.mobileAppBlockText')}
                        />
                    </div>
                </div>

                <div className={CSS.centerBlock}>
                    <section className={CSS.bestCompanies}>
                        <h1 className={CSS.sectionTitle}>{__t('index.bestEmployers')} {this.props.cityString}</h1>
                        <div className={CSS.companyList}>
                            {this.props.bestCompanies.slice(0, 6).map((company, index) => (
                                <CatalogItemCompany
                                    company={company}
                                    className={CSS.companyItem}
                                    key={index}
                                />
                            ))}
                        </div>
                    </section>
                    <section className={CSS.hotVacancies}>
                        <h1 className={CSS.sectionTitle}>{__t('index.hotVacancies')}</h1>
                        {this.props.hotVacancies.slice(0, 5).map((vacancy, index) => (
                            <CatalogItemVacancy
                                vacancy={vacancy}
                                key={index}
                                className={CSS.hotVacanciesItem}
                                withoutBottomInfo={true}
                            />
                        ))}
                        <a href="#" className={CSS.hotVacanciesMore}>{__t('index.showAllVacancies')}</a>
                    </section>
                </div>

                <CompanyTeaserBig img={teaserImg} href={'#'}/>

                <section className={CSS.employees}>
                    <div className={CSS.employeesAbout}>
                        <h1 className={CSS.employeesTitle}>{__t('index.employeesTitle')}</h1>
                        <h2 className={CSS.employeesTitleSmall}><span>{__t('index.employeesTitleSmall')}</span></h2>
                        <p className={CSS.employeesText} dangerouslySetInnerHTML={{ __html: __t('index.employeesText') }}/>
                        <BlueButton className={CSS.employeesCatalogButton}>
                            <a href={__t('index.showCatalogLink')} className={CSS.employeesCatalogLink}/>
                            {__t('index.showCatalogLinkTitle')}
                        </BlueButton>
                    </div>

                    <section className={CSS.employeesCategory}>
                        <h1 className={CSS.employeesCategoryTitle}>{__t('index.employeeCategoryKitchen')}</h1>
                        {this.props.employeesKitchen.slice(0, 3).map((employee, index) => {
                            return <CatalogItemEmployee employee={employee} key={index} className={CSS.employee}/>;
                        })}
                    </section>

                    <section className={CSS.employeesCategory}>
                        <h1 className={CSS.employeesCategoryTitle}>{__t('index.employeeCategoryBar')}</h1>
                        {this.props.employeesBar.slice(0, 3).map((employee, index) => {
                            return <CatalogItemEmployee employee={employee} key={index} className={CSS.employee}/>;
                        })}
                    </section>

                    <section className={CSS.employeesCategory}>
                        <h1 className={CSS.employeesCategoryTitle}>{__t('index.employeeCategoryManagement')}</h1>
                        {this.props.employeesManagement.slice(0, 3).map((employee, index) => {
                            return <CatalogItemEmployee employee={employee} key={index} className={CSS.employee}/>;
                        })}
                    </section>
                </section>

                <section className={CSS.bottomBlock}>
                    <CollapsibleText
                        firstPart={__t('index.collapsibleTextFirst')}
                        secondPart={__t('index.collapsibleTextSecond')}
                    />
                </section>
            </PageContainer>
        );
    }
}
