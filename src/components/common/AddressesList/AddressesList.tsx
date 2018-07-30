import * as React from 'react';
import * as classNames from 'classnames';
const CSS = require('./AddressesList.styl');
import * as ReactDOM from 'react-dom';
import { Lightbox } from 'react-images';
import { Address } from '../../../types';

export interface AddressesListProps {
    addresses: Address[];
}

interface AddressesListState {
    isOpen?: boolean;
}

export class AddressesList extends React.PureComponent<AddressesListProps, AddressesListState> {

    state = {
        isOpen: false,
    };

    close = () => this.setState({ isOpen: false });

    open = () => this.setState({ isOpen: true });

    render() {
        if (this.props.addresses.length > 1 && !this.state.isOpen) {
            return (
                <ul className={CSS.addressesList}>
                    <AddressesListItem {...this.props.addresses[0]}>
                        <span className={CSS.showButton} onClick={this.open}>
                            {` ${__t('addressesListMore')} ${this.props.addresses.length - 1}`}
                        </span>
                    </AddressesListItem>
                </ul>
            );
        }

        return (
            <ul className={CSS.addressesList}>
                {this.props.addresses.map((address, index) => <AddressesListItem {...address} key={index}/>)}
                {this.props.addresses.length > 1 && <li className={CSS.addressesListItem}>
                    <span className={CSS.closeButton} onClick={this.close}>{__t('addressesListHide')}</span>
                </li>}
            </ul>
        );
    }
}

const AddressesListItem: React.SFC<Address> = (props) => {
    return (
        <li
            className={classNames(
                CSS.addressesListItem,
                { [CSS.withMetro]: !!props.station },
            )}
        >
            {props.station && <span className={CSS.metro}>
                {props.color &&
                    <span
                        className={CSS.metroCircle}
                        style={{ backgroundColor: `#${props.color}` }}
                    >
                            М
                    </span>
                }
                {props.station}
            </span>}
            <span className={CSS.address}>{props.address}</span>
            {props.children}
        </li>
    );
};
