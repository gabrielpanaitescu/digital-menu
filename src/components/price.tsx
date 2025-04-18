interface Props {
  value: number
  className?: string
}
const Price = ({ value, className }: Props) => {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] font-mono text-[0.95em] font-semibold">
      ${value.toFixed(2)}
    </code>
  )
}

export default Price
