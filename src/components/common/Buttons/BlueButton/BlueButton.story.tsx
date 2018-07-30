import * as React from 'react';
import storybookReactRouter from 'storybook-react-router';
import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { BlueButton } from './BlueButton';
import { PageContainer } from '../../../LayoutContainers/PageContainer/PageContainer';

const stories = storiesOf('Кнопки', module);
stories.addDecorator(withKnobs);
stories.addDecorator(storybookReactRouter());
stories.add('Синяя кнопка', () => <ButtonsStory />);

const ButtonsStory = () => {
    return (
        <PageContainer>
            <br/>
            <BlueButton>{text('Текст', 'Синяя кнопка')}</BlueButton>
            <br/>
        </PageContainer>
    );
};
