import React from 'react'
import { cn } from './utils/cn'

export function Card({ className, children, ...props }) {
  return (
    <div 
      className={cn(
        "border rounded-lg shadow-md bg-white", 
        className
      )} 
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div 
      className={cn(
        "px-6 py-4 border-b", 
        className
      )} 
      {...props}
    >
      {children}
    </div>
  )
}

export function CardTitle({ className, children, ...props }) {
  return (
    <h2 
      className={cn(
        "text-xl font-bold", 
        className
      )} 
      {...props}
    >
      {children}
    </h2>
  )
}

export function CardDescription({ className, children, ...props }) {
  return (
    <p 
      className={cn(
        "text-gray-500 text-sm", 
        className
      )} 
      {...props}
    >
      {children}
    </p>
  )
}

export function CardContent({ className, children, ...props }) {
  return (
    <div 
      className={cn(
        "p-6", 
        className
      )} 
      {...props}
    >
      {children}
    </div>
  )
}

export function CardFooter({ className, children, ...props }) {
  return (
    <div 
      className={cn(
        "px-6 py-4 border-t", 
        className
      )} 
      {...props}
    >
      {children}
    </div>
  )
}