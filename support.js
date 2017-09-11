/**
 * Created by JYL on 2014/6/8.
 */

function getPosTop(i, j) {
    return 12 + i * 75;
}

function getPosLeft(i, j) {
    return 12 + j * 75;
}

function getNumberBackgroundColor(number) {
	    switch (number) {
        case 2:
            return "#DD315A";
            break;
        case 4:
            return "#E9683C";
            break;
        case 8:
            return "#EE9824";
            break;
        case 16:
            return "#F6C71A";
            break;
        case 32:
            return "#F8E61A";
            break;
        case 64:
            return "#C6DD1A";
            break;
        case 128:
            return "#8BC63B";
            break;
        case 256:
            return "#1EB349";
            break;
        case 512:
            return "#1AA95E";
            break;
        case 1024:
            return "#1A998C";
            break;
        case 2048:
            return "#1A87A4";
            break;
        case 4096:
            return "#2C6DA8";
            break;
        case 8192:
            return "#6159A1";
            break;
            case 16384:
            return "#7F4A96";
            break;
            case 32768:
            return "#9A3B8C";
            break;
            case 65536:
            return "#C1307B";
            break;
    }
//  switch (number) {
//      case 2:
//          return "#eee4da";
//          break;
//      case 4:
//          return "#ede0c8";
//          break;
//      case 8:
//          return "#f2b179";
//          break;
//      case 16:
//          return "#f59563";
//          break;
//      case 32:
//          return "#f67c5f";
//          break;
//      case 64:
//          return "#f65e3b";
//          break;
//      case 128:
//          return "#edcf72";
//          break;
//      case 256:
//          return "#edcc61";
//          break;
//      case 512:
//          return "#9c0";
//          break;
//      case 1024:
//          return "#33b5e5";
//          break;
//      case 2048:
//          return "#09c";
//          break;
//      case 4096:
//          return "#a6c";
//          break;
//      case 8192:
//          return "#93c";
//          break;
//  }
}

function getNumberColor(number) {
//  if (number <= 4) {
//      return "#776e65";
//  }
    return "white";
}

function nospace(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] == 0) {
                return false;
            }
        }
    }
    return true;
}

function nomove(board) {
    if (canMoveDown(board) || canMoveLeft(board) || canMoveRight(board) || canMoveUp(board)) {
        return false;
    }
    return true;
}

function canMoveLeft(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            if (board[i][j] != 0) {
                if (board[i][j - 1] == 0 || board[i][j - 1] == board[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveRight(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 2; j >= 0; j--) {
            if (board[i][j] != 0) {
                if (board[i][j + 1] == 0 || board[i][j + 1] == board[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveUp(board) {
    for (var i = 1; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] != 0) {
                if (board[i - 1][j] == 0 || board[i - 1][j] == board[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveDown(board) {
    for (var i = 2; i >= 0; i--) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] != 0) {
                if (board[i + 1][j] == 0 || board[i + 1][j] == board[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

function noBlokHorizontalCol(row, col1, col2, board) {
    for (var i = col1 + 1; i < col2; i++) {
        if (board[row][i] != 0) {
            return false;
        }
    }
    return true;
}

function noBlokHorizontalRow(row1, row2, col, board) {
    for (var i = row1 + 1; i < row2; i++) {
        if (board[i][col] != 0) {
            return false;
        }
    }
    return true;
}