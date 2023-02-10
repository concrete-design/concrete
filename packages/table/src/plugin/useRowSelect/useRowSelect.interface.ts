import { CheckboxProps } from '@concrete-design/core'
import * as ReactTable from 'react-table'

export interface UseRowSelectCellProps<D extends {}> {
  getCheckboxProps?: (row: ReactTable.Row<D>) => Partial<CheckboxProps>
}

export interface UseRowSelectOptions<D extends {}>
  extends ReactTable.UseRowSelectOptions<D>,
    UseRowSelectCellProps<D> {
  canSelectAll?: boolean
}

export interface UseRowSelectInterfaceProps<D extends {}>
  extends UseRowSelectOptions<D> {}
