export function parseDate(date) {
  const [hours, minutes, seconds] = date.split(':').map(d => parseInt(d));

  const firstRow = seconds % 2 === 0 ? 'Y' : 'O';
  const secondRow = 'R'.repeat(hours / 5) + 'O'.repeat(4 - parseInt(hours / 5));
  const thirdRow = 'R'.repeat(hours % 5) + 'O'.repeat(4 - (hours % 5));
  const fourthRowInit =
    'Y'.repeat(minutes / 5) + 'O'.repeat(11 - parseInt(minutes / 5));
  let fourthRow = '';
  for (let index = 0; index < fourthRowInit.length; index++) {
    if ((index + 1) % 3 === 0 && fourthRowInit.charAt(index) === 'Y') {
      fourthRow += 'R';
    } else {
      fourthRow += fourthRowInit.charAt(index);
    }
  }
  const lastRow = 'Y'.repeat(minutes % 5) + 'O'.repeat(4 - (minutes % 5));

  return [firstRow, secondRow, thirdRow, fourthRow, lastRow];
}
