const sentenceList1 = [
  ['mohammad', 'go', 'to', 'school', 'go'],
  ['to', 'school', 'mohammad', 'go', 'go'],
  ['to', 'go', 'mohammad', 'school', 'go'],
  ['mohammad', 'go', 'to', 'school', 'go'],
];

const sentenceList2 = [
  ['mohammad', 'go', 'to', 'school'],
  ['to', 'school', 'mohammad', 'go'],
  ['to', 'go', 'mohammad', 'school'],
  ['go', 'go', 'to', 'school'],
];

const sentenceList3 = [
  ['mohammad', 'go', 'to', 'school'],
  ['to', 'school', 'mohammad', 'go'],
  ['to', 'go', 'mohammad', 'school'],
  ['other', 'go', 'to', 'school'],
];

function isAllTheSame(sentenceList) {
  const constant = sentenceList[0];
  const obj = {};

  let final = true;
  sentenceList.forEach(val => {
    const outerObj = [];

    val.forEach(innerVal => {
      const innerObj = {};

      if (!constant.includes(innerVal)) {
        final = false;
      } else {
        innerObj[innerVal] = innerObj[innerVal] + 1;
      }
    });
  });

  return final;
}

console.log(isAllTheSame(sentenceList1)); // true
//   console.log(isAllTheSame(sentenceList2)); // false
//   console.log(isAllTheSame(sentenceList3)); // false
