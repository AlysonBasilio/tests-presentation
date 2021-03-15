export default function capitalizeFirstChar(input: string): string {
  if (!input.length) return ''

  return `${input[0].toUpperCase()}${input.slice(1)}`
}