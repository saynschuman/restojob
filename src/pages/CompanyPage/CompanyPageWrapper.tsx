import * as React from 'react';
import { CompanyPage } from './CompanyPage';
import {
    vacancyMock,
    vacancyMockActive,
    vacancyMockHot,
    vacancyMockRecommended,
} from '../../mocks';

export class CompanyPageWrapper extends React.PureComponent {
    render() {
        return (
            <CompanyPage
                banner={{
                    href: '#',
                    img: 'http://restojob.ru/media/banner/files1/iphonebaaner.jpg',
                }}
                vacancies={[vacancyMock, vacancyMockHot, vacancyMockRecommended, vacancyMockActive]}
            />
        );
    }
}
