// run `node index.js` in the terminal

let pronounList = ['the', 'our']; //rosa
let adjList = ['great', 'big']; //azul
let nounList = ['jogger', 'racoon']; //rojo

const _permutar = (suffixList, prefixList) => {
  return suffixList.reduce((state, suffix) => {
    const combinationList = prefixList.map((prefix) => `${prefix}${suffix}`);
    return [...state, ...combinationList];
  }, []);
};

const _addComSuffix = (list) => {
  return list.map((string) => {
    return `${string}.com`;
  });
};

const _printInTerminal = (list) => {
  list.forEach((string) => {
    console.log(string);
  });
};

function main() {
  const primeraPermuta = _permutar(adjList, pronounList);
  const segundaPermuta = _permutar(nounList, primeraPermuta);
  const resultList = _addComSuffix(segundaPermuta);
  _printInTerminal(resultList);
}

// function main() {
//   for (let i = 0; i < 2; i++) {
//     for (let j = 0; j < 2; j++) {
//       for (let k = 0; k < 2; k++) {
//         console.log(pronoun[j] + adj[i] + noun[k] + '.com');
//       }
//     }
//   }
// }

main();