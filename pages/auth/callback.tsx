import Router from 'next/router'
import { useEffect } from 'react'
import { parse } from 'qs'

const Page = () => {
  useEffect(() => {
    const query = parse(window.location.hash.slice(1))

    Router.push('/')
  })

  return <div />
}

export default Page
