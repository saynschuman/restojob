import * as React from 'react';
import storybookReactRouter from 'storybook-react-router';
import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { GreenButton } from './GreenButton';
import { PageContainer } from '../../../LayoutContainers/PageContainer/PageContainer';

const stories = storiesOf('Кнопки', module);
stories.addDecorator(withKnobs);
stories.addDecorator(storybookReactRouter());
stories.add('Зеленая кнопка', () => <ButtonsStory />);

const ButtonsStory = () => {
    return (
        <PageContainer>
            <br/>
            <GreenButton>{text('Текст', 'Зеленая кнопка')}</GreenButton>
            <br/>
        </PageContainer>
    );
};
