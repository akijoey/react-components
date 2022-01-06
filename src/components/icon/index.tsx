import React from 'react'
import classNames from 'classnames'

const prefix = 'rc-icon'

interface Props extends React.SVGProps<SVGSVGElement> {
  name: string
}

const Icon: React.FC<Props> = props => {
  const { name, className, ...restProps } = props
  const fileName = `${name}.svg`
  const ctx = require.context(
    '@svgr/webpack!@akijoey/react-components/assets/icons/?custom',
    false,
    /\.svg$/
  )
  const key = ctx.keys().find((key: string) => {
    return key === `./${fileName}`
  })
  const module =
    key !== undefined
      ? ctx(key)
      : require(`@svgr/webpack!@/assets/icons/${fileName}?custom`)
  const Svg = module.default
  return (
    <Svg
      className={classNames(prefix, className)}
      aria-hidden="true"
      {...restProps}
    />
  )
}

export default Icon
