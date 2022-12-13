import React from 'react'

type Props = {
    children: JSX.Element,
  };

const Container = ({children}:Props) => {
  return (
    <div className="mx-auto w-11/12 ">
      {children}
    </div>
  )
}

export default Container