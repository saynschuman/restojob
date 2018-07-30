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
                    img: 'http://via.placeholder.com/240x400',
                }}
                imgsrc={'http://via.placeholder.com/220x220'}
                vacancies={[vacancyMock, vacancyMockHot, vacancyMockRecommended, vacancyMockActive]}
            />
        );
    }
}
