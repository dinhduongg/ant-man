import Home from '~/pages/Home'
import { AdminHome } from '~/pages/admin/Home'
import MaleWatch from '~/pages/MaleWatch'
import { AdminMaleWatch } from '~/pages/admin/MaleWatch'
import FemaleWatch from '~/pages/FemaleWatch'
import { AdminFemaleWatch } from '~/pages/admin/FemaleWatch'
import { AdminBrand } from '~/pages/admin/Brand'
import { AdminOrder } from '~/pages/admin/Order'
import { AdminUser } from '~/pages/admin/User'
import Info from '~/pages/Info'
import Blogs from '~/pages/Blogs'
import Contact from '~/pages/Contact'
import WhistList from '~/pages/WhistList'
import Cart from '~/pages/Cart'
import Login from '~/pages/Login'
import Register from '~/pages/Register'
import ProductDetail from '~/pages/ProductDetail'
import Checkout from '~/pages/Checkout'
import { ParallaxLayout, ProductLayout, SliderLayout, AdminLayout } from '~/components/Layout'
import Missing from '~/pages/Missing'
import React from 'react'
import Account from '~/pages/Account'
import unauthorized from '~/pages/unauthorized/unauthorized'

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
  { path: '/unauthorized', component: unauthorized, layout: null },
  { path: '/*', component: Missing, layout: null }
]

const privateUserRoutes: route[] = [
  { path: '/yeu-thich', component: WhistList },
  { path: '/gio-hang', component: Cart },
  { path: '/thanh-toan', component: Checkout },
  { path: '/thong-tin', component: Account },
]

const managerRoute: route[] = []

const adminRoute: route[] = [
  { path: '/admin', component: AdminHome, layout: AdminLayout },
  { path: '/admin/dong-ho-nam', component: AdminMaleWatch, layout: AdminLayout },
  { path: '/admin/dong-ho-nu', component: AdminFemaleWatch, layout: AdminLayout },
  { path: '/admin/thuong-hieu', component: AdminBrand, layout: AdminLayout },
  { path: '/admin/hoa-don', component: AdminOrder, layout: AdminLayout },
  { path: '/admin/nguoi-dung', component: AdminUser, layout: AdminLayout },
]

export { publicRoutes, privateUserRoutes, managerRoute, adminRoute }
