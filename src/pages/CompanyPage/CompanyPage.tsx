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
import { CatalogItemVacancy } from '../../components/common/CatalogItemVacancy/CatalogItemVacancy';
import { AsideCompanyBlock } from '../../components/common/AsideCompanyBlock/AsideCompanyBlock';
import { Vacancy } from '../../types';
import { companyMock } from '../../mocks';
const CSS = require('./CompanyPage.styl');
const logoWRF = require('../../assets/images/logoWRF.png');
import { Gallery } from '../../components/common/Gallery/Gallery';
import { CompanyImage } from '../../components/common/CompanyImage/CompanyImage';
import { MapBlock } from '../../components/common/MapBlock/MapBlock';
import { vacancyMock } from '../../mocks';
import { AddressesList } from '../../components/common/AddressesList/AddressesList';

export const catalogFilters = [
    { value: 'kitchen', title: 'Кухня' },
    { value: 'bar', title: 'Бар' },
    { value: 'management', title: 'Управление' },
    { value: 'other', title: 'Другое' },
];

interface CompanyPageProps {
    banner?: {
        img: string,
        href: string,
    };
    imgsrc?: string;
    company: string[];
    vacancies: Vacancy[];
    vacancy: Vacancy;

}

export class CompanyPage extends React.PureComponent<CompanyPageProps> {
    state = {
        currentCity: 'msk',
        currentFilter: null,
    };

    render() {
        const hasAdresses = this.props.vacancy.addressesList && this.props.vacancy.addressesList.length;
        const vacancyCoords =
            hasAdresses
                ? this.props.vacancy.addressesList
                    .filter(address => !!address.coord)
                    .map(address => address.coord)
                : null;
        return (
            <ColumnsPageContainer>
                <AsideLeftContainer>
                    {/*<div className={CSS.asideLeftContent}>*/}
                    {this.props.banner && <CompanyImage img={this.props.imgsrc} />}
                    {/*<CitySelect*/}
                    {/*currentCity={this.state.currentCity}*/}
                    {/*cities={[*/}
                    {/*{ value: 'msk', label: 'Москва' },*/}
                    {/*{ value: 'spb', label: 'Санкт-Петербург' },*/}
                    {/*{ value: 'sochi', label: 'Сочи' },*/}
                    {/*{ value: 'kazan', label: 'Казань' },*/}
                    {/*{ value: 'eburg', label: 'Екатеринбург' },*/}
                    {/*{ value: 'rostov', label: 'Ростов' },*/}
                    {/*]}*/}
                    {/*onChange={city => this.setState({ currentCity: city.value })}*/}
                    {/*/>*/}
                    {/*<SelectFilters*/}
                    {/*filters={catalogFilters}*/}
                    {/*onChange={val => this.setState({ currentFilter: val })}*/}
                    {/*value={this.state.currentFilter}*/}
                    {/*/>*/}
                    {/*</div>*/}
                </AsideLeftContainer>
                <MainContainer>
                    <header className={CSS.headerRec}>
                        <h1>Британские кондитерские</h1>
                        <div>Москва</div>
                        <div className="recommended"></div>
                    </header>
                    {/*<section>*/}
                        {/*<p>Дата открытия: <span>2016 год</span></p>*/}
                        {/*<p>*/}
                            {/*Британские пекарни» твердо решили захватить мир! Ну или, как минимум,*/}
                            {/*Санкт-Петербург - точно)*/}
                        {/*</p>*/}
                        {/*<p>*/}
                            {/*Мы - успешная компания с более чем 20-летней историей. Несмотря на это,*/}
                            {/*продолжаем развиваться и не стоим на месте. В нашей команде работают*/}
                            {/*профессионалы, неравнодушные к своему делу, готовые делиться*/}
                            {/*накопленными знаниями и опытом, создавая новые традиции. Не хватает*/}
                            {/*только ТЕБЯ!*/}
                        {/*</p>*/}
                    {/*</section>*/}
                    {!!this.props.company.photoSet.length && <section className={CSS.photos}>
                        <Gallery images={this.props.fancyImages} />
                    </section>}
                    <section className={CSS.catalogSection}>
                        <h1 className={CSS.catalogSectionTitle}>Вакансии в Бретанские Пекарни</h1>
                        {this.props.vacancies.map((vacancy, index) => (
                            <CatalogItemVacancy vacancy={vacancy} key={index} />
                        ))}
                    </section>

                    {hasAdresses && <section className={CSS.map}>
                        <h2 className={CSS.mapTitle}>Адреса</h2>
                        <AddressesList addresses={this.props.vacancy.addressesList}/>
                        {vacancyCoords && <MapBlock coords={vacancyCoords} />}
                    </section>}

                </MainContainer>
                <AsideRightContainer>
                    {this.props.banner && (
                        <VerticalBanner href={this.props.banner.href} img={this.props.banner.img} />
                    )}
                    <AsideCompanyBlock company={companyMock} />
                    <MobileAppBlock className={CSS.mobileAppBlock} />
                </AsideRightContainer>
            </ColumnsPageContainer>
        );
    }
}
