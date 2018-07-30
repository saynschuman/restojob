import * as React from 'react';
import storybookReactRouter from 'storybook-react-router';
import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { PageContainer } from '../../LayoutContainers/PageContainer/PageContainer';
import { AsideCompanyBlock } from './AsideCompanyBlock';
import {
    cityMock, companyMock,
    vacancyMock,
} from '../../../mocks';
import { Company } from '../../../types';
import { AsideLeftContainer } from '../../LayoutContainers/AsideLeftContainer/AsideLeftContainer';

const stories = storiesOf('Разное', module);
stories.addDecorator(withKnobs);
stories.addDecorator(storybookReactRouter());
stories.add('Блок компании в сайдбаре', () => <Story />);

const Story = () => {
    const vacancies = Array.from({ length: number('Количество вакансий', 3) }).map(a => vacancyMock);

    const company: Company = {
        ...companyMock,
        brend: text('Название', companyMock.brend),
        logo: text('Логотип', companyMock.logo),
        city: cityMock,
        vacancyPublished: vacancies.slice(0, 6),
    };

    return (
        <PageContainer>
            <AsideLeftContainer>
                <br/>
                <AsideCompanyBlock company={company}/>
                <br/>
            </AsideLeftContainer>
        </PageContainer>
    );
};
