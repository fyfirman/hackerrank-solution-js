// https://www.hackerrank.com/challenges/ctci-ransom-note/

function checkMagazine(magazine, note) {
  let result = 'Yes';
  const condition = {};
  magazine.forEach((word) => {
    if (condition[word] === undefined) {
      Object.assign(condition, { [word]: 1 });
    }
    else {
      condition[word]++
    }
  })
  note.forEach((noteWord) => {
    if (!(noteWord in condition) || condition[noteWord] === 0) {
      result = 'No';
    } else {
      --condition[noteWord];
    }
  })

  console.log(result);
}