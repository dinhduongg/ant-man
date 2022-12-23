import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import { FC, useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import Button from '~/components/Button'
import Helmet from '~/components/Helmet'
import { registerData } from '~/shared/account.interface'
import { isAxiosError } from '~/utils/utils'
import userApiServices from '~/api-services/userApiServices'
import './Register.css'

type formError =
  | {
      [key in keyof Omit<registerData, 'confirmPassword'>]: string
    }
  | null

const initialState: registerData = {
  username: '',
  password: '',
  confirmPassword: ''
}

const schema = yup
  .object({
    username: yup.string().required('Điền vào đi mầy'),
    password: yup.string().required('Điền vào đi mầy'),
    confirm: yup.string().required('Điền vào đi mầy')
  })
  .required()

const Register: FC = () => {
  const [init, setInit] = useState<registerData>(initialState)
  const navigate = useNavigate()

  // react query
  const { mutate, error, reset } = useMutation({
    mutationFn: (body: registerData) => {
      return userApiServices.register(body)
    }
  })

  const errorForm: formError = useMemo(() => {
    if (isAxiosError<{ error: formError }>(error) && error.response?.status === 422) {
      return error.response.data.error
    }
    return null
  }, [error])

  // react hook form
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<registerData>({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: registerData) => {
    mutate(data, {
      onSuccess: () => {
        navigate('/dang-nhap')
      }
    })
  }

  watch(['username', 'password', 'confirmPassword'])

  useEffect(() => {
    const subscription = watch((value) => {
      // if (value || error) {
      //   reset()
      // }

      setInit((prev) => ({
        ...prev,
        ...value
      }))
    })
    return () => subscription.unsubscribe()
  }, [watch])

  return (
    <Helmet title='Đăng ký'>
      <motion.div
        className='grid grid-cols-2'
        initial={{ y: '50px', opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
        exit={{ y: '50px', opacity: 0, transition: { duration: 0.2 } }}
      >
        <div
          className='right hidden lg:block w-full h-screen bg-no-repeat bg-cover bg-center'
          style={{
            backgroundImage: `url("https://cdn.pixabay.com/photo/2021/10/21/18/59/wristwatch-6730050_960_720.jpg")`
          }}
        ></div>
        <div className='col-span-full lg:col-span-1 flex items-center justify-center'>
          <div className='w-full lg:w-2/4 px-2 py-5'>
            <div className='mb-6 flex items-center justify-between'>
              <h3 className='font-bold text-4xl mb-2'>Đăng ký</h3>
              <NavLink className='font-bold hover:text-primary duration-200' to='/'>
                Trang chủ
              </NavLink>
            </div>
            <p className='mb-6'>Chào mừng bạn đến với chúng tôi</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='space-y-4'>
                <div className='space-y-2'>
                  <div className='relative'>
                    <input
                      type='text'
                      {...register('username')}
                      className={classNames(
                        'input p-3 outline-none w-full z-10 border border-[#ccc] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none input active:outline-none rounded-md',
                        {
                          'ring-1 ring-primary': Boolean(init.username.length !== 0)
                        }
                      )}
                    />
                    <label
                      className={classNames('label absolute text-base duration-200 mx-4 pointer-events-none', {
                        'text-[14px] font-bold bg-white text-primary px-1 top-0': Boolean(init.username.length !== 0)
                      })}
                    >
                      Tên đăng nhập
                    </label>
                  </div>
                  {errorForm && <p className='text-red-500'>{errorForm.username}</p>}
                  {errors.username?.message && <p className='text-red-500'>{errors.username?.message}</p>}
                </div>
                <div className='space-y-2'>
                  <div className='relative'>
                    <input
                      type='password'
                      {...register('password')}
                      className={classNames(
                        'input p-3 outline-none w-full z-20 border border-[#ccc] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none input active:outline-none rounded-md',
                        {
                          'ring-1 ring-primary': Boolean(init.password.length !== 0)
                        }
                      )}
                    />
                    <label
                      className={classNames('label absolute text-base top-2/4 duration-200 mx-4 pointer-events-none', {
                        'text-[14px] font-bold bg-white text-primary px-1 top-0': Boolean(init.password.length !== 0)
                      })}
                    >
                      Mật khẩu
                    </label>
                  </div>
                  <p className='text-red-500'>{errors.password?.message}</p>
                </div>
                <div className='space-y-2'>
                  <div className='relative'>
                    <input
                      type='password'
                      {...register('confirmPassword')}
                      className={classNames(
                        'input p-3 outline-none w-full z-20 border border-[#ccc] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none input active:outline-none rounded-md',
                        {
                          'ring-1 ring-primary': Boolean(init.confirmPassword.length !== 0)
                        }
                      )}
                    />
                    <label
                      className={classNames('label absolute text-base top-2/4 duration-200 mx-4 pointer-events-none', {
                        'text-[14px] font-bold bg-white text-primary px-1 top-0': Boolean(
                          init.confirmPassword.length !== 0
                        )
                      })}
                    >
                      Nhập lại mật khẩu
                    </label>
                  </div>
                  {errorForm && <p className='text-red-500'>{errorForm.password}</p>}
                  {errors.confirmPassword?.message && <p className='text-red-500'>{errors.confirmPassword?.message}</p>}
                </div>
              </div>
              <div className='text-center my-4 space-x-2'>
                <span>Đã có tài khoản</span>
                <NavLink className='text-primary' to='/dang-nhap'>
                  Đăng nhập
                </NavLink>
              </div>
              <Button primary full custom='h-12' type='submit'>
                Đăng ký
              </Button>
            </form>
            <span className='text-[#6c757d] flex justify-center my-6'>- Hoặc -</span>
            <div className='space-y-2'>
              <div className='flex items-center justify-center bg-[#3b5998] text-white h-14 space-x-4 rounded hover:shadow-header-btn duration-200 cursor-pointer'>
                <FontAwesomeIcon icon={faFacebookF} />
                <span>Đăng nhập với Facebook</span>
              </div>
              <div className='flex items-center justify-center bg-[#1da1f2] text-white h-14 space-x-4 rounded hover:shadow-header-btn duration-200 cursor-pointer'>
                <FontAwesomeIcon icon={faGoogle} />
                <span>Đăng nhập với Google</span>
              </div>
              <div className='flex items-center justify-center bg-[#ea4335] text-white h-14 space-x-4 rounded hover:shadow-header-btn duration-200 cursor-pointer'>
                <FontAwesomeIcon icon={faTwitter} />
                <span>Đăng nhập với Twitter</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Helmet>
  )
}

export default Register
