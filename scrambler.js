const fs = require('fs')
const parser = require('csv-parse/lib/sync')
const shuffle = require('lodash.shuffle')

const scrambler = filename => {
  const data = fs.readFileSync(filename)
  const rows = parser(data, {columns: true, trim: true})
  const shuffledRows = shuffle(rows)
  return shuffledRows.map((row, idx, arr) => {
    let index = -1
    if (idx !== arr.length - 1) {
      index = idx
    }
    return {
      recipientName: row['Name'],
      recipientAddress: row['Address'],
      senderEmail: arr[index + 1]['Email'],
      senderName: arr[index + 1]['Name']
    }
  })
}

module.exports = scrambler
