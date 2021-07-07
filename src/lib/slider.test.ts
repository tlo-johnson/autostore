import { nearestMark } from "lib/slider";

[
  [10, 10],
  [20, 20],
  [30, 30],
  [40, 40],
  [50, 50],
  [60, 50],
  [70, 50],
  [80, 100],
  [90, 100],
  [100, 100],
].forEach((data) => {
  const [value, expected] = data;
  test(`slider returns nearest mark for value: ${value}`, () => {
    expect(nearestMark(value)).toBe(expected);
  });
});
