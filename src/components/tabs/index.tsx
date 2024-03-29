import React, { useState } from 'react'
import classNames from 'classnames'

import Menus, { Menu } from '../menus'
import Icon from '../icon'

const prefix = 'rc-tabs'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  onChange?: any
}

const Tabs: React.FC<
  Props & { defaultActive?: number; onEdit?: any; activeKey?: number }
> = props => {
  const {
    defaultActive,
    activeKey,
    onChange,
    onEdit,
    children,
    className,
    ...restProps
  } = props
  const [active, setActive] = useState(defaultActive ?? 0)
  const length = React.Children.count(children)
  const handleSelect = (index: number): void => {
    if (onEdit !== undefined && index === length) {
      onEdit(index, 'add')
    } else {
      setActive(index)
      onChange(index)
    }
  }
  const getMenuList = (): any => {
    const list = React.Children.map<JSX.Element, any>(
      children,
      (element, index) => {
        const { name, closable } = element.props
        return (
          <Menu key={index}>
            <span>{name}</span>
            {onEdit !== undefined && (closable as boolean) && (
              <Icon
                name="close"
                onClick={e => {
                  e.stopPropagation()
                  onEdit(index, 'remove')
                }}
              />
            )}
          </Menu>
        )
      }
    )
    if (onEdit !== undefined) {
      list.push(
        <Menu key={length}>
          <Icon name="plus" />
        </Menu>
      )
    }
    return list
  }
  return (
    <>
      <Menus
        defaultActive={defaultActive}
        activeKey={activeKey ?? active}
        onSelect={handleSelect}
      >
        {getMenuList()}
      </Menus>
      <div className={classNames(prefix, className)} {...restProps}>
        {React.Children.map<JSX.Element, any>(children, (element, index) => {
          return React.cloneElement(element, {
            name: undefined,
            closable: undefined,
            hidden: index !== (activeKey ?? active)
          })
        })}
      </div>
    </>
  )
}

export const Tab: React.FC<
  Props & { name?: string; closable?: boolean }
> = props => {
  const { children, className, ...restProps } = props
  return (
    <div className={classNames(prefix.substr(0, 6), className)} {...restProps}>
      {children}
    </div>
  )
}

export default Tabs
