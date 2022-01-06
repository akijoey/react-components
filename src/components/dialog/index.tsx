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
  const dialog = visible ? (
    <>
      <Mask visible={visible} onClick={onClose} />
      <div className={classNames(prefix, className)} {...restProps}>
        <header>
          {title !== undefined && <h1>{title}</h1>}
          <Icon name="close" onClick={onClose} />
        </header>
        {children}
      </div>
    </>
  ) : null
  return ReactDOM.createPortal(dialog, document.body)
}

export default Dialog
