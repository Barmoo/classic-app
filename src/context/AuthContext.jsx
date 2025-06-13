import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Check for existing user session on app load
  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (err) {
        console.error('Error parsing saved user:', err)
        localStorage.removeItem('user')
      }
    }
    setLoading(false)
  }, [])

  // Register function
  const register = async (userData) => {
    try {
      // Get existing users from localStorage
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]')
      
      // Check if user already exists
      const userExists = existingUsers.find(u => u.email === userData.email)
      if (userExists) {
        throw new Error('User with this email already exists')
      }

      // Create new user
      const newUser = {
        id: Date.now().toString(),
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password, // In real app, this should be hashed
        dateCreated: new Date().toISOString(),
        orders: [],
        preferences: {
          newsletter: userData.newsletter || false,
          notifications: true
        }
      }

      // Save to users array
      existingUsers.push(newUser)
      localStorage.setItem('users', JSON.stringify(existingUsers))

      // Set current user (without password)
      const userWithoutPassword = { ...newUser }
      delete userWithoutPassword.password
      
      setUser(userWithoutPassword)
      localStorage.setItem('user', JSON.stringify(userWithoutPassword))

      return { success: true, user: userWithoutPassword }
    } catch (error) {
      console.error('Registration error:', error)
      return { success: false, error: error.message }
    }
  }

  // Login function
  const login = async (email, password) => {
    try {
      // Get users from localStorage
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]')
      
      // Find user by email
      const foundUser = existingUsers.find(u => u.email === email)
      if (!foundUser) {
        throw new Error('No account found with this email')
      }

      // Check password (in real app, compare hashed passwords)
      if (foundUser.password !== password) {
        throw new Error('Invalid password')
      }

      // Set current user (without password)
      const userWithoutPassword = { ...foundUser }
      delete userWithoutPassword.password
      
      setUser(userWithoutPassword)
      localStorage.setItem('user', JSON.stringify(userWithoutPassword))

      return { success: true, user: userWithoutPassword }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, error: error.message }
    }
  }

  // Logout function
  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  // Update user profile
  const updateProfile = async (updatedData) => {
    try {
      if (!user) throw new Error('No user logged in')

      // Get existing users
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]')
      
      // Find and update user
      const userIndex = existingUsers.findIndex(u => u.id === user.id)
      if (userIndex === -1) throw new Error('User not found')

      // Update user data
      existingUsers[userIndex] = { ...existingUsers[userIndex], ...updatedData }
      localStorage.setItem('users', JSON.stringify(existingUsers))

      // Update current user state
      const updatedUser = { ...existingUsers[userIndex] }
      delete updatedUser.password
      
      setUser(updatedUser)
      localStorage.setItem('user', JSON.stringify(updatedUser))

      return { success: true, user: updatedUser }
    } catch (error) {
      console.error('Profile update error:', error)
      return { success: false, error: error.message }
    }
  }

  // Check if user is authenticated
  const isAuthenticated = () => {
    return user !== null
  }

  const value = {
    user,
    loading,
    register,
    login,
    logout,
    updateProfile,
    isAuthenticated
  }

  return (
    <AuthContext.Provider value={value}>      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider