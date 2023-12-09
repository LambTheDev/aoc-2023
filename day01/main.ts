export function part1(input: string): string {
  let sum = 0;

  for (const line of input.split(/\r?\n/)) {
    let first: number | null = null;
    let last: number | null = null;

    for (let i = 0; i < line.length; i++) {
      const n = parseInt(line[i]);

      if (Number.isNaN(n)) continue;

      if (first == null) first = n;
      last = n;
    }

    if (first == null || last == null) continue;

    const calibrationValue = parseInt(first + "" + last);
    sum += calibrationValue;
  }
  return sum.toString();
}

export function part2(input: string): string {
  const spelledDigits = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let sum = 0;

  for (const line of input.split(/\r?\n/)) {
    let first: number | null = null;
    let last: number | null = null;

    for (let i = 0; i < line.length; i++) {
      let n = parseInt(line[i]);

      if (Number.isNaN(n)) {
        for (let j = 0; j < spelledDigits.length; j++) {
          const spelledDigit = spelledDigits[j];
          if (line.substring(i).startsWith(spelledDigit)) {
            n = j + 1;
            break;
          }
        }
      }
      if (Number.isNaN(n)) continue;

      if (first == null) first = n;
      last = n;
    }

    if (first == null || last == null) continue;

    const calibrationValue = parseInt(first + "" + last);
    sum += calibrationValue;
  }
  return sum.toString();
}

if (import.meta.main) {
  const input = await Deno.readTextFile(Deno.args[0]);
  const r1 = part1(input);
  const r2 = part2(input);

  console.log({ r1, r2 });
}
