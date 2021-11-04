
// function superbowlWin(record) {
//     if(record.result === 'W') {
//     return record.year;
// }
// }

// function superbowlWin(record) {
//     if(record.result === "W") {
//         return record.find(superbowlWin).year;
//     } else {
//         return undefined
//     }
// }

function superbowlWin(array) {
    let winningYear = array.find((array) => array.result === "W");
    if (winningYear) {
      return winningYear.year;
    } else {
      return winningYear
    }
  }
  