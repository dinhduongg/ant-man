import { FC } from 'react'
import { Review } from '~/shared/review.interface'
import Rating from '../Rating'

interface Props {
  review: Review
}

const Comment: FC<Props> = ({ review }) => {
  return (
    <div key={review.id}>
      <h3 className='text-xl text-[#1c1c1c] font-bold'>{review.username}</h3>
      <h2 className='text-base text-[#353535]'>
        <Rating rating={review.rating} />
      </h2>
      <div className='mb-5 flex items-center space-x-4'>
        <h2 className='text-base text-[#353535]'>{review.comment}</h2>
      </div>
    </div>
  )
}

export default Comment
