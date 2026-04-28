"use client"

import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null

      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href) return

      if (href === "#") {
        event.preventDefault()
        window.scrollTo({ top: 0, behavior: "smooth" })
        return
      }

      const id = decodeURIComponent(href.slice(1))
      if (!id) return

      const section = document.getElementById(id)
      if (!section) return

      event.preventDefault()
      const header = document.querySelector("header")
      const headerOffset = header instanceof HTMLElement ? header.offsetHeight : 0
      const sectionTop = section.getBoundingClientRect().top + window.scrollY
      const scrollTop = Math.max(sectionTop - headerOffset - 8, 0)

      window.scrollTo({ top: scrollTop, behavior: "smooth" })
      window.history.replaceState(null, "", href)
    }

    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])

  return null
}
