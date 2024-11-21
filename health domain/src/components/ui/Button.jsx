import React from 'react'
import { cn } from './utils/cn'

export function Button({ className, children, ...props }) {
  return (
    <button 
      className={cn(
        "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600", 
        className
      )} 
      {...props}
    >
      {children}
    </button>
  )
}