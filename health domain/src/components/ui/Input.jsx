import React from 'react'
import { cn } from './utils/cn'

export function Input({ className, ...props }) {
  return (
    <input 
      className={cn(
        "w-full border rounded px-3 py-2", 
        className
      )} 
      {...props} 
    />
  )
}