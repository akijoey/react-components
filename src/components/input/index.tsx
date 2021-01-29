import React from 'react'
import classNames from 'classnames'

import Icon from '../icon'

const prefix = 'rc-input'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string
}

const Input: React.FC<Props> = props => {
  const { icon, className, ...restProps } = props
  return (
    <div className={classNames(prefix, className)}>
      {icon !== undefined ? <Icon name={icon} color="#b9b9b9" /> : null}
      <input {...restProps} />
    </div>
  )
}

export default Input
