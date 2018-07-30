import * as React from 'react';
import storybookReactRouter from 'storybook-react-router';
import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { PageContainer } from '../../LayoutContainers/PageContainer/PageContainer';
import { AddressesList } from './AddressesList';
import { addressMock } from '../../../mocks';
import { Address } from '../../../types';

const stories = storiesOf('Разное', module);
stories.addDecorator(withKnobs);
stories.addDecorator(storybookReactRouter());
stories.add('Список адресов', () => <Story />);

const Story = () => {
    const address: Address = {
        coord: text('Координаты', addressMock.coord),
        station: text('Станция', addressMock.station),
        color: text('Цвет станции', addressMock.color),
        address: text('Адрес', addressMock.address),
    };

    const addresses = Array.from({ length: number('Количество адресов', 3) }).map(a => address);

    return (
        <PageContainer>
            <br/>
            <AddressesList addresses={addresses}/>
            <br/>
        </PageContainer>
    );
};
