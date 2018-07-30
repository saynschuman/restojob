import * as React from 'react';
import storybookReactRouter from 'storybook-react-router';
import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { PageContainer } from '../../LayoutContainers/PageContainer/PageContainer';
import { CompanyTeaser } from './CompanyTeaser';
import { companyMock } from '../../../mocks';
import { MainContainer } from '../../LayoutContainers/MainContainer/MainContainer';

const stories = storiesOf('Разное', module);
stories.addDecorator(withKnobs);
stories.addDecorator(storybookReactRouter());
stories.add('Баннер компании', () => <Story />);

const Story = () => {
    return (
        <PageContainer>
            <MainContainer>
                <CompanyTeaser
                    brendLogo={text('Логотип', companyMock.logo)}
                    brendTitle={text('Название', 'White Rabbit Family')}
                    text={text('Текст', `На работу лучше ходить с радостью. Талантливая команда, отличные условия
                    работы, и профессиональный рост ждут новых сотрудников WRF`)}
                    href={'#'}
                />
            </MainContainer>
        </PageContainer>
    );
};
