/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext } from 'react'
import { toast } from 'react-toastify'

const ToastContext = createContext()

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

export const ToastProvider = ({ children }) => {
  const showToast = (message, type = 'success', duration = 3000) => {
    const toastOptions = {
      position: "top-right",
      autoClose: duration,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",      style: {
        background: 'linear-gradient(to right, #ef4444, #ec4899)',
        color: 'white',
        fontWeight: '500',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
      }
    }

    switch (type) {
      case 'success':
        toast.success(message, toastOptions)
        break
      case 'error':
        toast.error(message, toastOptions)
        break
      case 'info':
        toast.info(message, toastOptions)
        break
      case 'warning':
        toast.warn(message, toastOptions)
        break
      default:
        toast(message, toastOptions)
    }
  }
  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
    </ToastContext.Provider>
  )
}