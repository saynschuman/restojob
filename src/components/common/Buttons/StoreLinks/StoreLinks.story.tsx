import * as React from 'react';
import storybookReactRouter from 'storybook-react-router';
import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { AppStoreLink, AppStoreLinkSmall, GooglePlayLink, GooglePlayLinkSmall } from './StoreLinks';
import { PageContainer } from '../../../LayoutContainers/PageContainer/PageContainer';

const stories = storiesOf('Кнопки', module);
stories.addDecorator(withKnobs);
stories.addDecorator(storybookReactRouter());

stories
    .add('Кнопки магазинов', () => <SocialButtonsStory />);

const SocialButtonsStory = () => {
    return (
        <div>
            <PageContainer>
                <br/>
                <AppStoreLink />
                <br/>
                <br/>
                <GooglePlayLink />
                <br/>
                <br/>
                <AppStoreLinkSmall />
                <br/>
                <br/>
                <GooglePlayLinkSmall />
                <br/>
                <br/>
            </PageContainer>
        </div>
    );
};
