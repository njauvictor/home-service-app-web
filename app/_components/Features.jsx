import React from 'react'

const Features = () => {
  return (
    <section className="relative py-20 overflow-hidden">
  <img
    className="absolute top-0 right-0"
    src=""
    alt=""
  />
  <div className="relative container px-4 mx-auto">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-wrap -mx-4 mb-18 items-center">
        <div className="w-full lg:w-2/3 xl:w-1/2 px-4 mb-12 lg:mb-0">
          <div>
            <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">
              FEATURES
            </span>
            <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900">
              <span>Delivering Tech</span>
              <span className="font-serif italic">Solutions</span>
            </h1>
          </div>
        </div>
        <div className="w-full lg:w-1/3 xl:w-1/2 px-4">
          <div className="max-w-sm lg:ml-auto">
            <p className="text-lg text-gray-500">
              We are a team of 20+ who are passionate about making the world a
              better place.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full xl:w-1/2 px-4 mb-8 xl:mb-0">
          <div className="relative h-100 md:h-125">
            <img
              className="block h-full w-full rounded-3xl object-cover"
              src="saturn-assets/images/features/blue-photo.png"
              alt=""
            />
            <div className="absolute top-0 left-0 h-full w-full p-8 md:p-12">
              <div className="flex flex-col items-start justify-between h-full max-w-sm">
                <div>
                  <span className="block mb-3 text-sm text-yellow-800 font-semibold uppercase">
                    Ready for future
                  </span>
                  <h3 className="text-3xl md:text-4xl text-white font-semibold">
                    Leveraging tech to drive a better IT experience
                  </h3>
                </div>
                <a
                  className="relative group inline-block w-full xs:w-auto py-4 px-6 text-orange-900 hover:text-white font-semibold bg-orange-50 rounded-md overflow-hidden transition duration-500"
                  href="#"
                >
                  <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-105 transition duration-500" />
                  <div className="relative flex items-center justify-center">
                    <span className="mr-4">See Incredible Work</span>
                    <span>
                      <svg
                        width={13}
                        height={13}
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.92 0.62C12.8185 0.375651 12.6243 0.181475 12.38 0.0799999C12.2598 0.028759 12.1307 0.00157999 12 0H2C1.73478 0 1.48043 0.105357 1.29289 0.292893C1.10536 0.48043 1 0.734784 1 1C1 1.26522 1.10536 1.51957 1.29289 1.70711C1.48043 1.89464 1.73478 2 2 2H9.59L1.29 10.29C1.19627 10.383 1.12188 10.4936 1.07111 10.6154C1.02034 10.7373 0.994202 10.868 0.994202 11C0.994202 11.132 1.02034 11.2627 1.07111 11.3846C1.12188 11.5064 1.19627 11.617 1.29 11.71C1.38296 11.8037 1.49356 11.8781 1.61542 11.9289C1.73728 11.9797 1.86799 12.0058 2 12.0058C2.13201 12.0058 2.26272 11.9797 2.38458 11.9289C2.50644 11.8781 2.61704 11.8037 2.71 11.71L11 3.41V11C11 11.2652 11.1054 11.5196 11.2929 11.7071C11.4804 11.8946 11.7348 12 12 12C12.2652 12 12.5196 11.8946 12.7071 11.7071C12.8946 11.5196 13 11.2652 13 11V1C12.9984 0.869323 12.9712 0.740222 12.92 0.62Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2 px-4">
          <div className="flex flex-wrap h-full -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <div className="flex flex-col h-full">
                <a
                  className="relative block h-full mb-7 pt-8 px-8 pb-5 rounded-3xl bg-green-50 hover:bg-green-100 transition duration-200"
                  href="#"
                >
                  <div className="flex flex-col h-full justify-between max-w-sm pr-16">
                    <p className="text-sm text-gray-900 mb-10 md:mb-6">
                      We have share our journey and some story
                    </p>
                    <span className="text-3xl font-semibold text-gray-900">
                      Read our blog
                    </span>
                  </div>
                  <img
                    className="absolute bottom-0 right-0 m-5"
                    src="saturn-assets/images/features/arrow.svg"
                    alt=""
                  />
                </a>
                <a
                  className="relative block h-full pt-8 px-8 pb-5 rounded-3xl bg-red-50 hover:bg-red-100 transition duration-200"
                  href="#"
                >
                  <div className="flex flex-col h-full justify-between max-w-sm pr-16">
                    <p className="text-sm text-gray-900 mb-10 md:mb-6">
                      It’s a must to that we would like to share our workflow to
                      believe you
                    </p>
                    <span className="text-3xl font-semibold text-gray-900">
                      See our workflow
                    </span>
                  </div>
                  <img
                    className="absolute bottom-0 right-0 m-5"
                    src="saturn-assets/images/features/arrow.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <a
                className="relative block h-full pt-8 px-8 pb-5 rounded-3xl bg-orange-50 hover:bg-orange-100 transition duration-200"
                href="#"
              >
                <div className="flex h-full flex-col items-start justify-between max-w-sm pr-16">
                  <p className="text-sm text-gray-900 mb-10 md:mb-6">
                    2,000+ our team members around the world who create
                    incredible and amazing projects
                  </p>
                  <span className="text-3xl font-semibold text-gray-900">
                    Meet Our Expert
                  </span>
                </div>
                <img
                  className="absolute bottom-0 right-0 m-5"
                  src="saturn-assets/images/features/arrow.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Features