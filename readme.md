# ANSI Purge

A tiny function for deleting ANSI escape sequences from a string.

## Install

```sh
npm install ansi-purge
```

## Usage

```ts
import color from 'tiny-colors';
import ansiPurge from 'ansi-purge';

// Let's remove ANSI escapes from a string

console.log ( ansiPurge ( color.red ( 'Hello' ) ) ); // => 'Hello'
```

## License

MIT © Fabio Spampinato
