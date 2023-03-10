import { Button, ActionBar, Provider, Card } from '@concrete-design/core'
import * as React from 'react'
import styled from 'styled-components'

import { FAKE_DATA, IMEX_COLUMNS } from '../../_fakeData/storyFakeData'
import { Table } from '../../Table'
import { useTable } from '../../useTable'

import { DataIndicators } from './DataIndicators'
import { ImportTableDropzone } from './ImportTableDropzone'
import { useImportTable } from './useImportTable'
import { getCompareColumnsFromImexColumns } from './useImportTable.columns'

const Container = styled(Card).attrs(() => ({ flat: true }))`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  > :first-child {
    height: calc(100% - 64px);
  }
`

export default {
  title: 'Import-Export/useImportTable',
}

export const BasicExample = () => {
  const tableInstance = useTable<Faker.Card>({
    data: FAKE_DATA,
    columns: IMEX_COLUMNS,
  })
  const upsertRow = () => new Promise((resolve) => setTimeout(resolve, 1000))
  const importTable = useImportTable({
    columns: IMEX_COLUMNS,
    upsertRow: upsertRow,
    getOriginalData: () => FAKE_DATA,
    confirmLightBoxTitle: 'Import',
  })

  return (
    <Provider>
      <Container>
        <ActionBar>
          <Button outline onClick={importTable.browseLocalFiles}>
            Import
          </Button>
        </ActionBar>
        <input {...importTable.inputProps} />
        <Table instance={tableInstance} />
      </Container>
    </Provider>
  )
}

export const WithDragAndDrop = () => {
  const tableInstance = useTable<Faker.Card>({
    data: FAKE_DATA,
    columns: IMEX_COLUMNS,
  })
  const upsertRow = () => new Promise((resolve) => setTimeout(resolve, 1000))
  const dropzoneProps = {
    columns: IMEX_COLUMNS,
    upsertRow: upsertRow,
    getOriginalData: () => FAKE_DATA,
    confirmLightBoxTitle: 'Import',
  }

  return (
    <Provider>
      <ImportTableDropzone {...dropzoneProps}>
        <Table instance={tableInstance} />
      </ImportTableDropzone>
    </Provider>
  )
}

const diffColumns = getCompareColumnsFromImexColumns<Faker.Card>(IMEX_COLUMNS)
const diffData = FAKE_DATA.map((row) => {
  const changedValueKey = IMEX_COLUMNS[
    Math.floor(Math.random() * IMEX_COLUMNS.length)
  ].accessor as keyof typeof row
  const isNew = Math.random() > 0.8
  const hasError = Math.random() > 0.5
  return {
    ...row,
    _rowMeta: {
      hasDiff: true,
      prevVal: isNew ? undefined : { ...row, [changedValueKey]: 'old value' },
      errors: hasError ? { [changedValueKey]: 'Invalide' } : {},
    },
  }
})

export const CompareTable = () => {
  const tableInstance = useTable<Faker.Card>({
    data: diffData,
    columns: diffColumns,
  })
  return (
    <Provider>
      <Container>
        <Table instance={tableInstance} virtualized />
        <ActionBar>
          <DataIndicators data={diffData} />
        </ActionBar>
      </Container>
    </Provider>
  )
}
