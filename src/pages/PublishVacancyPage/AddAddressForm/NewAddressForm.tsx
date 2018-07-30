import * as React from 'react';
import { MapBlock } from '../../../components/common/MapBlock/MapBlock';
import { BlueButton } from '../../../components/common/Buttons/BlueButton/BlueButton';
import { RedButton } from '../../../components/common/Buttons/RedButton/RedButton';
import * as classNames from 'classnames';
const CSS = require('./NewAddressForm.styl');

interface NewAddressFormProps {
    onAdd(): any;
    onCancel(): any;
}

interface NewAddressFormState {
    isValid?: boolean;
    value?: string;
    coords?: string;
}

export class NewAddressForm extends React.PureComponent<NewAddressFormProps, NewAddressFormState> {

    state = {
        isValid: true,
        textValue: '',
        coords: '55.730786,37.631424',
    };

    onChange = (val) => {
        console.log(val);
        this.setState({ isValid: !!val.length });
    }

    onSubmit = () => {
        if (!this.state.isValid) {
            return;
        }

        this.props.onAdd();
    }

    onMapClick = (coords: string[]) => {
        this.setState({
            coords: coords.join(','),
        });
    }

    render() {
        return (
            <div className={CSS.newAddressForm}>
                <div className={CSS.newAddressFormTitle}>{__t('publishVacancyPage.addAddressFormTitle')}</div>
                <input
                    type="text"
                    className={classNames(CSS.newAddressFormInput, { [CSS.invalid]: !this.state.isValid })}
                    onChange={e => this.onChange((e.nativeEvent.target as any).value)}
                />
                <div className={CSS.newAddressFormMapContainer}>
                    <MapBlock coords={[this.state.coords]} className={CSS.map} onClick={this.onMapClick}/>
                    <div className={CSS.mapTextBlock}>
                        <div className={CSS.mapTextTitle}>{__t('publishVacancyPage.mapTextTitle1')}</div>
                        <div className={CSS.mapText} dangerouslySetInnerHTML={{ __html: __t('publishVacancyPage.mapText1') }} />
                        <div className={CSS.mapTextTitle}>{__t('publishVacancyPage.mapTextTitle2')}</div>
                        <div className={CSS.mapText} dangerouslySetInnerHTML={{ __html: __t('publishVacancyPage.mapText2') }} />
                    </div>
                </div>
                <div className={CSS.mapButtonsBlock}>
                    <BlueButton onClick={this.onSubmit} className={CSS.bottomButton}>{__t('publishVacancyPage.mapButtonAddAddress')}</BlueButton>
                    <RedButton onClick={this.props.onCancel} className={CSS.bottomButton}>{__t('publishVacancyPage.mapButtonCancel')}</RedButton>
                </div>
            </div>
        );
    }
}
