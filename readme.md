# Comfy

**Comfy** is an e-commerce web application built using modern technologies like React, Redux, React Router DOM, React Query, Daisy UI, and Tailwind CSS. It offers a seamless shopping experience with essential features such as authentication, protected routes, and a user-friendly interface.

---

## Features

### Core Features
- **Authentication**:
  - Login
  - Logout
  - Register
- **Protected Routes**:
  - Only logged-in users can access the checkout and order pages.
- **Dynamic Pages**:
  - Landing Page
  - About Page
  - Products Page
  - Single Product Page
  - Orders Page
  - Checkout Page
  - Order Confirmation Page

### Technologies Used
- **React**: For building a dynamic and responsive UI.
- **Redux**: For state management.
- **React Router DOM**: For routing and navigation.
- **React Query**: For efficient server state management and data fetching.
- **Daisy UI & Tailwind CSS**: For a modern, accessible, and responsive design.
- **Heroicons**: For clean and stylish icons.

---

## Pages Overview

### 1. Landing Page
- The homepage of the application showcasing the store and its key features.

### 2. About Page
- A brief introduction to the store and its mission.

### 3. Products Page
- Displays a list of products available for purchase.

### 4. Product Page
- A detailed view of a specific product, including its description, price, and add-to-cart functionality.

### 5. Orders Page
- Shows the logged-in user's order history.

### 6. Checkout Page
- A protected route where logged-in users can review their cart and place an order.

### 7. Order Confirmation Page
- Displays order details and confirmation after a successful purchase.

---

## Installation

### Prerequisites
- Node.js (>= 14.x)
- npm or yarn

### Steps to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/comfy.git
   ```

2. Navigate to the project directory:
   ```bash
   cd comfy
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

5. Open the app in your browser:
   ```
   http://localhost:3000
   ```

---

## Folder Structure
```
comfy/
├── public/
├── src/
│   ├── components/    # Reusable React components
│   ├── pages/         # Page components (Landing, About, Products, etc.)
│   ├── features/      # Redux slices and state management
│   ├── hooks/         # Custom React hooks (e.g., React Query hooks)
│   ├── styles/        # Tailwind/Daisy UI styles and configurations
│   ├── App.js         # Main application component
│   ├── index.js       # Application entry point
├── package.json       # Project metadata and dependencies
```

---

## Contributing

We welcome contributions to improve **Comfy**! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push the changes:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- **React Team**: For providing an excellent UI library.
- **Daisy UI & Tailwind CSS**: For a modern and accessible styling framework.
- **Heroicons**: For providing high-quality icons.

