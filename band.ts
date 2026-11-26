// One funny robot band name with its hit song, authored for the "Name the Robot Band" bounty.
export const bandLine: string =
  "The Retry Loops — hit single 'One More Time (We Promise)'";

// Code-point count, the way the gate counts characters.
export function lineLength(): number {
  return [...bandLine].length;
}
