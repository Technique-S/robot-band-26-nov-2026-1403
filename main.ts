import { mkdirSync, writeFileSync } from 'node:fs';
import { bandLine, lineLength } from './band.ts';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

// The gate wants one clean UTF-8 line of 1 to 200 characters: band name and hit song.
// A single-line guard keeps the name and the song together on one readable line.
if (typeof bandLine !== 'string' || bandLine.trim().length === 0) {
  throw new Error('the band line is empty');
}
const n = lineLength();
if (n < 1 || n > 200) {
  throw new Error(`the band line is ${n} characters, outside the 1-200 gate`);
}
if (!/hit single/i.test(bandLine)) {
  throw new Error('the line must include the band\'s hit song');
}
if (/[\n\r\u0000-\u0009\u000b-\u001f\u007f\u2028\u2029]/.test(bandLine)) {
  throw new Error('the band line must stay on a single clean line');
}

writeFileSync(`${outDir}/entry.txt`, bandLine, 'utf8');
