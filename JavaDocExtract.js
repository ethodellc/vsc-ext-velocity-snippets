let list = {};
for (const row of document.querySelectorAll('table.memberSummary[summary*="Method Summary"] tr:not(:first-child)')) {
  const toolname = 'dotcontent';
  const firstCell = row.querySelector('td.colFirst');
  const secondCell = row.querySelector('td.colLast');

  const returnType = `${firstCell?.innerText || ''}`;
  const fname = secondCell.querySelector('.memberNameLink').innerText;
  const fCall = secondCell.querySelector('code').innerText;
  const desc = secondCell.querySelector('.block')?.innerText;
  let out = {
      prefix: ['$', `${toolname}.${fname}`],
      body: [
        `\\$${toolname}.${fCall}`
      ],
      description: `${desc}`
  }
  list[`$${toolname}.${fCall}: ${returnType}`] = out;
}
console.log(JSON.stringify(list, null, 2));