import * as React from 'react';
import { ColumnsPageContainer } from '../../components/LayoutContainers/PageContainer/PageContainer';
import { AsideLeftContainer } from '../../components/LayoutContainers/AsideLeftContainer/AsideLeftContainer';
import { AsideRightContainer } from '../../components/LayoutContainers/AsideRightContainer/AsideRightContainer';
import { MainContainer } from '../../components/LayoutContainers/MainContainer/MainContainer';
import { VerticalBanner } from '../../components/common/VerticalBanner/VerticalBanner';
import { MobileAppBlock } from '../../components/common/MobileAppBlock/MobileAppBlock';
import { CitySelect } from '../../components/common/CitySelect/CitySelect';
import { SelectFilters } from '../../components/common/SelectFilters/SelectFilters';
import { CompanyTeaser } from '../../components/common/CompanyTeaser/CompanyTeaser';
import {
    CatalogItemVacancy,
} from '../../components/common/CatalogItemVacancy/CatalogItemVacancy';
import { AsideCompanyBlock } from '../../components/common/AsideCompanyBlock/AsideCompanyBlock';
import { Vacancy } from '../../types';
import { companyMock } from '../../mocks';
const CSS = require('./CatalogPage.styl');
const logoWRF = require('../../assets/images/logoWRF.png');

export const catalogFilters = [
    { value: 'kitchen', title: 'Кухня' },
    { value: 'bar', title: 'Бар' },
    { value: 'management', title: 'Управление' },
    { value: 'other', title: 'Другое' },
];

interface CatalogPageProps {
    banner?: {
        img: string;
        href: string
    };
    vacancies: Vacancy[];
}

export class CatalogPage extends React.PureComponent<CatalogPageProps> {

    state = {
        currentCity: 'msk',
        currentFilter: null,
    };

    render() {
        return (
            <ColumnsPageContainer>
                <AsideLeftContainer>
                    <div className={CSS.asideLeftContent}>
                        <CitySelect
                            currentCity={this.state.currentCity}
                            cities={[
                                { value: 'msk', label: 'Москва' },
                                { value: 'spb', label: 'Санкт-Петербург' },
                                { value: 'sochi', label: 'Сочи' },
                                { value: 'kazan', label: 'Казань' },
                                { value: 'eburg', label: 'Екатеринбург' },
                                { value: 'rostov', label: 'Ростов' },
                            ]}
                            onChange={city => this.setState({ currentCity: city.value })}
                        />
                        <SelectFilters
                            filters={catalogFilters}
                            onChange={val => this.setState({ currentFilter: val })}
                            value={this.state.currentFilter}
                        />
                    </div>
                </AsideLeftContainer>
                <MainContainer>
                    <CompanyTeaser
                        brendLogo={logoWRF}
                        brendTitle={'White Rabbit Family'}
                        text={`
                            На работу лучше ходить с радостью. Талантливая команда, отличные условия работы,
                            и профессиональный рост ждут новых сотрудников WRF
                        `}
                        href={'#'}
                    />

                    <section className={CSS.catalogSection}>
                        <h1 className={CSS.catalogSectionTitle}>Горячие вакансии</h1>
                        {this.props.vacancies.map((vacancy, index) => <CatalogItemVacancy vacancy={vacancy} key={index}/>)}
                    </section>

                    <section className={CSS.catalogSection}>
                        <h1 className={CSS.catalogSectionTitle}>Остальные вакансии</h1>
                        {this.props.vacancies.map((vacancy, index) => <CatalogItemVacancy vacancy={vacancy} key={index}/>)}
                    </section>
                </MainContainer>
                <AsideRightContainer>
                    {this.props.banner && <VerticalBanner href={this.props.banner.href} img={this.props.banner.img}/>}
                    <AsideCompanyBlock company={companyMock} />
                    <MobileAppBlock className={CSS.mobileAppBlock}/>
                </AsideRightContainer>
            </ColumnsPageContainer>
        );
    }
}
