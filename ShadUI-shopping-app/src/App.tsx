import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from "./components/ui/toaster";
import Home from "./pages/Home";
import Loader from "./components/ui/Loader";
import CartProvider from "./Providers/CartProvider";
import UserProvider from "./Providers/UserProvider";
import ProtectedRoute from "./components/ProtectedRoute";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const ProductView = lazy(() => import("./pages/ProductView"));
const Login = lazy(() => import("./pages/Login"));
const Cart = lazy(() => import("./pages/Cart"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const NoMatch = lazy(() => import("./components/NoMatch"));
const OrderStatus = lazy(() => import("./pages/OrderStatus"))
const AdminPage = lazy(() => import("./pages/AdminPage"))
const AdminDashboard = lazy(() => import("./components/Admin/AdminDashboard"))
const ProductList = lazy(() => import("./components/Admin/ProductList"))
const ProductPage = lazy(() => import("./components/Admin/ProductsPage"))
const EditProduct = lazy(() => import("./components/Admin/EditProduct"))
const Orders = lazy(() => import("./components/Admin/AdminOrderList"))
const CustomerList = lazy(() => import("./components/Admin/CustomerList"))
const UserProfile = lazy(() => import("./components/UserProfileSection"))

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" Component={Home}>
              <Route index element={<Navigate to="dashboard" />}></Route>
              <Route path="dashboard" element={<Dashboard />}></Route>
              <Route path="productlist" element={<ProductView />}></Route>
              <Route path="product/:id" element={<ProductDetails />}></Route>
              <Route path="cart" element={<Cart />}></Route>
              <Route path="order-status" element={<OrderStatus />}></Route>
              <Route path="user-profile" element={<UserProfile />}></Route>
            </Route>
            <Route path="/admin" element={<ProtectedRoute><AdminPage></AdminPage></ProtectedRoute>}>
              <Route index element={<Navigate to="dashboard" />}></Route>
              <Route path="dashboard" element={<AdminDashboard />}></Route>
              <Route path="orders" element={<Orders />}></Route>
              <Route path="customers" element={<CustomerList />}></Route>
              <Route path="products" element={<ProductPage />}>
                <Route index element={<ProductList />} />
                <Route path="edit-product/:id" element={<EditProduct />} />
              </Route>
            </Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Suspense>
        <Toaster />
      </CartProvider>
    </UserProvider>
  );
}

export default App;
