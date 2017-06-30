import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import cx from 'classnames'

const Link = ({ className, block, obvious, ...props }) => (
  <RouterLink
    className={cx('Link', className, {
      '-block': block,
      '-obvious': obvious,
    })}
    {...props}/>
)

export default Link
