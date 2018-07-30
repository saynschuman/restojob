import * as React from 'react';
import * as classNames from 'classnames';
import { Link } from 'react-router-dom';
import { GreenButton } from '../../common/Buttons/GreenButton/GreenButton';
import { UserMenu } from '../UserMenu/UserMenu';
import { avatarMock } from '../../../mocks';
const logoSrc = require('./i/iconLogo.svg');
const CSS = require('./Header.styl');

interface HeaderProps {
    city: string;
}

export class Header extends React.PureComponent<HeaderProps> {
    render() {
        return (
            <div className={CSS.container}>
                <header className={CSS.header}>
                    <Link to={'/'} className={CSS.logoLink}>
                        <img src={logoSrc} alt="RESTOJOB.RU" className={CSS.logo}/>
                        <span className={CSS.city}>{this.props.city}</span>
                    </Link>

                    <div className={CSS.content}>
                        <Link to={__t('headerLinks.vacancies.link')} className={CSS.link}>{__t('headerLinks.vacancies.title')}</Link>
                        <Link to={__t('headerLinks.resume.link')} className={CSS.link}>{__t('headerLinks.resume.title')}</Link>
                        <Link to={__t('headerLinks.shop.link')} className={CSS.link}>{__t('headerLinks.shop.title')}</Link>
                        <UserMenu
                            avatar={avatarMock}
                            messagesCount={5}
                            balance={12000}
                            // isEmployer={true}
                        />
                    </div>
                </header>
            </div>
        );
    }
}
