import { i18next } from './localization/i18n';
i18next;
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as moment from 'moment';
import { Header } from './components/blocks/Header/Header';
import { VacancyPageWrapper } from './pages/VacancyPage/VacancyPageWrapper';
import { Footer } from './components/blocks/Footer/Footer';
import { CatalogPageWrapper } from './pages/CatalogPage/CatalogPageWrapper';
import { IndexPageWrapper } from './pages/IndexPage/IndexPageWrapper';
import { PublishVacancyPageWrapper } from './pages/PublishVacancyPage/PublishVacancyPageWrapper';
import { CompanyPageWrapper } from './pages/CompanyPage/CompanyPageWrapper';
moment.locale('ru');
//some changes

require('./styles/initial.styl');
ReactDOM.render(
    <Router>
        <>
            <Header city={'Санкт-Петербург'} />
            <Route exact={true} path="/" component={IndexPageWrapper} />
            <Route path="/vacancy" component={VacancyPageWrapper} />
            <Route path="/catalog" component={CatalogPageWrapper} />
            <Route path="/company" component={CompanyPageWrapper} />
            <Route path="/publishVacancy" component={PublishVacancyPageWrapper} />
            <Footer />
        </>
    </Router>,
    document.getElementById('app'),
);
