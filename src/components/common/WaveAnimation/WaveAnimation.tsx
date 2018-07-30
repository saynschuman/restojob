import * as React from 'react';
const CSS = require('./WaveAnimation.styl');

const WAVE_ANIMATION_DURATION = 1000;

interface IWaveAnimationProps {
    color?: string;
}

interface IWaveAnimationState {
    inProgress?: boolean;
    clickCoords?: number[];
}

export class WaveAnimation extends React.PureComponent<IWaveAnimationProps, IWaveAnimationState> {

    private containerRef: React.RefObject<any> = React.createRef();
    private parentEl: any;

    state: IWaveAnimationState = {
        inProgress: false,
        clickCoords: [0, 0],
    };

    private animationStopTimeout: any = null;
    private animationStartTimeout: any = null;

    private startWaveAnimation = (e: any) => {
        const containerClientRect = this.parentEl.getBoundingClientRect();
        const coords = [
            e.clientX - containerClientRect.left,
            e.clientY - containerClientRect.top,
        ];

        clearTimeout(this.animationStopTimeout);

        this.stopWaveAnimation();

        this.animationStartTimeout = setTimeout(() => {
            this.setState({
                clickCoords: coords,
                inProgress: true,
            });
        });

        this.animationStopTimeout = setTimeout(() => {
            this.stopWaveAnimation();
        }, WAVE_ANIMATION_DURATION);
    }

    private stopWaveAnimation() {
        this.setState({
            inProgress: false,
        });
    }

    componentDidMount() {
        this.parentEl = this.containerRef.current.parentElement;
        this.parentEl.addEventListener('click', this.startWaveAnimation);
    }

    componentWillUnmount() {
        clearTimeout(this.animationStopTimeout);
        clearTimeout(this.animationStartTimeout);
        this.parentEl.removeEventListener('click', this.startWaveAnimation);
    }

    render() {
        return (
            <span
                className={CSS.container}
                ref={this.containerRef}
            >
                {this.state.inProgress && <span
                    className={CSS.waveEffect}
                    style={{
                        backgroundColor: this.props.color || 'rgba(151, 151, 151, 0.5)',
                        top: this.state.clickCoords[1],
                        left: this.state.clickCoords[0],
                        animationDuration: WAVE_ANIMATION_DURATION + 'ms',
                    }}
                />}
                {this.props.children}
            </span>
        );
    }
}
