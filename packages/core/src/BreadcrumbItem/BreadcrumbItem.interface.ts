import { styledAs } from '../_internal/types'
import { TextProps } from '../Text'

export interface BreadcrumbItemProps extends Omit<TextProps, 'type'> {
  /**
   * @ignore
   */
  as?: styledAs

  interactive?: boolean
}
