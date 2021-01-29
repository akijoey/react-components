import React from 'react'
import classNames from 'classnames'

const prefix = 'rc-button'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<Props> = props => {
  const { children, className, ...restProps } = props
  return (
    <button className={classNames(prefix, className)} {...restProps}>
      {children}
    </button>
  )
}

export default Button
