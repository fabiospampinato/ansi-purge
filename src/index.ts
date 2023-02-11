
/* IMPORT */

import {ANSI_RE} from './constants';

/* MAIN */

const purge = ( str: string ): string => {

  return str.replace ( ANSI_RE, '' );

};

/* EXPORT */

export default purge;
