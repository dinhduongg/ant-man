import Home from '~/pages/Home'
import MaleWatch from '~/pages/MaleWatch'
import FemaleWatch from '~/pages/FemaleWatch'
import Info from '~/pages/Info'
import Blogs from '~/pages/Blogs'
import Contact from '~/pages/Contact'
import WhistList from '~/pages/WhistList'
import Cart from '~/pages/Cart'
import Login from '~/pages/Login'
import Register from '~/pages/Register'
import ProductDetail from '~/pages/ProductDetail'
import Checkout from '~/pages/Checkout'
import { ParallaxLayout, ProductLayout, SliderLayout } from '~/components/Layout'
import Missing from '~/pages/Missing'
import React from 'react'

interface route {
  path: string
  component: React.FC | any
  layout?: any
}

const publicRoutes: route[] = [
  { path: '/', component: Home, layout: SliderLayout },
  { path: '/dong-ho-nam', component: MaleWatch, layout: ProductLayout },
  { path: '/dong-ho-nu', component: FemaleWatch, layout: ProductLayout },
  { path: '/gioi-thieu', component: Info, layout: ParallaxLayout },
  { path: '/blogs', component: Blogs },
  { path: '/lien-he', component: Contact },
  { path: '/dang-nhap', component: Login, layout: null },
  { path: '/dang-ky', component: Register, layout: null },
  { path: '/san-pham/:id', component: ProductDetail },
  { path: '/*', component: Missing, layout: null }
]

const privateUserRoutes: route[] = [
  { path: '/yeu-thich', component: WhistList },
  { path: '/gio-hang', component: Cart },
  { path: '/thanh-toan', component: Checkout },
]

const managerRoute: route[] = []

const adminRoute: route[] = []

export { publicRoutes, privateUserRoutes, managerRoute, adminRoute }
