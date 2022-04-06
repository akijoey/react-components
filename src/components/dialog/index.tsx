import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

import Icon from '../icon'
import Mask from '../mask'

const prefix = 'rc-dialog'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  visible: boolean
  title?: string
  onClose?: any
}

const Dialog: React.FC<Props> = props => {
  const { visible, children, title, onClose, className, ...restProps } = props
  const dialog = (
    <>
      <Mask visible={visible} onClick={onClose} />
      <div
        className={classNames(prefix, className, {
          [`${prefix}-hidden`]: !visible
        })}
        {...restProps}
      >
        <header>
          {title !== undefined && <span>{title}</span>}
          <Icon name="close" onClick={onClose} />
        </header>
        {children}
      </div>
    </>
  )
  return ReactDOM.createPortal(dialog, document.body)
}

export default Dialog
