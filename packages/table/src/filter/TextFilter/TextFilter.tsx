import { Icon, TextInput } from '@concrete-design/core'
import * as React from 'react'

import { ColumnInstance } from '../../types/Table'

export const TextFilter: React.FunctionComponent<{
  column: ColumnInstance<any>
}> = ({ column }) => {
  const [liveValue, setLiveValue] = React.useState<string | undefined>(
    column.filterValue
  )

  const deferredValue = React.useDeferredValue(liveValue)
  React.useEffect(() => {
    column.setFilter?.(deferredValue)
  }, [deferredValue]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!column.setFilter) {
    return null
  }

  const handleSetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || undefined
    setLiveValue(value)
  }

  return (
    <TextInput
      bare
      small
      elementLeft={<Icon icon="search" />}
      value={liveValue}
      onChange={handleSetValue}
      placeholder="Rechercher"
    />
  )
}
