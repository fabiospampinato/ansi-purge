# ANSI Purge

A tiny function for deleting ANSI escape sequences from a string.

## Install

```sh
npm install --save ansi-purge
```

## Usage

```ts
import color from 'tiny-colors';
import ansiPurge from 'ansi-purge';

console.log ( ansiPurge ( color.red ( 'Hello' ) ) ); // => 'Hello'
```

## License

MIT © Fabio Spampinato
