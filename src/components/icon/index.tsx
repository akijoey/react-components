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
    '@svgr/webpack?-svgo,+titleProp,+ref!@akijoey/react-components/assets/icons/',
    false,
    /\.svg$/
  )
  const key = ctx.keys().find((key: string) => {
    return key === `./${fileName}`
  })
  const module =
    key !== undefined
      ? ctx(key)
      : require(`@svgr/webpack?-svgo,+titleProp,+ref!@/assets/icons/${fileName}`)
  const Svg = module.ReactComponent
  return (
    <Svg
      className={classNames(prefix, className)}
      aria-hidden="true"
      {...restProps}
    />
  )
}

export default Icon
