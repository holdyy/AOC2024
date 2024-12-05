export const day1part2 = (data: string) => {
  let leftarray = []
  let rightarray = []
  let parts = []
  let match = []
  let step = 0
  let score = 0

  for (let i = 0; i < data.length; i++) {
    parts = data[i].split(/\s+/)
    leftarray.push(+parts[0])
    rightarray.push(+parts[1])
  }

  for (let j = 0; j < data.length; j++) {
    let match = rightarray.filter(num => num === leftarray[j])
    let step = match.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    score += step
    console.log(score)

  } return score
};
