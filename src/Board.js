import React from 'react';
import { alter } from './methods/alter';
import { calculateWinner } from './methods/calculateWinner';
import { Square } from './Square';



var black = '○';
var white = '●';
var array = [[null, null, null, null, null, null, null, null,], [null, null, null, null, null, null, null, null,], [null, null, null, null, null, null, null, null,], [null, null, null, null, null, null, null, null,], [null, null, null, null, null, null, null, null,], [null, null, null, null, null, null, null, null,], [null, null, null, null, null, null, null, null,], [null, null, null, null, null, null, null, null,]];

export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: array,
            isX: true,
        };
        // 初期配置
        this.state.squares[3][3] = white;
        this.state.squares[3][4] = black;
        this.state.squares[4][3] = black;
        this.state.squares[4][4] = white;
    }

    // クリックされたときの挙動
    handleClick(i, j) {
        const squares = this.state.squares.slice();
        //ゲーム終了？
        if (calculateWinner(squares, black, white) || squares[i][j]) {
            return;
        }
        const value = this.state.isX ? black : white;
        //コマを置く
        squares[i][j] = value;
        this.setState({
            squares: squares,
            isX: !this.state.isX
        });
        alter(squares, i, j);
    }

    renderSquare(i, j) {
        return (
            <Square
                value={this.state.squares[i][j]}
                onClick={() => this.handleClick(i, j)}
            />
        );
    }
    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            if (winner === 'draw') {
                status = 'DRAW'
            } else {
                status = 'Winner: ' + winner
            }
        } else {
            status = 'Next player: ' + (this.state.isX ? black : white);
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0, 0)}
                    {this.renderSquare(0, 1)}
                    {this.renderSquare(0, 2)}
                    {this.renderSquare(0, 3)}
                    {this.renderSquare(0, 4)}
                    {this.renderSquare(0, 5)}
                    {this.renderSquare(0, 6)}
                    {this.renderSquare(0, 7)}
                </div>
                <div className="board-row">
                    {this.renderSquare(1, 0)}
                    {this.renderSquare(1, 1)}
                    {this.renderSquare(1, 2)}
                    {this.renderSquare(1, 3)}
                    {this.renderSquare(1, 4)}
                    {this.renderSquare(1, 5)}
                    {this.renderSquare(1, 6)}
                    {this.renderSquare(1, 7)}
                </div>
                <div className="board-row">
                    {this.renderSquare(2, 0)}
                    {this.renderSquare(2, 1)}
                    {this.renderSquare(2, 2)}
                    {this.renderSquare(2, 3)}
                    {this.renderSquare(2, 4)}
                    {this.renderSquare(2, 5)}
                    {this.renderSquare(2, 6)}
                    {this.renderSquare(2, 7)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3, 0)}
                    {this.renderSquare(3, 1)}
                    {this.renderSquare(3, 2)}
                    {this.renderSquare(3, 3)}
                    {this.renderSquare(3, 4)}
                    {this.renderSquare(3, 5)}
                    {this.renderSquare(3, 6)}
                    {this.renderSquare(3, 7)}
                </div>
                <div className="board-row">
                    {this.renderSquare(4, 0)}
                    {this.renderSquare(4, 1)}
                    {this.renderSquare(4, 2)}
                    {this.renderSquare(4, 3)}
                    {this.renderSquare(4, 4)}
                    {this.renderSquare(4, 5)}
                    {this.renderSquare(4, 6)}
                    {this.renderSquare(4, 7)}
                </div>
                <div className="board-row">
                    {this.renderSquare(5, 0)}
                    {this.renderSquare(5, 1)}
                    {this.renderSquare(5, 2)}
                    {this.renderSquare(5, 3)}
                    {this.renderSquare(5, 4)}
                    {this.renderSquare(5, 5)}
                    {this.renderSquare(5, 6)}
                    {this.renderSquare(5, 7)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6, 0)}
                    {this.renderSquare(6, 1)}
                    {this.renderSquare(6, 2)}
                    {this.renderSquare(6, 3)}
                    {this.renderSquare(6, 4)}
                    {this.renderSquare(6, 5)}
                    {this.renderSquare(6, 6)}
                    {this.renderSquare(6, 7)}
                </div>
                <div className="board-row">
                    {this.renderSquare(7, 0)}
                    {this.renderSquare(7, 1)}
                    {this.renderSquare(7, 2)}
                    {this.renderSquare(7, 3)}
                    {this.renderSquare(7, 4)}
                    {this.renderSquare(7, 5)}
                    {this.renderSquare(7, 6)}
                    {this.renderSquare(7, 7)}
                </div>
            </div>
        );
    }
}