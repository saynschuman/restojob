import * as React from 'react';
import { IndexPage } from './IndexPage';
import { companyMock, employeeMock, vacancyMock, vacancyMockHot, vacancyMockLong } from '../../mocks';

export class IndexPageWrapper extends React.PureComponent {
    render() {
        return (
            <IndexPage
                bestCompanies={[
                    companyMock, companyMock, companyMock,
                    companyMock, companyMock, companyMock,
                    companyMock, companyMock, companyMock,
                ]}
                hotVacancies={[
                    vacancyMockHot, vacancyMockHot, vacancyMockHot,
                    vacancyMockHot, vacancyMockHot, vacancyMockHot,
                ]}
                employeesBar={[employeeMock, employeeMock, employeeMock]}
                employeesKitchen={[employeeMock, employeeMock, employeeMock]}
                employeesManagement={[employeeMock, employeeMock, employeeMock]}

                vacanciesCount={'4 800'}
                employersCount={'11 230'}
                employeesCount={'81 230'}

                cityString={'Санкт-Петербурге'}
            />
        );
    }
}
