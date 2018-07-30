import * as React from 'react';
import { PublishVacancyPage } from './PublishVacancyPage';
import { addressMock, bannerMock, placeMock } from '../../mocks';

export class PublishVacancyPageWrapper extends React.PureComponent {
    render() {
        return (
            <PublishVacancyPage
                banner={bannerMock}
                places={[placeMock, placeMock, placeMock, placeMock, placeMock, placeMock]}
                addresses={[addressMock]}
                onAddressAdd={() => {}}
                isEnoughMoney={false}
            />
        );
    }
}
