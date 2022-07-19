function timeAgo(dateParam) {
  if (!dateParam) return null;

  const date = (typeof dateParam === 'object') ? dateParam : new Date(dateParam);
  const DAY_IN_MS = 86400000;
  const today = new Date();
  const yesterday = new Date(today - DAY_IN_MS)
  const seconds = Math.floor((today - date) / 1000);
  const minutes = Math.floor(seconds/60)
  const hours = Math.floor(minutes/60)
  const days = Math.floor(hours/24)
  const years = Math.floor(days/365)
  const isToday = today.toDateString() === date.toDateString();
  const isYesterday = yesterday.toDateString() === date.toDateString()
  const isThisYear = today.getFullYear() === date.getFullYear();

  if (seconds < 5) return 'now';
  else if (seconds < 60) return `${ seconds } seconds ago`;
  else if (seconds < 90) return `about a minute ago`;
  else if (minutes < 60) return `${ minutes } minutes ago`;
  else if (hours < 24) return `${ hours } hours ago`
  else if (days < 365) {
    return (days ===1) ? `1 day ago`  : `${ days } days ago`}
  else
    return `${years} year ago`
}

console.log(timeAgo(new Date('July 18, 2020 9:50:00')))
