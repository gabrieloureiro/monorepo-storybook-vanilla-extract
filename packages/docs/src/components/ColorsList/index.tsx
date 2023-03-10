import { tokens } from '@loureiro/web'
import { getContrast } from 'polished'

export function ColorsList() {
  return Object.entries(tokens.colors).map(([key, color]) => {
    return (
      <div
        key={key}
        style={{
          display: 'flex',
          backgroundColor: color,
          fontSize: '1rem',
          padding: '2rem',
          justifyContent: 'space-between',
          fontFamily: 'monospace',
          color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
        }}
      >
        <strong>${key}</strong>
        <span>{color}</span>
      </div>
    )
  })
}
