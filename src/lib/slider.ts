export const nearestMark = (val: number) => {
  if (val <= 50) return val;
  return [60, 70].includes(val) ? 50 : 100;
};
