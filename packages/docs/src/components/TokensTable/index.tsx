type TokensTableProps = {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

export function TokensTable({ tokens, hasRemValue = false }: TokensTableProps) {
  return (
    <table className="tokens-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && (
                <td>
                  {!value.includes('rem')
                    ? value
                    : `${Number(value.replace('rem', '')) * 16}px`}
                </td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
