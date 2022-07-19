//Written by Kachachon Chatthin - MAQE Homework Challenges

const input = process.argv[2]

const steps = input.split(/\D+/)
const direction = [["North", 1], ["East", 1], ["South", -1], ["West", -1]]
let current_dir = 0
let step_no = 1
let x = 0
let y = 0

for (let step of input) {
  if (step === "R") {
    if (current_dir === 3) {
      current_dir = 0
    }
    else {
      current_dir += 1
    }
  }

  if (step === "L") {
    if (current_dir === 0) {
      current_dir = 3
    }
    else {
      current_dir -= 1
    }
  }

  if (step === "W") {
    if (direction[current_dir][0] === 'West' || direction[current_dir][0] === 'East') {
      x = x + (direction[current_dir][1] * steps[step_no])
      step_no++

    }
    if (direction[current_dir][0] === 'North' || direction[current_dir][0] === 'South') {
      y = y + (direction[current_dir][1] * steps[step_no])
      step_no++
    }// console.log(`${x},${y}`)
  }
}

return console.log(`X : ${x} Y : ${y} Direction : ${direction[current_dir][0]}`)


