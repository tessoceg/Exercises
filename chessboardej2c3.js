size = 8
function chessboard() {
    board = '';
    for (i = 0; i < (size); i++){
        if (i % 2 === 0) { block = ' #';
    } else {
        block = '# '
    }
 for ( j = 0; j < (size / 2); j++){
        board = board + `${block}` ;
     } 
     board = board + `\n`;
 } 
     
    console.log(board);    
};
chessboard();