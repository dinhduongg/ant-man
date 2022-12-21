import { Cart } from "@/entities/cart.entity"
import { Order } from "@/entities/order.entity"
import { Review } from "@/entities/review.entity"
import { AuthorityRole } from "@/entities/shared/enums"
import { User } from "@/entities/user.entity"
import { Builder } from "builder-pattern"

export const generalUserTemplate = Builder(User)
    .username('')
    .password('')
    .email('')
    .phone('')
    .fullname('')
    .authorities([AuthorityRole.USER, AuthorityRole.ANONYMOUS])
    .authority(AuthorityRole.USER)
    .city('')
    .street('')
    .postalCode('')
    .country('')
    .createdAt(new Date())
    .updatedAt(new Date())
    .build()

export const generalCartTemplate = Builder(Cart)
    .username('')
    .products([])
    .totalPrice(0)
    .totalQuantity(0)
    .build()

export const generalOrderTemplate = Builder(Order)
    .user({
        email: '',
        username: '',
        fullname: '',
        phone: ''
    })
    .orderItem([])
    .shippingAddress({
        city: '',
        country: '',
        postalCode: '',
        street: ''
    })
    .paymentResult({
        username: '',
        email: '',
        status: false,
        update_time: new Date()
    })
    .paymentMethod('')
    .taxPrice(0)
    .shippingPrice(0)
    .totalPrice(0)
    .isPaid(false)
    .isDelivered(false)
    .paidAt(new Date())
    .deliveredAt(new Date())
    .build()

export const generalReviewTemplate = Builder(Review)
    .username('')
    .productId('')
    .rating(0)
    .comment('')
    .build()
