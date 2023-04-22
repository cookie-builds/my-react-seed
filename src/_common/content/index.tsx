import React from 'react'

type ContentProps = {
  children?: React.ReactNode
}

const Content = ({ children }: ContentProps): JSX.Element => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Content
