import * as React from 'react';
import * as classNames from 'classnames';
const CSS = require('./MapBlock.styl');
import { YMaps, Map as YandexMap, Placemark } from 'react-yandex-maps';

export interface MapProps {
    coords: string[];
    className?: string;
    onClick?(coord: string[]): any;
}

export class MapBlock extends React.PureComponent<MapProps> {

    onClick(coords: string[]) {
        this.props.onClick(coords);
        return false;
    }

    render() {
        const coords = this.props.coords.map(coord => coord.split(','));
        return (
            <div className={classNames(CSS.map, this.props.className)}>
                <YMaps>
                    <YandexMap
                        state={{ center: coords[0], zoom: 15, controls: [] }}
                        width={'100%'}
                        height={340}
                        onClick={e => this.onClick(e._sourceEvent.originalEvent.coords)}
                    >
                        {coords.map((point, index) => {
                            return <Placemark geometry={{ coordinates: [+point[0], +point[1]] }} key={index}/>;
                        })}
                    </YandexMap>
                </YMaps>
            </div>
        );
    }
}
