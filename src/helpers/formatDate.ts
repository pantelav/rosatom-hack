export function formatDate(date: Date | number) {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }

  const formatter = new Intl.DateTimeFormat('ru-RU', options)

  return formatter.format(date)
}
