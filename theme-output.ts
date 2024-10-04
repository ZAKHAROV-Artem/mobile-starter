type Theme = {
  bg: string;
};

function t(a: [number, number][]) {
  let res: Record<string, string> = {};
  for (const [ki, vi] of a) {
    res[ks[ki] as string] = vs[vi] as string;
  }
  return res as Theme;
}
const vs = ["#FFFFFF"];

const ks = ["bg"];

const n1 = t([[0, 0]]);

export const light = n1;
