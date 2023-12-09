import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { part1, part2 } from "./main.ts";

Deno.test("part1", () => {
  const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
`;
  const actual = part1(input);
  assertEquals(actual, "142");
});

Deno.test("part2", () => {
  const input = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
`;
  const actual = part2(input);
  assertEquals(actual, "281");
});
