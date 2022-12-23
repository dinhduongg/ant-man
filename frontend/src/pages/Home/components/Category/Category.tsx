import { FC } from 'react'

const Category: FC = () => {
  return (
    <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:gap-5 py-16'>
      <div className='relative overflow-hidden group px-4 pb-4 lg:px-0 lg:pb-0 rounded-xl'>
        <div
          className='relative bg-no-repeat bg-cover bg-[100%_0] lg:bg-[88%_0] pt-[250px] lg:pt-[300px] group-hover:scale-100 lg:group-hover:scale-110 duration-700'
          style={{
            backgroundImage: `url("http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/banner-03.jpg")`
          }}
        >
          <div className='absolute top-0 right-0 bottom-0 left-0 bg-black opacity-40'></div>
        </div>
        <div className='absolute left-8 top-2/4 -translate-y-2/4 text-white'>
          <h1 className='text-[40px] md:text-xl lg:text-[40px] uppercase font-bold my-2'>Cổ điển</h1>
          <h3 className='text-[33px] lg:text-[20px] my-1 leading-8 lg:leading-6'>
            Đa dạng về phong cách, kiểu<br></br> dáng, màu sắc, kích cỡ…
          </h3>
        </div>
      </div>
      <div className='relative overflow-hidden group px-4 pb-4 lg:px-0 lg:pb-0 rounded-xl'>
        <div
          className='relative bg-no-repeat bg-cover bg-[70%_0] lg:bg-[60%_0] pt-[250px] lg:pt-[300px] group-hover:scale-100 lg:group-hover:scale-110 duration-700'
          style={{
            backgroundImage: `url("http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/banner-04.jpg")`
          }}
        >
          <div className='absolute top-0 right-0 bottom-0 left-0 bg-black opacity-40'></div>
        </div>
        <div className='absolute left-8 top-2/4 -translate-y-2/4 text-white'>
          <h1 className='text-[40px] md:text-xl lg:text-[40px] uppercase font-bold my-2'>Smart Watch</h1>
          <h3 className='text-[33px] lg:text-[20px] my-1 leading-8 lg:leading-6'>
            Đa dạng về phong cách, kiểu<br></br> dáng, màu sắc, kích cỡ…
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Category
