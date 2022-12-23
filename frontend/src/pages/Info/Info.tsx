import { FC } from 'react'
import Helmet from '~/components/Helmet'

const Info: FC = () => {
  return (
    <Helmet title='Giới thiệu'>
      <div className='container mx-auto px-4 lg:px-0'>
        {/* 1 section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 py-14'>
          <div>
            <img
              src='http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/about-us_bg.jpg'
              alt='anh'
            />
          </div>
          <div className='flex justify-center flex-col'>
            <h2 className='text-[40px] text-[#1c1c1c] mb-5 font-bold'>Giới thiệu về Mona Watch</h2>
            <p className='text-base text-[#353535]'>
              “Cùng với sự phát triển không ngừng của thời trang thế giới, rất nhiều thương hiệu cho ra đời những mẫu
              đồng hồ nam chính hãng đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ… Một chiếc đồng hồ nam cao cấp
              chính hãng khắc họa một giá trị đích thực khi nói đến phụ kiện xa xỉ dành cho phái mạnh. Hiện nay, đồng hồ
              là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay. Trên cổ tay của những
              người đàn ông thành đạt luôn dành vị trí cho một chiếc đồng hồ nam cao cấp.”
            </p>
          </div>
        </div>

        {/* 2 section */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-14'>
          <div className='flex items-center'>
            <div>
              <svg
                version='1.1'
                id='Capa_1'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                x='0px'
                y='0px'
                viewBox='0 0 512.008 512.008'
                style={{ enableBackground: 'new 0 0 512.008 512.008' } as any}
                xmlSpace='preserve'
                width={100}
                height={100}
              >
                <g fill='#353535'>
                  <g fill='#353535'>
                    <path
                      d='M341.354,17.104c-2.1-10.1-11.1-17.3-21.4-17.1h-128c-10.3-0.2-19.3,7-21.3,17.1l-17.1,70.4h205.4L341.354,17.104z'
                      fill='#353535'
                    />
                  </g>
                </g>
                <g fill='#353535'>
                  <g fill='#353535'>
                    <path
                      d='M153.054,424.504l17.5,70.4c2.1,10.1,11,17.3,21.3,17.1h128c10.3,0.2,19.3-7,21.3-17.1l17.1-70.4H153.054z'
                      fill='#353535'
                    />
                  </g>
                </g>
                <g fill='#353535'>
                  <g fill='#353535'>
                    <path
                      d='M341.254,106.704h-170.6c-35.3,0-64,28.7-64,64v170.7c0,35.3,28.7,64,64,64h170.7c35.3,0,64-28.7,64-64v-170.7
                                        C405.254,135.304,376.654,106.704,341.254,106.704z M191.954,277.304c-11.8,0-21.3-9.6-21.3-21.3c0-11.8,9.6-21.3,21.3-21.3
                                        c11.8,0,21.3,9.6,21.3,21.3C213.254,267.804,203.754,277.304,191.954,277.304z M255.954,277.304c-11.8,0-21.3-9.6-21.3-21.3
                                        c0-11.8,9.6-21.3,21.3-21.3c11.8,0,21.3,9.6,21.3,21.3C277.254,267.804,267.754,277.304,255.954,277.304z M319.954,277.304
                                        c-11.8,0-21.3-9.6-21.3-21.3c0-11.8,9.6-21.3,21.3-21.3c11.8,0,21.3,9.6,21.3,21.3
                                        C341.254,267.804,331.754,277.304,319.954,277.304z'
                      fill='#353535'
                    />
                  </g>
                </g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
              </svg>
            </div>
            <div className='pl-4'>
              <h3 className='text-xl text-[#1c1c1c] mb-3 font-bold'>Hàng chính hãng</h3>
              <p className='text-base text-[#353535]'>
                Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay
              </p>
            </div>
          </div>
          <div className='flex items-center'>
            <div>
              <svg
                version='1.1'
                id='Capa_1'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                x='0px'
                y='0px'
                viewBox='0 0 612.003 612.003'
                style={{ enableBackground: 'new 0 0 612.003 612.003' } as any}
                xmlSpace='preserve'
                width={100}
                height={100}
              >
                <g fill='#353535'>
                  <path
                    d='M608.067,333.255l-44.973-71.364c-3.563-5.658-4.764-12.49-3.352-19.022l17.854-82.442
                                            c2.784-12.848-4.649-25.708-17.164-29.724l-80.323-25.759c-6.366-2.043-11.679-6.5-14.795-12.413l-39.315-74.627
                                            c-6.124-11.634-20.082-16.711-32.253-11.743l-78.094,31.902c-6.188,2.522-13.122,2.522-19.31,0L218.261,6.167
                                            c-12.171-4.968-26.129,0.109-32.259,11.743l-39.315,74.62c-3.116,5.913-8.429,10.37-14.795,12.413l-80.322,25.759
                                            c-12.522,4.016-19.948,16.877-17.164,29.724l17.847,82.442c1.418,6.532,0.211,13.365-3.352,19.022L3.934,333.255
                                            c-7.011,11.123-4.425,25.746,5.964,33.805l66.664,51.677c5.287,4.099,8.754,10.102,9.661,16.73l11.424,83.573
                                            c1.775,13.026,13.16,22.573,26.289,22.062l84.288-3.263c6.679-0.262,13.192,2.114,18.154,6.602l62.462,56.677
                                            c9.738,8.831,24.597,8.831,34.328,0l62.469-56.677c4.949-4.495,11.468-6.864,18.154-6.602l84.281,3.263
                                            c13.141,0.511,24.514-9.042,26.295-22.062l11.424-83.573c0.907-6.628,4.374-12.63,9.655-16.73l66.664-51.677
                                            C612.498,359.001,615.078,344.378,608.067,333.255z M235.234,407.92l-74.435-51.99l30.593,70.904l-20.389,8.799l-46.92-108.719
                                            l21.353-9.221l75.84,53.401l-31.34-72.602l20.389-8.806l46.933,108.725L235.234,407.92z M280.468,388.393l-46.92-108.719
                                            l80.616-34.801l7.931,18.396l-58.669,25.318l10.402,24.099l54.589-23.562l7.905,18.32l-54.589,23.556l12.771,29.59l60.738-26.212
                                            l7.905,18.32L280.468,388.393z M464.248,309.08l-56.735-71.945l13.492,90.597L397.2,338.006l-72.871-97.512l22.464-9.706
                                            l48.625,67.609l-12.356-83.253l26.116-11.27l51.831,67.718l-16.091-83.145l22.1-9.54l20.516,120.123L464.248,309.08z'
                    fill='#353535'
                  />
                </g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
              </svg>
            </div>
            <div className='pl-4'>
              <h3 className='text-xl text-[#1c1c1c] mb-3 font-bold'>Sản phẩm mới 100%</h3>
              <p className='text-base text-[#353535]'>
                Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay
              </p>
            </div>
          </div>
          <div className='flex items-center'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                version='1.1'
                id='Layer_1'
                x='0px'
                y='0px'
                viewBox='0 0 511.933 511.933'
                style={{ enableBackground: 'new 0 0 511.933 511.933' } as any}
                xmlSpace='preserve'
                width={100}
                height={100}
              >
                <path
                  d='M473.433,409.506l-57.588-57.588c11.01-41.086-0.527-85.381-31.071-115.925c-33.737-33.736-84.25-44.286-128.687-26.873  l-28.458,11.15l61.896,61.896c3.777,3.777,5.857,8.799,5.857,14.142c0,5.342-2.081,10.364-5.858,14.142  c-3.778,3.778-8.8,5.858-14.142,5.858s-10.365-2.08-14.142-5.858l-61.895-61.895l-11.151,28.458  c-17.412,44.438-6.863,94.949,26.874,128.688c22.939,22.938,53.628,35.157,84.895,35.155c10.365,0,20.799-1.344,31.028-4.085  l57.589,57.589c11.333,11.332,26.4,17.573,42.426,17.573s31.094-6.241,42.426-17.573c11.333-11.333,17.574-26.4,17.574-42.427  C491.007,435.905,484.765,420.838,473.433,409.506z M445.149,466.074c-3.778,3.778-8.8,5.858-14.142,5.858  s-10.365-2.08-14.142-5.858l-75.519-75.518l-12.185,4.774c-29.632,11.608-63.314,4.578-85.809-17.915  c-14.059-14.06-22.077-32.486-23.28-51.565l12.883,12.884c11.333,11.332,26.4,17.573,42.426,17.573s31.094-6.241,42.426-17.573  c11.333-11.333,17.574-26.4,17.574-42.427c0-16.027-6.241-31.095-17.574-42.427l-12.883-12.883  c19.077,1.203,37.507,9.223,51.565,23.279c22.494,22.495,29.526,56.177,17.915,85.81l-4.774,12.186l75.519,75.519h0  c3.777,3.777,5.857,8.799,5.857,14.142C451.007,457.274,448.926,462.297,445.149,466.074z M235.614,467.353  c18.051,7.92,37.409,12.425,57.066,13.322c-27.71,17.682-48.294,26.939-49.623,27.53l-8.131,3.618l-8.131-3.618  c-2.089-0.93-51.727-23.253-101.857-66.063c-29.813-25.46-53.656-52.958-70.863-81.729c-21.996-36.775-33.148-75.635-33.148-115.498  V124.247c0-29.085,20.842-53.931,49.559-59.078c48.482-8.688,93.135-35.167,115.437-50.178C200.49,5.185,217.435,0,234.926,0  s34.437,5.185,49.006,14.992c22.3,15.01,66.953,41.488,115.435,50.177h0c28.716,5.147,49.559,29.993,49.559,59.078v120.667  c0,5.389-0.211,10.758-0.618,16.108c-7.897-19.599-19.728-37.79-35.25-53.313c-1.356-1.356-2.735-2.682-4.132-3.982v-79.48  c0-9.692-6.988-17.979-16.615-19.705c-55.696-9.981-105.804-39.6-130.715-56.367C253.651,42.826,244.429,40,234.926,40  s-18.725,2.826-26.668,8.174c-24.913,16.769-75.021,46.387-130.717,56.368c-9.627,1.726-16.615,10.013-16.615,19.705v120.667  c0,59.429,30.023,115.335,89.236,166.167c34.417,29.545,69.359,48.803,84.764,56.623  C235.147,467.592,235.385,467.47,235.614,467.353z'
                  fill='#353535'
                />
              </svg>
            </div>
            <div className='pl-4'>
              <h3 className='text-xl text-[#1c1c1c] mb-3 font-bold'>Bảo hành 12 tháng</h3>
              <p className='text-base text-[#353535]'>
                Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay
              </p>
            </div>
          </div>
          <div className='flex items-center'>
            <div>
              <svg
                version='1.1'
                id='Capa_1'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                x='0px'
                y='0px'
                viewBox='0 0 94 94'
                style={{ enableBackground: 'new 0 0 94 94' } as any}
                xmlSpace='preserve'
                width={100}
                height={100}
              >
                <g fill='#353535'>
                  <path
                    style={{}}
                    d='M53.131,6C30.902,6,12.832,23.806,12.287,45.976H0l18.393,20.5l18.391-20.5H22.506
                                        C23.045,29.468,36.545,16.25,53.131,16.25c16.93,0,30.652,13.767,30.652,30.75S70.061,77.75,53.131,77.75
                                        c-6.789,0-13.059-2.218-18.137-5.966l-7.029,7.521C34.904,84.751,43.639,88,53.131,88C75.703,88,94,69.645,94,47S75.703,6,53.131,6
                                        z M49.498,25v23.45l15.027,15.024l4.949-4.949L56.5,45.55V25H49.498z'
                    fill='#030104'
                  />
                </g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
              </svg>
            </div>
            <div className='pl-4'>
              <h3 className='text-xl text-[#1c1c1c] mb-3 font-bold'>Đổi trả trong vòng 7 ngày</h3>
              <p className='text-base text-[#353535]'>
                Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay
              </p>
            </div>
          </div>
          <div className='flex items-center'>
            <div>
              <svg
                version='1.1'
                id='Capa_1'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                x='0px'
                y='0px'
                viewBox='0 0 419.519 419.519'
                style={{ enableBackground: 'new 0 0 419.519 419.519' } as any}
                xmlSpace='preserve'
                width={100}
                height={100}
              >
                <g fill='#353535'>
                  <path
                    d='M105.839,154.031c1.249-1.592,1.602-3.641,1.081-6.263c-0.514-2.59-1.655-4.429-3.488-5.622
                                        c-1.818-1.183-4.301-1.471-7.367-0.862l-9.972,1.979l3.198,16.11l9.76-1.938C102.288,156.794,104.571,155.648,105.839,154.031z'
                    fill='#353535'
                  />
                  <path
                    d='M386.784,190.429c-1.622-0.34-3.154-0.662-4.52-1.017c-15.092-3.925-22.58-6.263-27.827-16.394l-19.694-39.873
                                        c-6.286-12.135-22.518-22.008-36.183-22.008h-35.354V83.957c0-8.11-6.598-14.708-14.71-14.708L13.829,69.494
                                        C5.945,69.494,0,75.766,0,84.083v203.465c0,8.11,6.598,14.708,14.708,14.708h25.659c3.832,27.098,27.169,48.013,55.311,48.013
                                        c28.144,0,51.483-20.914,55.315-48.013h93.496c0.616,0,1.246-0.034,1.879-0.082c3.796,27.138,27.151,48.095,55.322,48.095
                                        c28.144,0,51.483-20.914,55.315-48.013h36.746c14.208,0,25.766-11.558,25.766-25.765v-44.204
                                        C419.519,197.297,399.819,193.164,386.784,190.429z M41.011,179.946l5.119,25.786l-14.407,2.86l-12.708-64.018l44.753-8.884
                                        l2.293,11.551l-30.346,6.024l3.003,15.129l25.999-5.161l2.292,11.552L41.011,179.946z M95.679,315.104
                                        c-11.415,0-20.701-9.287-20.701-20.702c0-11.415,9.286-20.702,20.701-20.702c11.419,0,20.709,9.287,20.709,20.702
                                        C116.388,305.817,107.098,315.104,95.679,315.104z M119.435,191.179l-0.311-0.161c-1.538-0.798-2.749-2.366-3.599-4.661
                                        c-0.779-2.104-1.37-4.157-1.756-6.104l-0.872-4.39c-0.559-2.816-1.754-4.864-3.552-6.089c-1.797-1.223-4.112-1.559-6.893-1.007
                                        l-10.867,2.157l4.924,24.805l-14.408,2.86l-12.708-64.018l24.38-4.84c7.274-1.444,13.404-0.892,18.221,1.638
                                        c4.892,2.569,7.981,6.94,9.183,12.991c0.676,3.407,0.357,6.564-0.947,9.383c-1.008,2.177-2.584,4.182-4.698,5.983
                                        c2.994,0.626,5.419,1.899,7.23,3.797c2.23,2.341,3.753,5.501,4.527,9.394l0.905,4.561c0.327,1.648,0.901,3.351,1.707,5.064
                                        c0.745,1.585,1.686,2.681,2.797,3.258l0.427,0.221l0.466,2.347L119.435,191.179z M139.81,187.135l-12.708-64.018l44.37-8.808
                                        l2.293,11.551l-29.962,5.948l2.707,13.638l25.701-5.102l2.292,11.552l-25.7,5.102l3.122,15.726l30.048-5.965l2.293,11.552
                                        L139.81,187.135z M189.933,177.185l-12.708-64.018l44.37-8.808l2.293,11.551l-29.962,5.948l2.708,13.637l25.7-5.102l2.292,11.552
                                        l-25.7,5.102l3.122,15.726l30.047-5.965l2.293,11.552L189.933,177.185z M301.691,315.104c-11.415,0-20.701-9.287-20.701-20.702
                                        c0-11.415,9.286-20.702,20.701-20.702c11.419,0,20.709,9.287,20.709,20.702C322.4,305.817,313.11,315.104,301.691,315.104z
                                        M263.206,187.26v-54.948h27.085c10.395,0,23.217,7.8,27.979,16.988l17.525,35.482c0.452,0.873,0.924,1.698,1.419,2.478H263.206z'
                    fill='#353535'
                  />
                </g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
              </svg>
            </div>
            <div className='pl-4'>
              <h3 className='text-xl text-[#1c1c1c] mb-3 font-bold'>Miễn phí giao hàng</h3>
              <p className='text-base text-[#353535]'>
                Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay
              </p>
            </div>
          </div>
          <div className='flex items-center'>
            <div>
              <svg
                version='1.1'
                id='Capa_1'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                x='0px'
                y='0px'
                viewBox='0 0 354.796 354.796'
                style={{ enableBackground: 'new 0 0 354.796 354.796' } as any}
                xmlSpace='preserve'
                width={100}
                height={100}
              >
                <g fill='#353535'>
                  <g id='Layer_5_58_' fill='#353535'>
                    <g fill='#353535'>
                      <g fill='#353535'>
                        <path
                          d='M265.442,109.092c-10.602-4.25-13.665-6.82-13.665-11.461c0-3.714,2.813-8.053,10.744-8.053
                                                    c7.015,0,12.395,2.766,12.443,2.79c0.566,0.302,1.201,0.463,1.83,0.463c1.535,0,2.893-0.929,3.456-2.367l1.927-4.926
                                                    c0.671-1.795-0.347-3.359-1.645-3.92c-4.319-1.88-12.76-3.335-12.846-3.35c-0.136-0.024-0.609-0.125-0.609-0.678l-0.027-7.146
                                                    c0-2.152-1.797-3.904-4.003-3.904h-3.457c-2.204,0-4,1.751-4,3.905l0.009,7.513c0,0.576-0.624,0.826-0.852,0.879
                                                    c-10.655,2.538-17.314,10.343-17.314,20.188c0,12.273,10.145,17.819,21.099,21.982c8.757,3.438,12.329,6.924,12.329,12.037
                                                    c0,5.564-5.059,9.45-12.307,9.45c-6.189,0-14.565-3.923-14.648-3.963c-0.536-0.254-1.104-0.382-1.688-0.382
                                                    c-1.594,0-2.982,0.964-3.537,2.457l-1.84,4.982c-0.654,1.86,0.353,3.37,1.642,4.042c5.144,2.679,15.098,4.249,15.541,4.318
                                                    c0.119,0.017,0.725,0.23,0.725,0.784v7.48c0,2.152,1.797,3.904,4.004,3.904h3.572c2.208,0,4.005-1.751,4.005-3.904v-7.872
                                                    c0-0.736,0.543-0.801,0.655-0.828c11.351-2.55,18.343-10.855,18.343-21.283C285.325,121.518,279.377,114.597,265.442,109.092z'
                          fill='#353535'
                        />
                        <path
                          d='M260.979,22.509c-51.816,0-93.818,42.005-93.818,93.818c0,51.814,42.002,93.82,93.818,93.82
                                                    c51.814,0,93.817-42.006,93.817-93.82C354.796,64.514,312.793,22.509,260.979,22.509z M260.979,188.404
                                                    c-39.808,0-72.076-32.271-72.076-72.076s32.268-72.075,72.076-72.075c39.806,0,72.073,32.27,72.073,72.075
                                                    S300.785,188.404,260.979,188.404z'
                          fill='#353535'
                        />
                      </g>
                      <g fill='#353535'>
                        <path
                          d='M335.733,255.61c-19.95,11.011-47.389,21.192-74.753,25.484c-24.346,3.818-70.148-5.39-70.148-16.265
                                                    c0-4.121,40.17,10.154,64.469,3.671c18.633-4.971,15.988-22.401,5.853-24.7c-10.076-2.287-69.108-23.913-94.323-24.659
                                                    c-11.878-0.351-41.203,4.131-55.393,6.442c-4.861,0.791-7.909,0.704-8.213,5.356c-1.412,21.62-4.195,65.832-5.712,88.926
                                                    c-0.032,0.488,0.646,7.05,6.061,2.432c5.927-5.054,14.24-10.656,21.929-8.912c12.063,2.737,116.424,21.856,130.819,18.51
                                                    c20.593-4.787,78.888-39.334,90.065-50.072C363.711,265.176,350.244,247.601,335.733,255.61z'
                          fill='#353535'
                        />
                        <path
                          d='M74.426,224.74l-54.672-2.694c-4.221-0.208-8.532,2.973-9.581,7.066l-9.941,90.255c-1.048,4.094,1.55,7.578,5.773,7.741
                                                    l60.59-0.006c4.224,0.163,7.942-3.151,8.266-7.365l6.654-86.958C81.837,228.566,78.647,224.948,74.426,224.74z M42.24,315.145
                                                    c-8.349,0-15.116-6.768-15.116-15.116c0-8.349,6.768-15.116,15.116-15.116s15.116,6.768,15.116,15.116
                                                    C57.356,308.378,50.589,315.145,42.24,315.145z'
                          fill='#353535'
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
                <g fill='#353535'></g>
              </svg>
            </div>
            <div className='pl-4'>
              <h3 className='text-xl text-[#1c1c1c] mb-3 font-bold'>Giá cả hợp lý</h3>
              <p className='text-base text-[#353535]'>
                Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className='relative bg-no-repeat bg-cover bg-[0_45%] py-[130px]'
        style={{
          backgroundImage: `url("http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/banner-portfolio.jpg")`
        }}
      >
        <div className='absolute top-2/4 -translate-y-2/4 z-10 container left-2/4 -translate-x-2/4 text-white'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
            <div className='text-center'>
              <h2 className='text-[40px] font-extrabold'>1280</h2>
              <p className='text-base uppercase'>Sản phẩm</p>
            </div>
            <div className='text-center'>
              <h2 className='text-[40px] font-extrabold'>8</h2>
              <p className='text-base uppercase'>Giải thưởng</p>
            </div>
            <div className='text-center'>
              <h2 className='text-[40px] font-extrabold'>3898</h2>
              <p className='text-base uppercase'>Khách hàng hài lòng</p>
            </div>
            <div className='text-center'>
              <h2 className='text-[40px] font-extrabold'>25</h2>
              <p className='text-base uppercase'>Chi nhánh cửa hàng</p>
            </div>
          </div>
        </div>
        <div className='absolute top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.7)]'></div>
      </div>
    </Helmet>
  )
}

export default Info