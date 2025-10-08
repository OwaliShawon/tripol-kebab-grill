# 🥙 Tripol Kebab & Grill

A modern, full-stack e-commerce web application for a kebab restaurant built with Next.js, featuring online ordering, payment processing, and administrative functionality.

## 🌐 Live Demo

[https://tripolkebab.vercel.app/](https://tripolkebab.vercel.app/)

## ✨ Features

### Customer Features
- 🍽️ Browse kebab menu with detailed product information
- 🛒 Shopping cart with real-time updates
- 💳 Secure payment processing with PayPal integration
- 📱 Responsive design for mobile and desktop
- 🧾 Order tracking and history
- 📞 Contact and about pages

### Admin Features
- 🔐 Admin authentication system
- ➕ Add, edit, and delete products
- 📊 Order management dashboard
- 🖼️ Image upload for products

## 🛠️ Tech Stack

### Frontend
- **Next.js 12** - React framework with SSR/SSG
- **React 17** - User interface library
- **Redux Toolkit** - State management
- **CSS Modules** - Styling solution
- **Axios** - HTTP client for API calls

### Backend
- **Next.js API Routes** - Serverless functions
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Integrations
- **PayPal SDK** - Payment processing
- **Firebase** - Authentication and file storage
- **Vercel** - Deployment platform

## 📁 Project Structure

```
tripol-kebab-grill/
├── components/          # Reusable React components
│   ├── Add.jsx         # Product addition form
│   ├── Featured.jsx    # Featured products section
│   ├── KebabCard.jsx   # Individual product card
│   ├── KebabList.jsx   # Product grid/list
│   ├── Navbar.jsx      # Navigation component
│   └── ...
├── pages/              # Next.js pages and API routes
│   ├── api/            # Backend API endpoints
│   │   ├── orders/     # Order management APIs
│   │   └── products/   # Product management APIs
│   ├── admin/          # Admin dashboard pages
│   ├── orders/         # Order tracking pages
│   └── ...
├── models/             # MongoDB schemas
│   ├── Order.js        # Order data model
│   └── Product.js      # Product data model
├── redux/              # State management
│   ├── cartSlice.js    # Shopping cart logic
│   └── store.js        # Redux store configuration
├── styles/             # CSS modules
├── util/               # Utility functions
│   ├── firebase-config.js
│   └── mongo.js        # MongoDB connection
└── public/             # Static assets
    └── img/            # Product and UI images
```

## 🚀 Getting Started

### Prerequisites
- Node.js 14.x or later
- MongoDB database
- Firebase project (for authentication)
- PayPal developer account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/OwaliShawon/tripol-kebab-grill.git
   cd tripol-kebab-grill
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   
   Create a `.env.local` file in the root directory:
   ```env
   # MongoDB
   MONGODB_URL=your_mongodb_connection_string
   
   # Firebase
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   
   # PayPal
   NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id
   
   # Admin Authentication
   ADMIN_USERNAME=your_admin_username
   ADMIN_PASSWORD=your_admin_password
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Database Setup
The application uses MongoDB with Mongoose for data modeling. Ensure your MongoDB instance is running and accessible via the connection string in your environment variables.

### Firebase Setup
Firebase is used for authentication and file storage. Configure your Firebase project and add the credentials to your environment variables.

### PayPal Integration
Set up PayPal SDK for payment processing by adding your client ID to the environment variables.

## 📊 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/[id]` - Get product by ID
- `POST /api/products` - Create new product (admin)
- `PUT /api/products/[id]` - Update product (admin)
- `DELETE /api/products/[id]` - Delete product (admin)

### Orders
- `GET /api/orders` - Get all orders (admin)
- `GET /api/orders/[id]` - Get order by ID
- `POST /api/orders` - Create new order
- `PUT /api/orders/[id]` - Update order status (admin)

### Authentication
- `POST /api/login` - Admin login

## 🎨 Styling

The project uses CSS Modules for component-specific styling, ensuring style encapsulation and preventing CSS conflicts. Global styles are defined in `styles/globals.css`.

## 📱 Responsive Design

The application is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📟 Tablets (768px+)
- 💻 Desktop (1024px+)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Developer

**Owali Shawon**
- GitHub: [@OwaliShawon](https://github.com/OwaliShawon)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- MongoDB team for the database solution
- PayPal for payment processing
- Vercel for hosting platform

---

Made with ❤️ for kebab lovers everywhere!
