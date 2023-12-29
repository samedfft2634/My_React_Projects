import { stats } from '../helper/data'

const Stats = () => { 
  return (
    <section className="pt-8">
        <div className="max-w-screen-2xl mx-auto px-4 text-gray-600 gap-x-12 justify-between md:px-8 ">
          <div className="max-w-screen-2xl mx-auto text-center ">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              We do our best to make customers always happy
            </h3>
            <p className="mt-3 text-labelColor mx-auto lg:mx-0">
            With each project, we not only provide solutions, but also create unforgettable experiences that exceed our customers' expectations
            </p>
          </div>
          <div className="mt-12 lg:mt-0">
            <ul className="flex flex-col items-start gap-x-12 justify-center divide-y sm:divide-y-0 sm:flex-row lg:grid lg:grid-cols-2">
              {stats.map((item, idx) => (
                <li
                  key={idx}
                  className="text-center w-full px-4 py-6 sm:w-auto lg:py-4"
                >
                  <h4 className="text-4xl text-main font-semibold">
                    {item.data}
                  </h4>
                  <p className="mt-3 text-labelColor  font-medium">
                    {item.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
  )
}

export default Stats