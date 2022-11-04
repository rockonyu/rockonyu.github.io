type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => (
  <time dateTime={dateString}>{new Date(dateString).toLocaleString()}</time>
)

export default DateFormatter
