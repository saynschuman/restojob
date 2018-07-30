import * as React from 'react';
import storybookReactRouter from 'storybook-react-router';
import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { PageContainer } from '../../LayoutContainers/PageContainer/PageContainer';
import { CollapsibleText } from './CollapsibleText';

const stories = storiesOf('Разное', module);
stories.addDecorator(withKnobs);
stories.addDecorator(storybookReactRouter());
stories.add('Сворачиваемый текст', () => <Story />);

const Story = () => {
    return (
        <PageContainer>
            <CollapsibleText
                firstPart={text('Первая часть', 'Первая часть Первая часть Первая часть Первая часть Первая часть')}
                secondPart={text('Вторая часть', 'Вторая часть Вторая часть Вторая часть Вторая часть Вторая часть')}
            />
        </PageContainer>
    );
};
