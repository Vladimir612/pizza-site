import React, { useState } from 'react'

const ToggleContext = React.createContext()

const ToggleProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleAside = () => {
    setIsOpen(!isOpen)
  }
  return (
    <ToggleContext.Provider value={{ isOpen, toggleAside }}>
      {children}
    </ToggleContext.Provider>
  )
}
const ToggleConsumer = ToggleContext.Consumer

export { ToggleProvider, ToggleConsumer, ToggleContext }
