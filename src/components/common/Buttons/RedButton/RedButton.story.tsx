import * as React from 'react';
import storybookReactRouter from 'storybook-react-router';
import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { RedButton } from './RedButton';
import { PageContainer } from '../../../LayoutContainers/PageContainer/PageContainer';

const stories = storiesOf('Кнопки', module);
stories.addDecorator(withKnobs);
stories.addDecorator(storybookReactRouter());
stories.add('Красная кнопка', () => <ButtonsStory />);

const ButtonsStory = () => {
    return (
        <PageContainer>
            <br/>
            <RedButton>{text('Текст', 'Красная кнопка')}</RedButton>
            <br/>
        </PageContainer>
    );
};
