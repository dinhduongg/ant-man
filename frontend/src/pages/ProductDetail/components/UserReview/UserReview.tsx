import { useQuery } from '@tanstack/react-query'
import { FC, SetStateAction, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import queryString from 'query-string'
import Button from '~/components/Button'
import Rating from '~/pages/ProductDetail/components/Rating'
import useAuth from '~/hooks/useAuth'
import { Review as IReview } from '~/shared/review.interface'
import { publicAxios } from '~/utils/axiosClient'
import Comment from '../Comment'

const UserReview: FC = () => {
  const [reviews, setReviews] = useState<IReview[]>()
  const [rating, setRating] = useState(0)

  const { id } = useParams()
  const { auth } = useAuth()

  const { data } = useQuery({
    queryKey: ['review', id],
    queryFn: () =>
      publicAxios.get(`/review/get/${id}`, {
        paramsSerializer: {
          serialize: (params) => queryString.stringify(params)
        }
      }),
    staleTime: 60 * 1000,
    enabled: id !== undefined
  })

  useEffect(() => {
    setReviews(data?.data)
  }, [data])

  const handleReview = () => {
    if (!Boolean(auth)) {
      alert('Mời bạn đăng nhập!')
    } else if (Boolean(auth) && !Boolean(auth?.fullname)) {
      alert('Mời bạn cập nhật họ và tên')
    } else {
      alert(rating)
    }
  }

  return (
    <div className='border border-[#ddd] p-7 text-[#353535]'>
      {reviews && reviews.length !== 0 ? (
        reviews.map((item) => {
          return <Comment key={item.id} review={item} />
        })
      ) : (
        <div>
          <h3 className='text-xl text-[#1c1c1c] mb-2 font-bold'>Đánh giá</h3>
          <h2 className='text-base text-[#353535] mb-5 pb-7'>Chưa có đánh giá nào</h2>
        </div>
      )}
      <div className='border-2 border-primary p-6'>
        {/* <h3 className='text-xl text-[#1c1c1c] mb-2 font-bold'>Hãy là người đầu tiên nhận xét :name</h3> */}
        <p className='text-base text-[#353535]'>Đánh giá của bạn</p>
        <div className='space-x-0 md:space-x-4 flex flex-col items-start md:flex-row md:items-center text-[#ddd] mb-2'>
          <Rating
            rating={rating}
            onRating={(rate: SetStateAction<number>) => setRating(rate === rating ? 0 : rate)}
            isEdit
          />
        </div>
        <div>
          <h2 className='text-[#1c1c1c] mb-2 font-bold'>Nhận xét của bạn *</h2>
          <textarea className='p-2 w-full outline-none border border-[#ddd] mb-4' rows={4} />
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2'>
            <div>
              <p className='text-[#1c1c1c] mb-2 font-bold'>Tên *</p>
              <input
                type='text'
                placeholder={auth?.fullname}
                className='placeholder-primary p-2 w-full outline-none border border-[#ddd]'
                disabled
              />
            </div>
            {/* <div>
          <p className='text-[#1c1c1c] mb-2 font-bold'>Email *</p>
          <input type='text' className='p-2 w-full outline-none border border-[#ddd]' />
        </div> */}
          </div>
          <Button primary custom='w-auto' onClick={handleReview}>
            Gửi đi
          </Button>
        </div>
      </div>
    </div>
  )
}

export default UserReview
