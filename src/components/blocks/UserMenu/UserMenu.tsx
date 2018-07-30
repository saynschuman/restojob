import * as React from 'react';
import * as classNames from 'classnames';
import { Link } from 'react-router-dom';
import { GreenButton } from '../../common/Buttons/GreenButton/GreenButton';
const CSS = require('./UserMenu.styl');

interface UserMenuProps {
    avatar?: string;
    isEmployee?: boolean;
    isEmployer?: boolean;
    messagesCount?: number;
    applicationsCount?: number;
    invitationsCount?: number;
    balance?: number;
}

export class UserMenu extends React.PureComponent<UserMenuProps> {

    renderEmployeeMenu() {
        return (
            <div className={CSS.userMenu}>
                <Link className={classNames(CSS.iconLink, CSS.iconLinkAvatar)} to={__t('userMenu.avatarLink')}>
                    {this.props.avatar &&
                        <span className={CSS.avatarContainer}>
                            <img src={this.props.avatar} alt="avatar" className={CSS.avatar}/>
                        </span>
                    }
                </Link>
                <Link className={classNames(CSS.iconLink, CSS.iconLinkMessages)} to={__t('userMenu.messagesLink')}>
                    {!!this.props.messagesCount && <IconNumber count={this.props.messagesCount} />}
                </Link>
                <Link className={classNames(CSS.iconLink, CSS.iconLinkInvitations)} to={__t('userMenu.invitationsLink')}>
                    {!!this.props.invitationsCount && <IconNumber count={this.props.invitationsCount} />}
                </Link>
                <Link className={classNames(CSS.iconLink, CSS.iconLinkFavorites)} to={__t('userMenu.favoritesLink')}/>
                <Link className={classNames(CSS.iconLink, CSS.iconLinkMenu)} to={__t('userMenu.menuLink')}/>
            </div>
        );
    }

    renderEmployerMenu() {
        return (
            <div className={CSS.userMenu}>
                <Link className={classNames(CSS.iconLink, CSS.iconLinkAvatar)} to={__t('userMenu.avatarLink')}>
                    {this.props.avatar &&
                        <span className={CSS.avatarContainer}>
                            <img src={this.props.avatar} alt="avatar" className={CSS.avatar}/>
                        </span>
                    }
                </Link>
                <Link className={classNames(CSS.iconLink, CSS.iconLinkInvitations)} to={__t('userMenu.invitationsLink')}>
                    {!!this.props.invitationsCount && <IconNumber count={this.props.invitationsCount} />}
                </Link>
                <Link className={classNames(CSS.iconLink, CSS.iconLinkApplications)} to={__t('userMenu.applicationsLink')}>
                    {!!this.props.applicationsCount && <IconNumber count={this.props.applicationsCount} />}
                </Link>
                <Link className={classNames(CSS.iconLink, CSS.iconLinkFavorites)} to={__t('userMenu.favoritesLink')}/>

                <div className={CSS.balance}>
                    <span className={CSS.balanceTitle}>{__t('userMenu.balance')}</span>
                    <span className={CSS.balanceCount}>{this.props.balance || 0} ₽</span>
                </div>

                <Link className={classNames(CSS.iconLink, CSS.iconLinkMenu)} to={__t('userMenu.menuLink')}/>
            </div>
        );
    }

    render() {
        if (this.props.isEmployee) {
            return this.renderEmployeeMenu();
        }

        if (this.props.isEmployer) {
            return this.renderEmployerMenu();
        }

        return (
            <>
                <GreenButton className={CSS.button}><Link to={__t('userMenu.loginLink')} />{__t('userMenu.loginLinkTitle')}</GreenButton>
                <GreenButton className={CSS.button}><Link to={__t('userMenu.publishLink')} />{__t('userMenu.publishLinkTitle')}</GreenButton>
            </>
        );
    }
}

const IconNumber: React.SFC<{count: number}> = (props) => {
    return (
        <span
            className={classNames(
                CSS.number,
                { [CSS.numberBig]: props.count > 9 },
                { [CSS.numberExtremelyBig]: props.count > 99 },
            )}
        >
            {props.count <= 99 ? props.count : '99+'}
        </span>
    );
};
