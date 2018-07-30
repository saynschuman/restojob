import * as React from 'react';
import { VacancyPage } from './VacancyPage';
import { companyMock, vacancyMock, vacancyMockRecommended } from '../../mocks';

export class VacancyPageWrapper extends React.PureComponent {
    render() {
        return (
            <VacancyPage
                vacancy={vacancyMockRecommended}
                company={companyMock}
            />
        );
    }
}
