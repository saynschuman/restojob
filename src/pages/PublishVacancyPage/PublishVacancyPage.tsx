import * as React from 'react';
import { Link } from 'react-router-dom';
import * as classNames from 'classnames';
import { VerticalBanner } from '../../components/common/VerticalBanner/VerticalBanner';
import { MobileAppBlock } from '../../components/common/MobileAppBlock/MobileAppBlock';
import { AsideRightContainer } from '../../components/LayoutContainers/AsideRightContainer/AsideRightContainer';
import { MainContainerBig } from '../../components/LayoutContainers/MainContainer/MainContainer';
import { ColumnsPageContainer } from '../../components/LayoutContainers/PageContainer/PageContainer';
import { Address, Banner } from '../../types';
import { PageTitle } from '../../components/common/PageTitle/PageTitle';
import { NewAddressForm } from './AddAddressForm/NewAddressForm';
import { PlaceRadio } from './PlaceRadio/PlaceRadio';
import { CategorySelect } from './CategorySelect/CategorySelect';
import { categoryMock } from '../../mocks';
import { InputCheckbox } from '../../components/common/InputCheckbox/InputCheckbox';
import { InputRadio } from '../../components/common/InputRadio/InputRadio';
import { PercentCheckbox, TipsCheckbox } from './SalaryCheckboxes/SalaryCheckboxes';
import { VacancyType, VacancyTypeProps } from './VacancyType/VacancyType';
import { BlueButton } from '../../components/common/Buttons/BlueButton/BlueButton';
const CSS = require('./PublishVacancyPage.styl');

interface PublishVacancyPageProps {
    banner?: Banner;
    places: {title: string; city: string}[];
    addresses: Address[];
    onAddressAdd(): any;
    isEnoughMoney: boolean;
}

interface PublishVacancyPageState {
    newAddressFormVisible?: boolean;
    otherRequirementsVisible?: boolean;
}

export class PublishVacancyPage extends React.PureComponent<PublishVacancyPageProps, PublishVacancyPageState> {

    state = {
        newAddressFormVisible: false,
        otherRequirementsVisible: false,
    };

    showAddAddressForm = () => {
        this.setState({ newAddressFormVisible: true });
    }

    hideAddAddressForm = () => {
        this.setState({ newAddressFormVisible: false });
    }

    showOtherRequirements = () => {
        this.setState({ otherRequirementsVisible: true });
    }

    hideOtherRequirements = () => {
        this.setState({ otherRequirementsVisible: false });
    }

    submit = () => {
        return false;
    }

    render() {
        return (
            <ColumnsPageContainer>
                <MainContainerBig>
                    <PageTitle text={__t('publishVacancyPage.title')}/>
                    <form action="#" className={CSS.form} onSubmit={this.submit}>

                        <fieldset className={CSS.fieldset}>
                            <h2 className={CSS.smallTitle}>{__t('publishVacancyPage.listItem1')}</h2>
                            <div className={CSS.placesList}>
                                {this.props.places.map((place, index) => <PlaceRadio {...place} key={index}/>)}
                            </div>
                        </fieldset>

                        <fieldset className={CSS.fieldset}>
                            <h2 className={CSS.smallTitle}>{__t('publishVacancyPage.listItem2')}</h2>
                            <div className={CSS.addressesList}>
                                {this.props.addresses.map((address, index) => (
                                    <InputCheckbox title={address.address} key={index} className={CSS.addressCheckbox}/>
                                ))}
                            </div>
                            {!this.state.newAddressFormVisible &&
                                <div
                                    className={CSS.addAddressButton}
                                    onClick={this.showAddAddressForm}
                                >
                                    {__t('publishVacancyPage.addAddress')}
                                </div>
                            }
                            {this.state.newAddressFormVisible &&
                                <NewAddressForm
                                    onAdd={() => {
                                        this.hideAddAddressForm();
                                        this.props.onAddressAdd();
                                    }}
                                    onCancel={this.hideAddAddressForm}
                                />
                            }
                        </fieldset>

                        <fieldset className={classNames(CSS.fieldset, CSS.invalid)}>
                            <h2 className={CSS.smallTitle}>{__t('publishVacancyPage.listItem3')}</h2>
                            <CategorySelect categories={categoryMock} />
                        </fieldset>

                        <fieldset className={CSS.fieldset}>
                            <h2 className={CSS.smallTitle}>{__t('publishVacancyPage.listItem4')}</h2>
                            <div className={CSS.workExperienceList}>
                                <InputRadio
                                    title={__t('publishVacancyPage.workExperience1')}
                                    name={'workExperience'}
                                    className={CSS.workExperienceInput}
                                />
                                <InputRadio
                                    title={__t('publishVacancyPage.workExperience2')}
                                    name={'workExperience'}
                                    className={CSS.workExperienceInput}
                                />
                                <InputRadio
                                    title={__t('publishVacancyPage.workExperience3')}
                                    name={'workExperience'}
                                    className={CSS.workExperienceInput}
                                />
                                <InputRadio
                                    title={__t('publishVacancyPage.workExperience4')}
                                    name={'workExperience'}
                                    className={CSS.workExperienceInput}
                                />
                            </div>
                        </fieldset>

                        <fieldset className={CSS.fieldset}>
                            <h2 className={CSS.smallTitle}>{__t('publishVacancyPage.listItem5')}</h2>
                            <textarea className={CSS.descriptionTextArea} />

                            <h3 className={CSS.descriptionSmallTitle}>{__t('publishVacancyPage.vacancyTitle')}</h3>
                            <input type={'text'} className={CSS.vacancyTitleInput} />

                            <h3 className={CSS.descriptionSmallTitle}>{__t('publishVacancyPage.salary')}</h3>
                            <div className={CSS.salaryContainer}>
                                <input type={'text'} className={CSS.salaryInput} />
                                -
                                <input type={'text'} className={CSS.salaryInput} />
                                <span className={CSS.salaryUnit}>{__t('publishVacancyPage.salaryCurrency')}</span>
                                + <TipsCheckbox /> <PercentCheckbox />

                            </div>

                            <h3 className={CSS.descriptionSmallTitle}>{__t('publishVacancyPage.schedule')}</h3>
                            <input type={'text'} className={CSS.scheduleInput} /> / <input type={'text'} className={CSS.scheduleInput} />
                        </fieldset>

                        <fieldset className={CSS.fieldset}>
                            <h2 className={CSS.smallTitle}>{__t('publishVacancyPage.listItem6')}</h2>
                            <div className={CSS.otherRequirementsText}>{__t('publishVacancyPage.otherRequirementsText')}</div>
                            {
                                this.state.otherRequirementsVisible
                                ?
                                    <>
                                        <div
                                            className={CSS.otherRequirementsToggle}
                                            onClick={this.hideOtherRequirements}
                                        >
                                            {__t('publishVacancyPage.otherRequirementsHide')}
                                        </div>
                                        <div className={CSS.otherRequirementsBlock}>
                                            <h3 className={CSS.otherRequirementsSmallTitle}>
                                                {__t('publishVacancyPage.otherReqEnglishTitle')}
                                            </h3>
                                            <InputRadio title={__t('publishVacancyPage.otherReqEnglishLevel1')} name={'englishLevel'} className={CSS.reqRadio}/>
                                            <InputRadio title={__t('publishVacancyPage.otherReqEnglishLevel2')} name={'englishLevel'} className={CSS.reqRadio}/>
                                            <InputRadio title={__t('publishVacancyPage.otherReqEnglishLevel3')} name={'englishLevel'} className={CSS.reqRadio}/>
                                            <InputRadio title={__t('publishVacancyPage.otherReqEnglishLevel4')} name={'englishLevel'} className={CSS.reqRadio}/>
                                        </div>
                                        <div className={CSS.otherRequirementsBlock}>
                                            <h3 className={CSS.otherRequirementsSmallTitle}>
                                                {__t('publishVacancyPage.otherReqCuisineTitle')}
                                            </h3>
                                            <InputCheckbox title={__t('publishVacancyPage.otherReqCuisineEurope')} className={CSS.reqCheckbox}/>
                                            <InputCheckbox title={__t('publishVacancyPage.otherReqCuisineRussian')} className={CSS.reqCheckbox}/>
                                            <InputCheckbox title={__t('publishVacancyPage.otherReqCuisineItalian')} className={CSS.reqCheckbox}/>
                                            <InputCheckbox title={__t('publishVacancyPage.otherReqCuisineJapan')} className={CSS.reqCheckbox}/>
                                            <InputCheckbox title={__t('publishVacancyPage.otherReqCuisineChina')} className={CSS.reqCheckbox}/>
                                            <InputCheckbox title={__t('publishVacancyPage.otherReqCuisineCaucasian')} className={CSS.reqCheckbox}/>
                                            <InputCheckbox title={__t('publishVacancyPage.otherReqCuisineFrench')} className={CSS.reqCheckbox}/>
                                            <InputCheckbox title={__t('publishVacancyPage.otherReqCuisineEastern')} className={CSS.reqCheckbox}/>
                                        </div>
                                        <div className={CSS.otherRequirementsBlock}>
                                            <h3 className={CSS.otherRequirementsSmallTitle}>
                                                {__t('publishVacancyPage.otherReqEducationTitle')}
                                            </h3>
                                            <InputRadio title={__t('publishVacancyPage.otherReqEducationLevel1')} name={'eduLevel'} className={CSS.reqRadio}/>
                                            <InputRadio title={__t('publishVacancyPage.otherReqEducationLevel2')} name={'eduLevel'} className={CSS.reqRadio}/>
                                            <InputRadio title={__t('publishVacancyPage.otherReqEducationLevel3')} name={'eduLevel'} className={CSS.reqRadio}/>
                                            <InputRadio title={__t('publishVacancyPage.otherReqEducationLevel4')} name={'eduLevel'} className={CSS.reqRadio}/>
                                        </div>
                                    </>
                                :
                                    <div
                                        className={CSS.otherRequirementsToggle}
                                        onClick={this.showOtherRequirements}
                                    >
                                        {__t('publishVacancyPage.otherRequirementsShow')}
                                    </div>
                            }
                        </fieldset>
                        <fieldset className={CSS.fieldset}>
                            <h2 className={CSS.smallTitle}>{__t('publishVacancyPage.listItem7')}</h2>
                            <div className={CSS.contactInputsContainer}>
                                <div className={CSS.contactInput}>
                                    <label className={CSS.contactInputLabel} htmlFor={'contactsName'}>{__t('publishVacancyPage.contactsName')}</label>
                                    <input type="text" className={CSS.contactInputName} id={'contactsName'}/>
                                </div>
                                <div className={CSS.contactInput}>
                                    <label className={CSS.contactInputLabel} htmlFor={'contactsPhone'}>{__t('publishVacancyPage.contactsPhone')}</label>
                                    <input type="tel" className={CSS.contactInputPhone} placeholder={'+7 (__)___-__-__'}  id={'contactsPhone'}/>
                                </div>
                            </div>
                            <InputCheckbox title={__t('publishVacancyPage.contactsCheckboxHidePhone')} className={CSS.contactCheckbox}/>
                            <InputCheckbox title={__t('publishVacancyPage.contactsCheckboxAllowNoResume')} className={CSS.contactCheckbox}/>
                            <InputCheckbox title={__t('publishVacancyPage.contactsCheckboxCreateTemplate')} className={CSS.contactCheckbox}/>
                        </fieldset>

                        <div className={CSS.vacancyTypeSelect}>
                            {!this.props.isEnoughMoney && <span className={CSS.notEnoughMoney} dangerouslySetInnerHTML={{ __html: __t('publishVacancyPage.notEnoughMoneyText') }} />}
                            <h2 className={CSS.smallTitle}>{__t('publishVacancyPage.publishWay')}</h2>
                            <ul className={CSS.vacancyTypesContainer}>
                                {vacancyTypes.map((vacancyType, index) => <VacancyType {...vacancyType} key={index}/>)}
                            </ul>
                        </div>

                        <BlueButton className={CSS.submitButton} isSubmit={true}>{__t('publishVacancyPage.submitButton')}</BlueButton>
                    </form>
                </MainContainerBig>

                <AsideRightContainer>
                    {this.props.banner && <VerticalBanner href={this.props.banner.href} img={this.props.banner.img}/>}
                    <MobileAppBlock className={CSS.mobileAppBlock}/>
                </AsideRightContainer>

            </ColumnsPageContainer>
        );
    }
}

const vacancyTypes: VacancyTypeProps[] = [
    {
        icon: require('./i/iconRocket.svg'),
        title: 'Интернет максимум',
        price: '1400 ₽',
        description: `Вакансия будет выделена и закреплена на 7 дней вверху списка вакансий + размещена в соц. сетях
        на аудиторию до 110 000 работников ресторанной индустрии`,
        isEnoughMoney: false,
    },
    {
        icon: require('./i/iconHot.svg'),
        title: 'Выделить и закрепить',
        price: '1100 ₽',
        description: `Вакансия выделяется и закрепляется вверху каталога всех вакансий и сроком на 7 дней. `,
        isEnoughMoney: false,
    },
    {
        icon: require('./i/iconActive.svg'),
        title: 'В активном поиске сутрудника',
        price: '750 ₽',
        description: `Вакансия один раз в день в течении 5 дней будет подниматься вверх каталога. Все это время она
        будет выделена иконкой и надписью “Работодатель активно ищет сотрудника”`,
        isEnoughMoney: false,
    },
    {
        icon: require('./i/iconGrayMan.svg'),
        title: 'Обычное размещение',
        price: '0 ₽',
        description: `Простая публикация в общем потоке. Поднять вакансию можно в любой момент, стоимость поднятия -
        150 ₽. В случае нарушения <a href="#">Правил публикации</a> - аккаунт будет заблокирован. Размещая вакансию вы
        подтверждаете, что принимаете правила.`,
        isEnoughMoney: true,
    },
];
