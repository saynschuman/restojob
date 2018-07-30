import * as React from 'react';
import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs/react';
import storybookReactRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { Gallery } from './Gallery';
import { PageContainer } from '../../LayoutContainers/PageContainer/PageContainer';

const stories = storiesOf('Слайдеры', module);
stories.addDecorator(withKnobs);
stories.addDecorator(storybookReactRouter());
stories.add('Слайдер-галерея', () => <GalleryStory />);

const image1 = require('../../../assets/images/mocks/slide1.jpg');
const image2 = require('../../../assets/images/mocks/slide2.jpg');
const image3 = require('../../../assets/images/mocks/slide3.jpg');
const image4 = require('../../../assets/images/mocks/slide4.jpg');
const image5 = require('../../../assets/images/mocks/slide5.jpg');

export const GalleryStory = () => {
    return (
        <PageContainer>
            <Gallery images={[image1, image2, image3, image4, image5]}/>
        </PageContainer>
    );
};
