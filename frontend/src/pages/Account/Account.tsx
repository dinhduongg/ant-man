import { useMutation, useQuery } from '@tanstack/react-query'
import classNames from 'classnames'
import { FC, useState } from 'react'
import { toast } from 'react-toastify'
import Button from '~/components/Button'
import useAuth from '~/hooks/useAuth'
import usePrivateAxios from '~/hooks/usePrivateAxios'
import { User } from '~/shared/account.interface'

const initState: Pick<User, 'username' | 'fullname' | 'email' | 'phone' | 'city' | 'street' | 'country'> = {
  username: '',
  fullname: '',
  email: '',
  phone: '',
  city: '',
  street: '',
  country: ''
}

const Account: FC = () => {
  const [user, setUser] = useState(initState)
  const [error, setError] = useState(initState)
  const { auth } = useAuth()
  const privateAxios = usePrivateAxios()

  useQuery({
    queryKey: ['user', auth?.username],
    queryFn: () => privateAxios.get(`/users/${auth?.username}`),
    keepPreviousData: true,
    enabled: auth?.username !== undefined,
    onSuccess: (response) => {
      setUser((prev) => ({
        ...prev,
        ...response.data
      }))
    }
  })

  const account = useMutation({
    mutationFn: (body: User) => {
      return privateAxios.patch(`/users/update/${auth?.username}`, body)
    }
  })

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (!user.fullname) {
      setError((prev) => ({
        ...prev,
        fullname: 'Không được để trống'
      }))
    }
    if (!user.email) {
      setError((prev) => ({
        ...prev,
        email: 'Không được để trống'
      }))
    }
    if (!user.phone) {
      setError((prev) => ({
        ...prev,
        phone: 'Không được để trống'
      }))
    }
    if (!user.city) {
      setError((prev) => ({
        ...prev,
        city: 'Không được để trống'
      }))
    }
    if (!user.street) {
      setError((prev) => ({
        ...prev,
        street: 'Không được để trống'
      }))
    }
    if (!user.country) {
      setError((prev) => ({
        ...prev,
        country: 'Không được để trống'
      }))
    } else {
      account.mutate(user as unknown as User, {
        onSuccess: () => {
          toast.success('Cập nhật thành công')
        },
        onError: (error: any) => {
          toast.error(error.response?.data?.message)
        }
      })
    }
  }

  return (
    <div className='py-12'>
      <h3>Hồ sơ của tôi</h3>
      <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
      <form className='space-y-6 py-6' onSubmit={handleSubmit}>
        <div className='flex items-baseline space-x-4'>
          <p className='w-40 text-right'>Tên đăng nhập: </p>
          <span>{user?.username}</span>
        </div>
        <div className='flex items-baseline w-3/4 space-x-4'>
          <p className='w-40 text-right'>Tên: </p>
          <input
            type='text'
            value={user?.fullname}
            onChange={(e) => {
              setUser((prev: any) => ({ ...prev, fullname: e.target.value }))
              setError((prev: any) => ({ ...prev, fullname: '' }))
            }}
            placeholder={error.fullname}
            className={classNames('border border-black outline-none p-2 w-2/4 placeholder:text-red-500', {
              'border-red-500': error.fullname
            })}
          />
        </div>
        <div className='flex items-baseline w-3/4 space-x-4'>
          <p className='w-40 text-right'>Email: </p>
          <input
            type='text'
            value={user?.email}
            onChange={(e) => {
              setUser((prev: any) => ({ ...prev, email: e.target.value }))
              setError((prev: any) => ({ ...prev, email: '' }))
            }}
            placeholder={error.email}
            className={classNames('border border-black outline-none p-2 w-2/4 placeholder:text-red-500', {
              'border-red-500': error.email
            })}
          />
        </div>
        <div className='flex items-baseline w-3/4 space-x-4'>
          <p className='w-40 text-right'>Số điện thoại: </p>
          <input
            type='text'
            value={user?.phone}
            onChange={(e) => {
              setUser((prev: any) => ({ ...prev, phone: e.target.value }))
              setError((prev: any) => ({ ...prev, phone: '' }))
            }}
            placeholder={error.phone}
            className={classNames('border border-black outline-none p-2 w-2/4 placeholder:text-red-500', {
              'border-red-500': error.phone
            })}
          />
        </div>
        <div className='flex items-baseline w-3/4 space-x-4'>
          <p className='w-40 text-right'>Thành phố: </p>
          <input
            type='text'
            value={user?.city}
            onChange={(e) => {
              setUser((prev: any) => ({ ...prev, city: e.target.value }))
              setError((prev: any) => ({ ...prev, city: '' }))
            }}
            placeholder={error.city}
            className={classNames('border border-black outline-none p-2 w-2/4 placeholder:text-red-500', {
              'border-red-500': error.city
            })}
          />
        </div>
        <div className='flex items-baseline w-3/4 space-x-4'>
          <p className='w-40 text-right'>Đường: </p>
          <input
            type='text'
            value={user?.street}
            onChange={(e) => {
              setUser((prev: any) => ({ ...prev, street: e.target.value }))
              setError((prev: any) => ({ ...prev, street: '' }))
            }}
            placeholder={error.street}
            className={classNames('border border-black outline-none p-2 w-2/4 placeholder:text-red-500', {
              'border-red-500': error.street
            })}
          />
        </div>
        <div className='flex items-baseline w-3/4 space-x-4'>
          <p className='w-40 text-right'>Quốc gia: </p>
          <input
            type='text'
            value={user?.country}
            onChange={(e) => {
              setUser((prev: any) => ({ ...prev, country: e.target.value }))
              setError((prev: any) => ({ ...prev, country: '' }))
            }}
            placeholder={error.country}
            className={classNames('border border-black outline-none p-2 w-2/4 placeholder:text-red-500', {
              'border-red-500': error.country
            })}
          />
        </div>
        <div className='w-40 flex justify-end'>
          <Button primary type='submit'>
            Lưu
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Account
