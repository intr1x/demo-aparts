import React, { Fragment } from 'react'

// Минимальный passthrough layout - каждая route group имеет свой полноценный layout с html/body
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Fragment>{children}</Fragment>
}
