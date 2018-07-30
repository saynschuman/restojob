import * as React from 'react';
import storybookReactRouter from 'storybook-react-router';
import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { PageContainer } from '../../LayoutContainers/PageContainer/PageContainer';
import { MobileAppBlock } from './MobileAppBlock';

const stories = storiesOf('Разное', module);
stories.addDecorator(withKnobs);
stories.addDecorator(storybookReactRouter());
stories.add('Реклама приложений', () => <Story />);

const Story = () => {
    return (
        <PageContainer>
            <div style={{ width: '400px', maxWidth: '100%' }}>
                <MobileAppBlock withBg={boolean('с картинкой', true)}/>
            </div>
        </PageContainer>
    );
};
