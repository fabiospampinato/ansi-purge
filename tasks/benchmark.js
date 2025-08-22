
/* IMPORT */

import benchmark from 'benchloop';
import purge from '../dist/index.js';

/* HELPERS */

const SAMPLE_STRING = '\u001b[31mfoo\u001b[39m\u001B]8;;https://github.com\u0007Click\u001B]8;;\u0007';

/* MAIN */

benchmark.config ({
  iterations: 1_000_000
});

benchmark ({
  name: 'purge',
  fn: () => {
    purge ( SAMPLE_STRING );
  }
});
