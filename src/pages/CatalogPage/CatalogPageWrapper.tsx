import * as React from 'react';
import { CatalogPage } from './CatalogPage';
import { vacancyMock, vacancyMockActive, vacancyMockHot, vacancyMockRecommended } from '../../mocks';

export class CatalogPageWrapper extends React.PureComponent {

    render() {
        return (
            <CatalogPage
                banner={{
                    href: '#',
                    img: 'http://restojob.ru/media/banner/files1/iphonebaaner.jpg',
                }}
                vacancies={[vacancyMock, vacancyMockHot, vacancyMockRecommended, vacancyMockActive]}
            />
        );
    }
}
