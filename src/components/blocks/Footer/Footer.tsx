import * as React from 'react';
import { Link } from 'react-router-dom';
import * as classNames from 'classnames';
import {
    AppStoreLinkSmall,
    GooglePlayLinkSmall,
} from '../../common/Buttons/StoreLinks/StoreLinks';
import { MobileAppBlock } from '../../common/MobileAppBlock/MobileAppBlock';
const CSS = require('./Footer.styl');
const logoImg = require('./i/logoWhite.svg');

export const Footer: React.SFC = () => {
    console.log(__t('footerLinks.partners.link'));
    return (
        <footer className={CSS.footer}>
            <div className={CSS.footerContent}>
                <div className={CSS.topBlock}>
                    <section className={CSS.leftColumn}>
                        <h1 className={CSS.sectionTitle}>
                            {__t('footerRecommendTitle')}
                        </h1>
                        <p className={CSS.sectionText}>
                            {__t('footerRecommendText')}
                        </p>
                    </section>

                    <section className={classNames(CSS.centerColumn, CSS.installAppBlock)}>
                        <MobileAppBlock className={CSS.mobileAppBlock} withBg={true}/>
                    </section>

                    <section className={CSS.rightColumn}>
                        <h1 className={CSS.sectionTitle}>
                            {__t('footerSocialTitle')}
                        </h1>
                        <p className={CSS.sectionText}>
                            {__t('footerSocialText')}
                        </p>
                        <div className={CSS.socialLinks}>
                            <a target={'_blank'} href={__t('footerSocialLinkVk')} className={classNames(CSS.socialLink, CSS.socialLinkVk)} />
                            <a target={'_blank'} href={__t('footerSocialLinkFb')} className={classNames(CSS.socialLink, CSS.socialLinkFb)} />
                            <a href={__t('footerSocialLinkIn')} className={classNames(CSS.socialLink, CSS.socialLinkIn)} />
                        </div>
                    </section>
                </div>

                <div className={CSS.bottomBlock}>
                    <Link className={classNames(CSS.leftColumn, CSS.logoBlock)} to={'/'}>
                        <img src={logoImg} alt="logo" className={CSS.logo}/>
                        <span className={CSS.allRightReserved}>{__t('allRightReserved')}</span>
                    </Link>

                    <nav className={classNames(CSS.centerColumn, CSS.nav)}>
                        <div className={CSS.navColumn}>
                            <h2 className={CSS.navTitle}>Услуги</h2>
                            <Link to={__t('footerLinks.price.link')} className={CSS.navLink}>{__t('footerLinks.price.title')}</Link>
                        </div>
                        <div className={CSS.navColumn}>
                            <h2 className={CSS.navTitle}>Restojob</h2>
                            <Link to={__t('footerLinks.partners.link')} className={CSS.navLink}>{__t('footerLinks.partners.title')}</Link>
                            <Link to={__t('footerLinks.map.link')} className={CSS.navLink}>{__t('footerLinks.map.title')}</Link>
                            <Link to={__t('footerLinks.archive.link')} className={CSS.navLink}>{__t('footerLinks.archive.title')}</Link>
                            <Link to={__t('footerLinks.contacts.link')} className={CSS.navLink}>{__t('footerLinks.contacts.title')}</Link>
                        </div>
                        <div className={CSS.navColumn}>
                            <h2 className={CSS.navTitle}>Работодателям</h2>
                            <Link to={__t('footerLinks.resumeCatalog.link')} className={CSS.navLink}>{__t('footerLinks.resumeCatalog.title')}</Link>
                            <Link to={__t('footerLinks.searchCook.link')} className={CSS.navLink}>{__t('footerLinks.searchCook.title')}</Link>
                            <Link to={__t('footerLinks.searchWaiter.link')} className={CSS.navLink}>{__t('footerLinks.searchWaiter.title')}</Link>
                            <Link to={__t('footerLinks.searchBarmen.link')} className={CSS.navLink}>{__t('footerLinks.searchBarmen.title')}</Link>
                        </div>
                    </nav>

                    <nav className={classNames(CSS.rightColumn, CSS.nav)}>
                        <div className={CSS.navColumn}>
                            <h2 className={CSS.navTitle}>Соискателям</h2>
                            <Link to={__t('footerLinks.vacancyCatalog.link')} className={CSS.navLink}>{__t('footerLinks.vacancyCatalog.title')}</Link>
                            <Link to={__t('footerLinks.jobCook.link')} className={CSS.navLink}>{__t('footerLinks.jobCook.title')}</Link>
                            <Link to={__t('footerLinks.jobWaiter.link')} className={CSS.navLink}>{__t('footerLinks.jobWaiter.title')}</Link>
                            <Link to={__t('footerLinks.jobBarmen.link')} className={CSS.navLink}>{__t('footerLinks.jobBarmen.title')}</Link>
                        </div>
                    </nav>
                </div>
            </div>
        </footer>
    );
};
