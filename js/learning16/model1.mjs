let yokin = 100000;
const riritsu = 0.05;
for (let i = 0; i < 10; i++) {
  const risoku = yokin * riritsu;
  yokin += risoku;
  console.log(`${i + 1} 年目 : ${yokin}`);
}
