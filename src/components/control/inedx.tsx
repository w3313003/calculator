import * as React from 'react';
import * as styl from './index.styl';
import { connect } from 'react-redux';
const css: Inspect.Style = styl;

@(connect as any) {
    state => state.
}
export default class extends React.Component {
    render() {
        return (
            <div className={css.ctrl}>
                <ul className={css.calcInput}>
                    <li>
                        C
                    </li>
                    <li>
                        DEL
                    </li>
                    <li>
                        %
                    </li>
                    <li>
                        /
                    </li>
                    <li>
                        7
                    </li>
                    <li>
                        8
                    </li>
                    <li>
                        9
                    </li>
                    <li>
                        *
                    </li>
                    <li>
                        4
                    </li>
                    <li>
                        5
                    </li>
                    <li>
                        6
                    </li>
                    <li>
                        -
                    </li>
                    <li>
                        1
                    </li>
                    <li>
                        2
                    </li>
                    <li>
                        3
                    </li>
                    <li>
                        +
                    </li>
                    <li>
                        00
                    </li>
                    <li>
                        0
                    </li>
                    <li>
                        .
                    </li>
                    <li>
                        <div>
                            =
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}