import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom'
import LoadingSpinner from './components/LoadingSpinner.jsx';




const Home = lazy(() => (import('./pages/Home.jsx')))
const Plants = lazy(() => (import('./pages/Plants.jsx')))
const Vegetables = lazy(() => (import('./pages/Vegetables.jsx')))
const Fruits = lazy(() => (import('./pages/Fruits.jsx')))
const Blog = lazy(() => (import('./pages/Blog.jsx')))
const Cart = lazy(() => (import('./pages/Cart.jsx')))
const AuthPage = lazy(() => import('./pages/AuthPage.jsx'))
const PlaceOrder = lazy(() => import('./pages/PlaceOrder.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Orders = lazy(() => import('./pages/Orders.jsx'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'))
const ReturnPolicy = lazy(() => import('./pages/ReturnPolicy.jsx'))
const DeliveryInfo = lazy(() => import('./pages/DeliveryInfo.jsx'))
const FAQPage = lazy(() => import('./pages/FAQPage.jsx'))
const PlantDetails = lazy(() => import('./pages/PlantDetails.jsx'));
const ErrorPage = lazy(() => import('./components/ErrorPage.jsx'));





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='plants' element={<Plants />} />
      <Route path='vegetables' element={<Vegetables />} />
      <Route path='fruits' element={<Fruits />} />
      <Route path='blog' element={<Blog />} />
      <Route path='cart' element={<Cart />} />
      <Route path='contact' element={<Contact />}/>
      <Route path='about' element={<About />}/>
      <Route path='AuthPage' element={<AuthPage/>} />
      <Route path='place-order' element={<PlaceOrder />}/>
      <Route path='orders' element={<Orders />}/>
      <Route path='privacy-policy' element={<PrivacyPolicy />}/>
      <Route path='return-policy' element={<ReturnPolicy />}/>
      <Route path='delivery-info' element={<DeliveryInfo />}/>
      <Route path="faqs" element={<FAQPage />} />
      <Route path="plantDetails/:id" element={<PlantDetails />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(

    <StrictMode>
      <Suspense fallback={<LoadingSpinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </StrictMode>

)
