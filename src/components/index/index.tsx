import * as React from 'react';
import * as css from './index.styl';
import { connect } from 'react-redux';
import Control from '../control/inedx';
const styl: Inspect.Style = css;

const mapStateToProps = (state: any) => {
    return {
        Input: state.MainReducer 
    };
};
@(connect as any)(
    mapStateToProps,
)
export default class extends React.Component<Inspect.NoCheck> {
    constructor(props: any) {
        super(props);
    }
    _formatContent() {
        return this.props.Input.content.join('');
    }
    render() {
        console.log(this.props);
        return (
            <div className={styl.wrap}>
                <div className={styl.display}>
                    <div className={styl.content}>
                        <div>{this._formatContent()}</div>
                    </div>
                    <div className={styl.result}>
                        {this.props.Input.result}
                    </div>
                </div>
                <Control/>
            </div>
        );
    }
}