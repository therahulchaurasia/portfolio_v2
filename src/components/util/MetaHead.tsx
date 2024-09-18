import Head from "next/head"
import React from "react"

type Props = {
  children?: React.ReactNode
  title: string
  description: string
  url: string
}
const sitename = process.env.NEXT_PUBLIC_USER_NAME
export default function MetaHead({ title, description, url, children }: Props) {
  const canoncial =
    url.includes("http") && url[0] !== "/"
      ? url
      : process.env.NEXT_PUBLIC_WEBSITE_BASE + url

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:sitename" content={sitename} />
      <meta property="og:url" content={canoncial} />
      <link rel="canonical" key="canonical" href={canoncial} />
      {children}
    </Head>
  )
}
