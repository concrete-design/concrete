import { Text, Card } from '@concrete-design/core'
import * as React from 'react'

import { UseImportTableParams } from '../imex.interface'

import { useImportTable } from './useImportTable'
import { DropzoneContainer, StyledIMEXDropzone } from './useImportTable.style'

export const ImportTableDropzone: React.FunctionComponent<
  React.PropsWithChildren<UseImportTableParams<any>>
> = ({ children, ...props }) => {
  const importTable = useImportTable(props)

  return (
    <StyledIMEXDropzone {...importTable.dropzoneProps}>
      {children}
      {importTable.dropzone.isDragActive && (
        <DropzoneContainer>
          <Card spacing="narrow">
            <Text>Importer</Text>
          </Card>
        </DropzoneContainer>
      )}
    </StyledIMEXDropzone>
  )
}
