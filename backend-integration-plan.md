# BGG Classics Backend Integration Plan

## 🏗️ Backend Architecture

### **Technology Stack**
- **Backend**: Node.js + Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **File Storage**: Cloudinary (images)
- **Email**: Nodemailer
- **Security**: Helmet, CORS, bcryptjs
- **Validation**: express-validator

---

## 📊 Data Models

### **1. User Model**
```javascript
const userSchema = {
  _id: ObjectId,
  firstName: String,
  lastName: String,
  email: String (unique, required),
  password: String (hashed),
  phone: String,
  avatar: String (optional),
  role: String (default: 'customer', enum: ['customer', 'admin']),
  isVerified: Boolean,
  addresses: [{
    type: String, // 'shipping', 'billing'
    address: String,
    city: String,
    region: String,
    postalCode: String,
    isDefault: Boolean
  }],
  preferences: {
    newsletter: Boolean,
    notifications: Boolean,
    currency: String (default: 'GHC')
  },
  orderHistory: [{ type: ObjectId, ref: 'Order' }],
  wishlist: [{ type: ObjectId, ref: 'Product' }],
  createdAt: Date,
  updatedAt: Date
}
```

### **2. Product Model**
```javascript
const productSchema = {
  _id: ObjectId,
  name: String (required),
  slug: String (unique),
  description: String,
  longDescription: String,
  category: String (enum: ['oil', 'snacks', 'beauty']),
  subcategory: String,
  price: {
    current: Number,
    original: Number, // for discounts
    currency: String (default: 'GHC')
  },
  images: [{
    url: String,
    alt: String,
    isPrimary: Boolean
  }],
  inventory: {
    inStock: Boolean,
    stockCount: Number,
    lowStockThreshold: Number (default: 10)
  },
  specifications: {
    weight: String,
    origin: String,
    ingredients: String,
    benefits: [String],
    usage: String,
    storage: String
  },
  seo: {
    metaTitle: String,
    metaDescription: String,
    keywords: [String]
  },
  reviews: {
    average: Number (default: 0),
    count: Number (default: 0),
    breakdown: {
      5: Number, 4: Number, 3: Number, 2: Number, 1: Number
    }
  },
  badges: [String], // 'Best Seller', 'New Arrival', 'Limited Edition'
  isActive: Boolean (default: true),
  featured: Boolean (default: false),
  createdAt: Date,
  updatedAt: Date
}
```

### **3. Order Model**
```javascript
const orderSchema = {
  _id: ObjectId,
  orderNumber: String (unique),
  user: { type: ObjectId, ref: 'User' },
  items: [{
    product: { type: ObjectId, ref: 'Product' },
    name: String, // snapshot
    price: Number, // snapshot
    quantity: Number,
    image: String // snapshot
  }],
  pricing: {
    subtotal: Number,
    shipping: Number,
    tax: Number,
    discount: Number,
    total: Number,
    currency: String
  },
  shipping: {
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    region: String,
    postalCode: String,
    phone: String,
    email: String
  },
  payment: {
    method: String, // 'card', 'momo', 'bank_transfer'
    status: String, // 'pending', 'paid', 'failed'
    transactionId: String,
    paidAt: Date
  },
  status: String, // 'pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'
  timeline: [{
    status: String,
    timestamp: Date,
    note: String
  }],
  notes: String,
  createdAt: Date,
  updatedAt: Date
}
```

### **4. Review Model**
```javascript
const reviewSchema = {
  _id: ObjectId,
  product: { type: ObjectId, ref: 'Product' },
  user: { type: ObjectId, ref: 'User' },
  rating: Number (1-5),
  title: String,
  comment: String,
  images: [String], // optional review images
  verified: Boolean, // verified purchase
  helpful: {
    yes: Number,
    no: Number,
    voters: [ObjectId] // prevent duplicate votes
  },
  isVisible: Boolean (default: true),
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🔗 API Endpoints

### **Authentication Endpoints**
```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/refresh-token
POST /api/auth/forgot-password
POST /api/auth/reset-password
GET  /api/auth/profile
PUT  /api/auth/profile
```

### **Product Endpoints**
```
GET    /api/products                 # Get all products with filters
GET    /api/products/featured        # Get featured products
GET    /api/products/category/:cat   # Get products by category
GET    /api/products/:id             # Get single product
POST   /api/products                 # Create product (admin)
PUT    /api/products/:id             # Update product (admin)
DELETE /api/products/:id             # Delete product (admin)
GET    /api/products/search?q=       # Search products
```

### **Cart Endpoints**
```
GET    /api/cart                     # Get user's cart
POST   /api/cart/add                 # Add item to cart
PUT    /api/cart/:itemId             # Update cart item quantity
DELETE /api/cart/:itemId             # Remove item from cart
DELETE /api/cart                     # Clear cart
```

### **Order Endpoints**
```
GET    /api/orders                   # Get user's orders
POST   /api/orders                   # Create new order
GET    /api/orders/:id               # Get single order
PUT    /api/orders/:id/cancel        # Cancel order
GET    /api/admin/orders             # Get all orders (admin)
PUT    /api/admin/orders/:id/status  # Update order status (admin)
```

### **Review Endpoints**
```
GET    /api/reviews/product/:id      # Get product reviews
POST   /api/reviews                  # Create review
PUT    /api/reviews/:id              # Update review
DELETE /api/reviews/:id              # Delete review
POST   /api/reviews/:id/helpful      # Mark review helpful
```

### **User Management Endpoints**
```
GET    /api/users/profile            # Get user profile
PUT    /api/users/profile            # Update profile
GET    /api/users/orders             # Get user orders
GET    /api/users/wishlist           # Get wishlist
POST   /api/users/wishlist/:id       # Add to wishlist
DELETE /api/users/wishlist/:id       # Remove from wishlist
```

---

## 🔄 Migration Strategy

### **Phase 1: Backend Setup (Week 1-2)**
1. Set up Node.js + Express server
2. Configure MongoDB database
3. Implement basic authentication (JWT)
4. Create product and user models
5. Set up Cloudinary for image storage

### **Phase 2: Core API Development (Week 3-4)**
1. Implement product CRUD operations
2. User management endpoints
3. Authentication middleware
4. Basic cart functionality
5. Order creation and management

### **Phase 3: Frontend Integration (Week 5-6)**
1. Replace localStorage auth with API calls
2. Update product fetching to use API
3. Implement real cart management
4. Connect checkout process to backend
5. Add loading states and error handling

### **Phase 4: Advanced Features (Week 7-8)**
1. Review and rating system
2. Wishlist functionality
3. Order tracking
4. Email notifications
5. Search and filtering
6. Admin panel basics

---

## 📱 Frontend Changes Required

### **1. API Service Layer**
Create a centralized API service:

```javascript
// src/services/api.js
import axios from 'axios'

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  profile: () => api.get('/auth/profile'),
  updateProfile: (data) => api.put('/auth/profile', data)
}

export const productAPI = {
  getAll: (params) => api.get('/products', { params }),
  getById: (id) => api.get(`/products/${id}`),
  getByCategory: (category) => api.get(`/products/category/${category}`),
  getFeatured: () => api.get('/products/featured'),
  search: (query) => api.get(`/products/search?q=${query}`)
}

export const cartAPI = {
  get: () => api.get('/cart'),
  add: (productId, quantity) => api.post('/cart/add', { productId, quantity }),
  update: (itemId, quantity) => api.put(`/cart/${itemId}`, { quantity }),
  remove: (itemId) => api.delete(`/cart/${itemId}`),
  clear: () => api.delete('/cart')
}

export const orderAPI = {
  create: (orderData) => api.post('/orders', orderData),
  getAll: () => api.get('/orders'),
  getById: (id) => api.get(`/orders/${id}`),
  cancel: (id) => api.put(`/orders/${id}/cancel`)
}
```

### **2. Update Context Providers**

**AuthContext Changes:**
```javascript
// Replace localStorage user management with API calls
const login = async (email, password) => {
  try {
    const response = await authAPI.login({ email, password })
    const { user, token } = response.data
    
    localStorage.setItem('token', token)
    setUser(user)
    return { success: true, user }
  } catch (error) {
    return { success: false, error: error.response?.data?.message }
  }
}
```

**CartContext Changes:**
```javascript
// Replace localStorage cart with API calls
const addToCart = async (product, quantity = 1) => {
  try {
    await cartAPI.add(product.id, quantity)
    // Refresh cart from server
    await fetchCart()
    showToast(`${product.name} added to cart!`, 'success')
  } catch (error) {
    showToast('Failed to add item to cart', 'error')
  }
}
```

### **3. Add Loading and Error States**

```javascript
// src/hooks/useAsyncState.js
import { useState, useCallback } from 'react'

export const useAsyncState = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  const execute = useCallback(async (asyncFunction) => {
    try {
      setLoading(true)
      setError(null)
      const result = await asyncFunction()
      return result
    } catch (err) {
      setError(err.response?.data?.message || err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])
  
  return { loading, error, execute }
}
```

---

## 🔒 Security Considerations

### **1. Authentication Security**
- JWT tokens with short expiration (15 minutes)
- Refresh token rotation
- Password hashing with bcrypt (12+ rounds)
- Rate limiting on auth endpoints
- Email verification for new accounts

### **2. Data Validation**
```javascript
// express-validator middleware
const productValidation = [
  body('name').trim().isLength({ min: 1 }).escape(),
  body('price').isFloat({ min: 0 }),
  body('category').isIn(['oil', 'snacks', 'beauty']),
  body('description').trim().isLength({ min: 10 })
]
```

### **3. API Security**
- Helmet.js for HTTP headers
- CORS configuration
- Input sanitization
- MongoDB injection prevention
- File upload restrictions

---

## 📊 Admin Dashboard Requirements

### **Key Admin Features Needed:**
1. **Product Management**
   - CRUD operations for products
   - Bulk import/export
   - Inventory tracking
   - Image management

2. **Order Management**
   - Order status updates
   - Shipping management
   - Refund processing
   - Customer communication

3. **User Management**
   - Customer profiles
   - Order history
   - Support tickets

4. **Analytics & Reporting**
   - Sales analytics
   - Product performance
   - Customer insights
   - Revenue tracking

5. **Content Management**
   - Homepage banners
   - Product categories
   - SEO settings
   - Email templates

---

## 🚀 Next Steps

1. **Immediate Actions:**
   - Set up development environment
   - Create MongoDB Atlas cluster
   - Set up Cloudinary account
   - Initialize Node.js project

2. **Development Priority:**
   - Start with authentication system
   - Migrate product data to database
   - Implement basic CRUD operations
   - Test with Postman/Insomnia

3. **Testing Strategy:**
   - Unit tests for API endpoints
   - Integration tests for complete flows
   - Frontend testing with updated API calls

Would you like me to proceed with setting up any specific part of this backend integration plan?
