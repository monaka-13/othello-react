export function calculateWinner(squares, black, white) {
    let br = 0;
    let wh = 0;
    for (let i = 0; i <= 7; i++) {
        for (let j = 0; j < 7; j++) {
            if (squares[i][j] === null) {
                return null;
            }
            if (squares[i][j] === black) {
                br++;
                continue;
            }
            wh++;
        }
    }
    if (br > wh) {
        return black;
    } else if (wh > br) {
        return white;
    }
    return 'draw';
}
