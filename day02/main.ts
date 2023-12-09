export function part1(input: string): string {
  let idSum = 0;
  for (const line of input.split(/\r?\n/)) {
    if (line.length === 0) continue;

    const id = parseInt(line.split(" ")[1]);
    const sets = line.split(":")[1].split(";");
    let enoughReds = true;
    let enoughGreens = true;
    let enoughBlues = true;

    for (const set of sets) {
      const cubes = set.split(",")
        .map((x) => x.trim())
        .map((x) => x.split(" "))
        .map(([amount, color]) => ({
          amount: parseInt(amount),
          color,
        }));
      const totalCubesPerColor = cubes.reduce(
        (acc, x) => {
          acc[x.color] = x.amount + (acc[x.color] ?? 0);
          return acc;
        },
        {} as { [color: string]: number },
      );

      if (totalCubesPerColor["red"] > 12) enoughReds = false;
      if (totalCubesPerColor["green"] > 13) enoughGreens = false;
      if (totalCubesPerColor["blue"] > 14) enoughBlues = false;
    }
    if (enoughReds && enoughGreens && enoughBlues) {
      idSum += id;
    }
  }
  return idSum.toString();
}

export function part2(input: string): string {
  let powerSum = 0;
  for (const line of input.split(/\r?\n/)) {
    if (line.length === 0) continue;

    const sets = line.split(":")[1].split(";");
    let minReds = 0;
    let minGreens = 0;
    let minBlues = 0;

    for (const set of sets) {
      const cubes = set.split(",")
        .map((x) => x.trim())
        .map((x) => x.split(" "))
        .map(([amount, color]) => ({
          amount: parseInt(amount),
          color,
        }));
      const totalCubesPerColor = cubes.reduce(
        (acc, x) => {
          acc[x.color] = x.amount + (acc[x.color] ?? 0);
          return acc;
        },
        {} as { [color: string]: number },
      );

      if (totalCubesPerColor["red"] > minReds) {
        minReds = totalCubesPerColor["red"];
      }
      if (totalCubesPerColor["green"] > minGreens) {
        minGreens = totalCubesPerColor["green"];
      }
      if (totalCubesPerColor["blue"] > minBlues) {
        minBlues = totalCubesPerColor["blue"];
      }
    }
    powerSum += minReds * minGreens * minBlues;
  }
  return powerSum.toString();
}

if (import.meta.main) {
  const input = await Deno.readTextFile(Deno.args[0]);
  const r1 = part1(input);
  const r2 = part2(input);

  console.log({ r1, r2 });
}
