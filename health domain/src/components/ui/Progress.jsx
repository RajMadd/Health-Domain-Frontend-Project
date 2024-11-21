import React from 'react'
import { cn } from './utils/cn'

export function Progress({ value, className, ...props }) {
  return (
    <div 
      className={cn(
        "w-full bg-gray-200 rounded-full h-2.5", 
        className
      )} 
      {...props}
    >
      <div 
        className="bg-blue-600 h-2.5 rounded-full" 
        style={{ width: `${value}%` }}
      ></div>
    </div>
  )
}