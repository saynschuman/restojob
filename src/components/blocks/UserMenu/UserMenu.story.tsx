import * as React from 'react';
import storybookReactRouter from 'storybook-react-router';
import { withKnobs, text, boolean, number, array, select } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { UserMenu } from './UserMenu';
import { PageContainer } from '../../LayoutContainers/PageContainer/PageContainer';

const stories = storiesOf('Разное', module);
stories.addDecorator(withKnobs);
stories.addDecorator(storybookReactRouter());
stories.add('Меню', () => <Story />);

const Story = () => {

    const value: any = select(
        'Статус юзера',
        {
            employee: 'Работник',
            employer: 'Работодатель',
            unregistered: 'Не зарегистрирован',
        }, 'unregistered');

    return (
        <PageContainer>
            <br/>
            <UserMenu
                avatar={text('Фото', 'http://restojob.ru/media/cache/f8/1e/f81ed86a5106e1567993e23ec8965beb.jpg')}
                messagesCount={number('Количество сообщений', 3)}
                balance={number('Баланс', 100)}
                isEmployee={value === 'employee'}
                isEmployer={value === 'employer'}
                applicationsCount={number('Количество откликов', 3)}
                invitationsCount={number('Количество приглашений', 3)}
            />
            <br/>
        </PageContainer>
    );
};
