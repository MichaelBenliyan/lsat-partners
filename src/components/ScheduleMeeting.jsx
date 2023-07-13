export default function Example() {
  return (
    <div  className="bg-gray-50">
      <div id="ScheduleMeeting" className="px-6 py-8 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-5xl font-bold tracking-tight text-blue-600 sm:text-7xl">
            Book a 1-on-1 Interview
          </h2>
          <p className="mx-auto mt-3 sm:mt-6 max-w-xl text-sm leading-8 font-bold sm:font-semibold text-gray-600 sm:text-lg">
            No Obligation. No Strings Attached.
          </p>
          <div className="mt-5 sm:mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://calendar.app.google/LzLeCSfPr8oS6Msr9"
              className="rounded-md bg-blue-600 px-6 py-2.5 text-sm sm:text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
