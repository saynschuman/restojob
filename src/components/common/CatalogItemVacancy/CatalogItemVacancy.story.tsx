import * as React from 'react';
import storybookReactRouter from 'storybook-react-router';
import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { PageContainer } from '../../LayoutContainers/PageContainer/PageContainer';
import { addressMock, cityMock, companyMock, employeeMock, specializationMock, vacancyMock } from '../../../mocks';
import { Address, Employee, Vacancy } from '../../../types';
import { CatalogItemVacancy } from './CatalogItemVacancy';

const stories = storiesOf('Карточки каталога', module);
stories.addDecorator(withKnobs);
stories.addDecorator(storybookReactRouter());
stories.add('Вакансия', () => <Story />);

const Story = () => {

    const address: Address = {
        ...addressMock,
        station: text('Станция', addressMock.station),
        color: text('Цвет станции', addressMock.color),
        address: text('Адрес', addressMock.address),
    };

    const vacancy: Vacancy = {
        ...vacancyMock,
        title: text('Название', vacancyMock.title),
        isHot: boolean('горячая', false),
        isRecommended: boolean('рекомендуемая', false),
        isActive: boolean('работодатель активен', false),
        salaryText: text('Зарплата', vacancyMock.salaryText),
        addressesList: [address],
        company: {
            ...companyMock,
            brend: text('Название компании', companyMock.brend),
            logo: text('Логотип', companyMock.logo),
        },
        publishedDate:  text('Дата', '2018-06-11T13:03:35'),
    };

    return (
        <PageContainer>
            <div style={{ maxWidth: '500px' }}>
                <CatalogItemVacancy vacancy={vacancy} withoutBottomInfo={boolean('без адреса', false)}/>
            </div>
        </PageContainer>
    );
};
