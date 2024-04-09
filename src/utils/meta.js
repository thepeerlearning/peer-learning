import Head from "next/head"
import React from "react"
import { Colors } from "../components/themes/colors"

export default function MetaData({ title, content }) {
  return (
    <Head>
      <title>
        {title ? `${title} | The Peerlearning ` : `The Peerlearning`}{" "}
      </title>
      <meta name="description" content={content} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0d1825" />
      <meta name="msapplication-TileColor" content="" />
      <meta name="theme-color" content={Colors.primary} />
    </Head>
  )
}
