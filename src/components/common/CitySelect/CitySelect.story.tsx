import * as React from 'react';
import storybookReactRouter from 'storybook-react-router';
import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { PageContainer } from '../../LayoutContainers/PageContainer/PageContainer';
import { CitySelect } from './CitySelect';

const stories = storiesOf('Разное', module);
stories.addDecorator(withKnobs);
stories.addDecorator(storybookReactRouter());
stories.add('Выпадающий список', () => <Story />);

class Story extends React.PureComponent {

    state = {
        currentCity: 'msk',
    };

    render() {
        return (
            <PageContainer>
                <CitySelect
                    currentCity={this.state.currentCity}
                    cities={[
                        { value: 'msk', label: 'Москва' },
                        { value: 'spb', label: 'Санкт-Петербург' },
                        { value: 'sochi', label: 'Сочи' },
                        { value: 'kazan', label: 'Казань' },
                        { value: 'eburg', label: 'Екатеринбург' },
                        { value: 'rostov', label: 'Ростов' },
                    ]}
                    onChange={(city) => {
                        this.setState({ currentCity: city.value });
                    }}
                />
            </PageContainer>
        );
    }

}
