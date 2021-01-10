export function getActualDate(format: 'to-show' | 'to-use') {
  const dateObj = new Date();

  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();

  const date = format === 'to-use'
    ? `${year}-${month}-${day}`
    : `${day < 10 ? `0${month}` : month}/${month < 10 ? `0${month}` : month}/${year}`;

  return date;
}

export function isAfter(date: string) {
  const actualDate = new Date();
  const insertedDate = new Date(date);

  if (insertedDate > actualDate) {
    return true;
  }

  return false;
}

export function ordenateDateByStrDate(date: string, format?: 'to-use' | 'to-show') {
  if (!date) return '';

  const mDate = new Date(date);

  const day = mDate.getDate();
  const month = mDate.getMonth() + 1;
  const year = mDate.getFullYear();

  let strDate = `${year}-${month}-${day}`;

  if (format === 'to-show')
    strDate = `${day}/${month}/${year}`;

  return strDate;
}

export function calculateAge(date: string) {
  const dateSplit = date.split('-');
  const actualDate = getActualDate('to-use').split('-').map(item => Number(item));

  const day = Number(dateSplit[2]);
  const month = Number(dateSplit[1]);
  const year = Number(dateSplit[0]);

  let age = Number(actualDate[0]) - Number(year);

  if (month > actualDate[1] || (month === actualDate[1] && day > actualDate[2])) {
    age--;
  }

  return age;
}

export function formatDate(text: string) {
  let date: any = text.split('T')[0].split('-');
  let hour: any = text.split('T')[1].split(':');

  date = `${date[2]}/${date[1]}/${date[0]}`;
  hour = `${hour[0]} e ${hour[1]}`

  return `${date} às ${hour}`;
}
