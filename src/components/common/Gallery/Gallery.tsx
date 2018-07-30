import * as React from 'react';
const CSS = require('./Gallery.styl');
import * as ReactDOM from 'react-dom';
import Lightbox from 'react-images';

export interface SliderGalleryProps {
    images: string[];
}

interface SliderGalleryState {
    isOpen?: boolean;
    currentImageIndex?: number;
}

export class Gallery extends React.PureComponent<SliderGalleryProps, SliderGalleryState> {

    state = {
        currentImageIndex: 0,
        isOpen: false,
    };

    close = () => {
        this.setState({ isOpen: false });
    }

    open = (index) => {
        this.setState({
            isOpen: true,
            currentImageIndex: index,
        });
    }

    nextImage = () => {
        this.setState({
            currentImageIndex: this.state.currentImageIndex  === this.props.images.length - 1
                ? 0
                : this.state.currentImageIndex + 1,
        });
    }

    prevImage = () => {
        this.setState({
            currentImageIndex: this.state.currentImageIndex  === 0
                ? this.props.images.length - 1
                : this.state.currentImageIndex - 1,
        });
    }

    render() {
        const images = this.props.images.map(imageSrc => ({ src: imageSrc }));
        return (
            <div className={CSS.gallery}>
                {this.props.images.map((imgSrc, index) => {
                    return (
                        <span key={index} className={CSS.thumb} onClick={() => this.open(index)}>
                                <img src={imgSrc} alt="slide" />
                            </span>
                    );
                })}
                <Lightbox
                    images={images}
                    currentImage={this.state.currentImageIndex}
                    isOpen={this.state.isOpen}
                    onClickPrev={this.prevImage}
                    onClickNext={this.nextImage}
                    onClose={this.close}
                    backdropClosesModal={true}
                />
            </div>
        );
    }
}
