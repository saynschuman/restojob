import * as React from 'react';
import storybookReactRouter from 'storybook-react-router';
import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { PageContainer } from '../../LayoutContainers/PageContainer/PageContainer';
import { employeeMock } from '../../../mocks';
import { Employee } from '../../../types';
import { CatalogItemEmployee } from './CatalogItemEmployee';

const stories = storiesOf('Карточки каталога', module);
stories.addDecorator(withKnobs);
stories.addDecorator(storybookReactRouter());
stories.add('Работник', () => <Story />);

const Story = () => {

    const employee: Employee = {
        name: text('Имя', employeeMock.name),
        vacancy: text('Должность', employeeMock.vacancy),
        salary: text('Зарплата', employeeMock.salary),
        photo: text('Фото', employeeMock.photo),
    };

    return (
        <PageContainer>
            <div style={{ maxWidth: '300px' }}>
                <CatalogItemEmployee employee={employee}/>
            </div>
        </PageContainer>
    );
};
