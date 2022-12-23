import { FC } from "react"

const Trending: FC = () => {
  return (
    <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:gap-5 py-16'>
      <div className='relative overflow-hidden group px-4 pb-4 lg:px-0 lg:pb-0'>
        <div
          className='relative bg-no-repeat bg-cover bg-[100%_0] lg:bg-[88%_0] pt-[250px] lg:pt-[300px] group-hover:scale-110 duration-700'
          style={{
            backgroundImage: `url("http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/trend-1.jpg")`
          }}
        >
          <div className='absolute top-0 right-0 bottom-0 left-0 bg-black opacity-60'></div>
        </div>
        <div className='absolute left-8 top-2/4 -translate-y-2/4 text-white'>
          <h1 className='text-3xl md:text-xl'>Xu hướng 2022</h1>
          <div className='h-[2px] bg-primary w-[20%] my-3'></div>
          <p className='text-[40px] uppercase font-bold'>Đồng hồ nam</p>
        </div>
      </div>
      <div className='relative overflow-hidden group px-4 pb-4 lg:px-0 lg:pb-0'>
        <div
          className='relative bg-no-repeat bg-cover bg-[70%_0] lg:bg-[60%_0] pt-[250px] lg:pt-[300px] group-hover:scale-110 duration-700'
          style={{
            backgroundImage: `url("http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/trend-2.jpg")`
          }}
        >
          <div className='absolute top-0 right-0 bottom-0 left-0 bg-black opacity-60'></div>
        </div>
        <div className='absolute left-8 top-2/4 -translate-y-2/4 text-white'>
          <h1 className='text-3xl md:text-xl'>Xu hướng 2022</h1>
          <div className='h-[2px] bg-primary w-[20%] my-3'></div>
          <p className='text-[40px] uppercase font-bold'>Đồng hồ nữ</p>
        </div>
      </div>
    </div>
  )
}

export default Trending
