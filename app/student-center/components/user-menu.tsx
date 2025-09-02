"use client"

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function UserMenu() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={containerRef}>
      <button className="flex items-center gap-2" onClick={() => setOpen((v) => !v)}>
        <div className="w-8 h-8 bg-gray-300 rounded-full" />
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </button>

      {open && (
        <div className="absolute right-0 top-full w-56 rounded-lg border bg-white shadow-lg p-2 z-50 mt-2">
          <div className="px-3 py-2 text-xs text-gray-500">Galxe+</div>
          <Link href="/invite" className="block px-3 py-2 rounded-md hover:bg-gray-50">Invite to Earn</Link>
          <Link href="#" className="block px-3 py-2 rounded-md hover:bg-gray-50">View on Ethereum</Link>
          <Link href="#" className="block px-3 py-2 rounded-md hover:bg-gray-50">Settings</Link>
          <Link href="#" className="block px-3 py-2 rounded-md hover:bg-gray-50">Switch Account</Link>
          <Link href="#" className="block px-3 py-2 rounded-md hover:bg-gray-50">Disconnect</Link>
          <div className="my-2 border-t" />
          <Link href="#" className="block px-3 py-2 rounded-md hover:bg-gray-50">My Spaces</Link>
          <Link href="#" className="block px-3 py-2 rounded-md hover:bg-gray-50">Watchlist</Link>
        </div>
      )}
    </div>
  )
}


