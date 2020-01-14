const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const vocalNumArray = ['\u0031', '\u0032', '\u0033', '\u0034', '\u0035', '\u0036', '\u0037', '\u0038', '\u0039'];

stdin.on('data', (key) => {
  if (key === '\u0062') {
    process.stdout.write('\x07');
  }
  if (key === '\u0003') {
    process.exit();
  }


  for (let i = 0; i < numArray.length; i++) {
    if (key === vocalNumArray[i]) {
      console.log(`setting timer for ${numArray[i]} seconds`)
      setTimeout(() => {
        process.stdout.write('\x07');
      }, numArray[i] * 1000);
    }

  }
});
console.log('after callback');

