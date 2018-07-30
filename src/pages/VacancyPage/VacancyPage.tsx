import * as React from 'react';
import * as he from 'he';
import * as classNames from 'classnames';
import { Link } from 'react-router-dom';
import { BlueButton } from '../../components/common/Buttons/BlueButton/BlueButton';
import { GreenButton } from '../../components/common/Buttons/GreenButton/GreenButton';
import { Gallery } from '../../components/common/Gallery/Gallery';
import { MapBlock } from '../../components/common/MapBlock/MapBlock';
import { VerticalBanner } from '../../components/common/VerticalBanner/VerticalBanner';
import { MobileAppBlock } from '../../components/common/MobileAppBlock/MobileAppBlock';
import { AddressesList } from '../../components/common/AddressesList/AddressesList';
import { AsideLeftContainer } from '../../components/LayoutContainers/AsideLeftContainer/AsideLeftContainer';
import { AsideRightContainer } from '../../components/LayoutContainers/AsideRightContainer/AsideRightContainer';
import { MainContainer } from '../../components/LayoutContainers/MainContainer/MainContainer';
import { ColumnsPageContainer } from '../../components/LayoutContainers/PageContainer/PageContainer';
import moment = require('moment');
import { AsideVacancyList } from '../../components/blocks/AsideVacancyList/AsideVacancyList';
import { Banner, Company, Vacancy } from '../../types';
import { vacancyMock } from '../../mocks';
const CSS = require('./VacancyPage.styl');

interface VacancyPageProps {
    vacancy: Vacancy;
    banner?: Banner;
    company: Company;
}

interface VacancyAddress {
    color: string;
    station: string;
    coord: string;
    address: string;
}

export class VacancyPage extends React.PureComponent<VacancyPageProps> {
    render() {
        const date = moment(this.props.vacancy.publishedDate).format('DD MMMM YYYY');
        const vacancyDescription = this.props.vacancy.textDescription
            .trim()
            .split('\n')
            .map((part, index) => <p key={index}>{he.decode(part)}</p>);

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
                    <Link to={this.props.company.link || '#'} className={CSS.companyLink}>
                        <img
                            src={this.props.company.logo}
                            alt="logo"
                            className={CSS.companyLogo}
                        />
                        <div className={CSS.companyTitle}>{this.props.company.brend}</div>
                        <div className={CSS.companyVacancies}>
                            {this.props.company.vacancyPublished.length}
                            {__t('activeVacancies', { count: this.props.company.vacancyPublished.length })}
                        </div>
                    </Link>
                    <div className={CSS.companyCity}>{this.props.company.city.name}</div>
                    <BlueButton className={CSS.applyButton}>{__t('vacancyPage.recall')}</BlueButton>
                    <GreenButton className={CSS.showPhoneButton}>{__t('vacancyPage.showPhone')}</GreenButton>
                    <time className={CSS.dateAndNumber}>{date} №{this.props.vacancy.number}</time>
                </AsideLeftContainer>

                <MainContainer>
                    <header className={classNames(CSS.mainHeader, { [CSS.mainHeaderHot]: this.props.vacancy.isHot })}>
                        <h1 className={CSS.vacancyTitle}>{this.props.vacancy.title}</h1>
                        <div className={CSS.salary}>{this.props.vacancy.salaryText}</div>

                        {this.props.vacancy.isHot && <div className={classNames(CSS.headerSpecial, CSS.headerSpecialHot)}>
                            {__t('vacancyPage.hot')}
                        </div>}

                        {this.props.vacancy.isRecommended && <div className={classNames(CSS.headerSpecial, CSS.headerSpecialRecommended)}>
                            {__t('vacancyPage.recommended')}
                        </div>}

                        {this.props.vacancy.isActive && <div className={classNames(CSS.headerSpecial, CSS.headerSpecialActive)}>
                            {__t('vacancyPage.active')}
                        </div>}
                    </header>

                    {!!this.props.vacancy.params.length &&
                        <ul className={CSS.descriptionList}>
                            {this.props.vacancy.params.map((param: string[], index) => {
                                return (
                                    <li className={CSS.descriptionItem} key={index}>
                                        <span className={CSS.descriptionItemTitle}>{param[0]}:</span>
                                        {param[1]}
                                    </li>
                                );
                            })}
                        </ul>
                    }

                    <section className={CSS.about}>
                        <h2 className={CSS.aboutTitle}>{__t('vacancyPage.description')}</h2>
                        {vacancyDescription}
                    </section>

                    {!!this.props.company.photoSet.length && <section className={CSS.photos}>
                        <Gallery images={this.props.company.photoSet} />
                    </section>}

                    {hasAdresses && <section className={CSS.map}>
                        <h2 className={CSS.mapTitle}>Адреса</h2>
                        <AddressesList addresses={this.props.vacancy.addressesList}/>
                        {vacancyCoords && <MapBlock coords={vacancyCoords} />}
                    </section>}
                </MainContainer>

                <AsideRightContainer>
                    <AsideVacancyList vacancies={[vacancyMock, vacancyMock, vacancyMock]}/>
                    {this.props.banner && <VerticalBanner href={this.props.banner.href} img={this.props.banner.img}/>}
                    <MobileAppBlock className={CSS.mobileAppBlock}/>
                </AsideRightContainer>

            </ColumnsPageContainer>
        );
    }
}
