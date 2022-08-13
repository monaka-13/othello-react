export function alter(squares, i, j) {
    var io = i;
    var jo = j;
    var value = squares[i][j];
    var dirs = makeDir();
    //tempの型はi,jの配列を保持する配列
    var temp = [];
    var alters = [];
    for (let d = 0; d < dirs.length; d++) {//dirs8方向ぶん回す
        while (true) {//dirぶんXY軸足す足す足す
            i += dirs[d][0];
            j += dirs[d][1];

            if (i < 0 || i > 7 || j < 0 || j > 7) {//枠外に出たら無効なのでこのdir処理は停止
                console.log("枠外");
                temp = [];
                break;
            }
            else if (squares[i][j] == null) {//次がnullなら無効なのでこのdir処理は停止
                console.log("null");
                temp = [];
                break;
            } else if (value === squares[i][j]) {//味方の駒ならdirが集まったとみなし、forを抜ける
                console.log("味方の駒");
                break;
            }
            console.log("敵の駒");
            //値をtempに挿入
            temp.push([i, j]);
        }
        //temp配列の数が0以上なら続行
        if (temp.length > 0) {
            for (let s = 0; s < temp.length; s++) {//temp配列を順番にとって
                //temp配列の値をalters配列に入れる
                alters.push(temp[s]);
            }
        }
        i = io;
        j = jo;
        temp = [];
    }
    //altersが0でなければaltersにオリジナルを追加
    if (alters.length === 0) {
        squares[io][jo] = null;
    } else {
        for (let v = 0; v < alters.length; v++) {
            squares[alters[v][0]][alters[v][1]] = value;
        }
    }
}

function makeDir() {
    return [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
}