import React, { FC, PropsWithChildren, useEffect, useState } from "react"

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  })
  const data = await response.json()

  console.log("here is your joke: ", data.joke)
  return <>{children}</>
}

export default RootLayout
