import * as React from 'react';
import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import storybookReactRouter from 'storybook-react-router';
import { SelectFilters } from './SelectFilters';
import { PageContainer } from '../../LayoutContainers/PageContainer/PageContainer';

export const catalogFilters = [
    { value: '1', title: 'Кухня' },
    { value: '2', title: 'Бар' },
    { value: '3', title: 'Управление' },
    { value: '4', title: 'Другое' },
    { value: '5', title: '5' },
    { value: '6', title: '6' },
    { value: '7', title: '7' },
    { value: '8', title: '8' },
];

const stories = storiesOf('Разное', module);
stories.addDecorator(withKnobs);
stories.addDecorator(storybookReactRouter());
stories.add('Фильтры', () => <SelectFiltersStory />);

export class SelectFiltersStory extends React.Component<any, any> {

    state = {
        filters: Array
            .from({ length: number('количество фильтров', 3) })
            .map((f, index) => catalogFilters[index] || catalogFilters[0])
            .splice(0, 8),
        activeFilter: null,
    };

    toggleFilter = (filter) => {
        const newFilter = filter === this.state.activeFilter ? null : filter;

        this.setState({
            activeFilter: newFilter,
        });
    }

    render() {
        const filters =  Array
            .from({ length: number('количество фильтров', 3) })
            .map((f, index) => catalogFilters[index] || catalogFilters[1]);
        filters[0].title = text('Название фильтра', 'Кухня');

        return (
            <PageContainer>
                <div style={{ width: '200px' }}>
                    <SelectFilters
                        filters={filters}
                        value={this.state.activeFilter}
                        onChange={this.toggleFilter}
                    />
                </div>
            </PageContainer>
        );
    }
}
