import React from 'react'
const today = new Date();

export const datediff = (date:Date) => {
  const yearDiff = () => { return today.getFullYear() - date.getFullYear(); }
  const monthDiff = () => { return today.getMonth() - date.getMonth(); }
  const dayDiff = () => { return today.getDate() - date.getDate(); }
  const fullDayDiff = () => { return yearDiff() * 1000 + monthDiff() * 10 + dayDiff(); }

  let ddiff = '';
  let qdays = fullDayDiff();
  if ( qdays < 30) { ddiff = qdays + ' días'; }
  else if ( qdays < 365) { ddiff = monthDiff() + ' meses'; }
  else { ddiff = yearDiff() + ' años' }

  return ddiff;
}
