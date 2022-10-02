





let a, re, rm, b,re1, rem1, c, d, result = [], store = [];
for (i = 7; i <= 200; i++) {

  if (i % 7 == 0) {
    store.push(i);
  }
}
// console.log(store);
for (i = 0; i < store.length; i++) {
  re = store[i] % 10;
  rem = Math.floor(store[i] / 10);
  // console.log(re,rem);
  rem1=store[i]%10;
  re1=Math.floor(store[i] / 10);
// console.log(rem,rem1,re,re1);
if(!(re1>rem1)&&(re>rem)){
  console.log(store[i]);
}
}
  // if (rem < re) {
    // console.log(store[i]);
