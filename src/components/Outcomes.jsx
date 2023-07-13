export default function Example() {
  return (
    <div id="Outcomes" className="bg-white sm:pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-blue-600 sm:text-6xl">
            2022 Outcomes
          </h2>
        </div>
      </div>
      <div className="mt-4 bg-white pb-20 sm:pb-16 sm:mt-10">
        <div className="relative">
          <div className="absolute inset-0 h-1/2" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <dl className="rounded-lg bg-white shadow-lg grid-cols-3 grid">
                <div className="flex flex-col border-b border-t border-gray-100 pt-6 pb-6 pr-2 pl-2 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-xs font-medium leading-2 text-gray-500 sm:text-xl">Admitted To Target Schools</dt>
                  <dd className="order-1 text-3xl font-bold tracking-tight text-blue-500 sm:text-5xl">93%</dd>
                </div>
                <div className="flex flex-col border-b border-t border-gray-100 pt-6 pb-6 pr-2 pl-2 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-xs font-medium leading-2 text-gray-500 sm:text-xl">In Scholarships Earned</dt>
                  <dd className="order-1 text-3xl font-bold tracking-tight text-blue-500 sm:text-5xl">$1M+</dd>
                </div>
                <div className="flex flex-col border-b border-t border-gray-100 pt-6 pb-6 pr-2 pl-2 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-xs font-medium leading-2 text-gray-500 sm:text-xl">Received Scholarships</dt>
                  <dd className="order-1 text-3xl font-bold tracking-tight text-blue-500 sm:text-5xl">81%</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
