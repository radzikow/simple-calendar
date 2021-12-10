const changeMonth = (date, direction) => {
  if (direction === 'prev') {
    date.setMonth(date.getMonth() - 1);
  }

  if (direction === 'next') {
    date.setMonth(date.getMonth() + 1);
  }
}

export {
  changeMonth
}