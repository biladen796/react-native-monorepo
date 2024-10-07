type Theme = {
  accentBackground: string;
  accentColor: string;
  background0: string;
  background: string;
  color: string;
};

function t(a: [number, number][]) {
  const res: Record<string, string> = {};
  for (const [ki, vi] of a) {
    res[ks[ki] as string] = vs[vi] as string;
  }
  return res as Theme;
}
const vs = ['#000', '#fff'];

const ks = [
  'accentBackground',
  'accentColor',
  'background0',
  'background',
  'color',
];

const n1 = t([
  [0, 0],
  [1, 0],
  [2, 0],
  [3, 0],
  [4, 1],
]);

export const light = n1;
const n2 = t([
  [0, 1],
  [1, 1],
  [2, 1],
  [3, 1],
  [4, 0],
]);

export const dark = n2;
