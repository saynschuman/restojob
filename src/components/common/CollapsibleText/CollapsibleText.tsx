import * as React from 'react';
import * as classNames from 'classnames';
import * as he from 'he';
const CSS = require('./CollapsibleText.styl');

interface CollapsibleTextProps {
    firstPart: string;
    secondPart: string;
}

interface CollapsibleTextState {
    isCollapsed: boolean;
}

export class CollapsibleText extends React.PureComponent<CollapsibleTextProps, CollapsibleTextState> {

    state = {
        isCollapsed: true,
    };

    toggle = () => {
        this.setState({ isCollapsed: !this.state.isCollapsed });
    }

    render() {
        return (
            <>
                {this.state.isCollapsed &&
                    <p className={CSS.text}>
                        <span dangerouslySetInnerHTML={{ __html: this.props.firstPart }}/>
                        <span className={CSS.toggleLink} onClick={this.toggle}>{__t('collapsibleTextShow')}</span>
                    </p>
                }

                {!this.state.isCollapsed &&
                <p className={CSS.text}>
                    <span dangerouslySetInnerHTML={{ __html: this.props.firstPart }}/>
                    <br/>
                    <span dangerouslySetInnerHTML={{ __html: this.props.secondPart }}/>
                    <span className={classNames(CSS.toggleLink, CSS.hideLink)} onClick={this.toggle}>{__t('collapsibleTextHide')}</span>
                </p>
                }
            </>
        );
    }
}
