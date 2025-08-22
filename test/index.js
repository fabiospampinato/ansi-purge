
/* IMPORT */

import {describe} from 'fava';
import color from 'tiny-colors';
import ansiPurge from '../dist/index.js';

/* MAIN */

describe ( 'ANSI Purge', it => {

  it ( 'works for formatting', t => {

    const bg = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray'];
    const fg = ['bgBlack', 'bgRed', 'bgGreen', 'bgYellow', 'bgBlue', 'bgMagenta', 'bgCyan', 'bgWhite', 'bgGray'];
    const mod = ['reset', 'bold', 'dim', 'italic', 'underline', 'overline', 'inverse', 'hidden', 'strikethrough'];
    const word = [...'chromatic'].map ( ( char, index ) => color[bg[index]]( color[fg[index]]( color[mod[index]]( char ) ) ) ).join ( '' );

    t.not ( word, 'chromatic' );
    t.is ( ansiPurge ( word ), 'chromatic' );

  });

  it ( 'works for links', t => {

    t.is ( ansiPurge ( '\u001B]8;;https://github.com\u0007Click\u001B]8;;\u0007' ), 'Click' );

  });

});
