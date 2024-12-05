export const day1 = (data: string) => {
  let leftarray = []
  let rightarray = []
  let parts = []
  let score = 0

  for (let i = 0; i < data.length; i++) {
    parts = data[i].split(/\s+/)
    leftarray.push(+parts[0])
    rightarray.push(+parts[1])
  }

  leftarray.sort((a, b) => a - b)
  rightarray.sort((a, b) => a - b)


  for (let j = 0; j < data.length; j++) {
    if (rightarray[j] > leftarray[j]) { score += (rightarray[j] - leftarray[j]) }
    else { score += (leftarray[j] - rightarray[j]) }
  }

  return score;

};
