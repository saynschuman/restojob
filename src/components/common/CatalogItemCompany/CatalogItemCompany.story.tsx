import * as React from 'react';
import storybookReactRouter from 'storybook-react-router';
import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { PageContainer } from '../../LayoutContainers/PageContainer/PageContainer';
import {
    addressMock,
    cityMock, companyMock,
    vacancyMock,
    vacancyMockHot,
    vacancyMockLong,
    vacancyMockRecommended,
} from '../../../mocks';
import { Address, Company } from '../../../types';
import { AsideLeftContainer } from '../../LayoutContainers/AsideLeftContainer/AsideLeftContainer';
import { CatalogItemCompany } from './CatalogItemCompany';

const stories = storiesOf('Карточки каталога', module);
stories.addDecorator(withKnobs);
stories.addDecorator(storybookReactRouter());
stories.add('Компания', () => <Story />);

const Story = () => {
    const vacancies = Array.from({ length: number('Количество вакансий', 3) }).map(a => vacancyMock);

    const company: Company = {
        ...companyMock,
        brend: text('Название', companyMock.brend),
        logo: text('Логотип', companyMock.logo),
        city: {
            ...cityMock,
            name: text('Город', cityMock.name),
        },
        vacancyPublished: vacancies.slice(0, 6).map(vacancy => ({
            ...vacancy,
            title: text('Название вакансии', vacancy.title),
        })),
    };

    return (
        <PageContainer>
            <div style={{ maxWidth: '500px' }}>
                <CatalogItemCompany company={company}/>
            </div>
        </PageContainer>
    );
};
