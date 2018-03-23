import * as React from 'react';
import * as css from './index.styl';

const styl: Inspect.Style = css;
export default class extends React.Component<Inspect.NoCheck> {
    public state: {
        result: number;
        content: Array<number | string>,
        btn: Array<number | string>,
        clearActive?: boolean
    };
    constructor(props: any) {
        super(props);
        this.state = {
            result: 0,
            content: [0],
            btn: ['C', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', '00', 0, '.', '='],
            clearActive: false
        };
        enum Color {Red= 100, Green, Blue}
        let c: Color = Color.Green;
        console.log(c);

    }
    _formatContent() {
        if (this.state.content instanceof Array) {
            return this.state.content.join('');
        }
        return 0;
    }
    MainClick = (v: number | string) => {
        if (v === 'C') {
            this.clear();
            return;
        }
        if (typeof Number(v) === 'number' && v !== '00') {
            console.log(typeof Number(v) === 'number');
            this.input(v as number);
        }
    }
    clear() {
        if (!this.state.clearActive) {
            this.setState({
                content: [0],
                result: 0,
                clearActive: true
            });
            setTimeout(
                () => {
                    this.setState({
                        clearActive: false
                    });
                }, 
                1000
            );
        }
        
    }
    input(v: number) {
        const ncontent = this.state.content;
        ncontent.push(v);
        if (ncontent[0] === 0) {
            ncontent.shift();
        }
        this.setState({
            content: ncontent
        });
        console.log(this.state);
    }
    render() {
        const list = this.state.btn;
        return (
            <div className={styl.wrap}>
                <div className={styl.display}>
                    <div className={styl.content}>
                        <div>{this._formatContent()}</div>
                    </div>
                    <div className={styl.result}>
                        {this.state.result}
                    </div>
                    <div className={this.state.clearActive ? `${styl.clear} ${styl.active}` : `${styl.clear}`} />
                </div>
                <div className={styl.ctrl}>
                    <ul className={styl.calcInput}>
                        {list.map((v: string | number, i: number) => {
                            return i !== list.length - 1 ? (
                                <li key={i} onClick={() => this.MainClick(v)}>
                                    {v}
                                </li>
                            ) : (
                                <li key={i}>
                                    <div>
                                        {v}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}