/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.

*/
debugger

function cutestCat(cats) {
  let cutest;
  let i = 0;

  while (i < cats.length) {
    const cat = cats[i];
    if (cutest === undefined || cat.cuteness > cutest.cuteness ) {
      cutest = cat;
    }
    i++;
  }

  return cutest;
}

const cats = [
  { name: 'Fluffy', cuteness: 9 },
  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Indie', cuteness: 5 },
]

console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }
