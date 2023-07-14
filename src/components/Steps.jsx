import { CheckIcon, HandThumbUpIcon, UserIcon, CheckCircleIcon } from '@heroicons/react/20/solid'

const timeline = [
  {
    id: 1,
    content: 'Sign Up for', 
    target: 'LSAT Prep Packet',
    href: "#Packet",
    date: 'Sep 30',
    datetime: '2020-09-30',
    icon: CheckCircleIcon,
    iconBackground: 'bg-blue-800',
  },
  {
    id: 2,
    content: 'Schedule a ',
    target: '1-on-1 Interview',
    href: "https://calendar.app.google/LzLeCSfPr8oS6Msr9",
    date: 'Sep 30',
    datetime: '2020-09-30',
    icon: CheckCircleIcon,
    iconBackground: 'bg-blue-800',
  },
  {
    id: 3,
    content: 'Complete the',
    target: 'New Student Form',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSd6FPAi8wshsoZ__qHm55K9vdILXY2zAipgpgjB0-cCDvWvJg/viewform?usp=sf_link',
    date: 'Sep 22',
    datetime: '2020-09-22',
    icon: CheckCircleIcon,
    iconBackground: 'bg-blue-800',
  },
  // {
  //   id: 4,
  //   content: 'Interview and Decision',
  //   target: '',
  //   href: '#',
  //   date: 'Sep 28',
  //   datetime: '2020-09-28',
  //   icon: CheckCircleIcon,
  //   iconBackground: 'bg-blue-500',
  // },
  {
    id: 4,
    content: 'Admissions Decision / Personal Study Plan',
    target: '',
    href: "https://calendar.app.google/LzLeCSfPr8oS6Msr9",
    date: 'Sep 30',
    datetime: '2020-09-30',
    icon: CheckCircleIcon,
    iconBackground: 'bg-blue-800',
  },
  {
    id: 5,
    content: 'Access To Sessions and Resources',
    target: '',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: CheckCircleIcon,
    iconBackground: 'bg-blue-800',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div id="Steps"className="flex flex-col sm:flex-row bg-white px-6">
      <div className="flex-grow flex items-center justify-left sm:justify-center whitespace-normal">
        <div>
          <h3 className="text-4xl leading-8 font-bold text-left text-blue-600 sm:mb-5 tracking-tight sm:text-6xl">Interested?</h3>
          <h3 className="text-4xl leading-10 font-bold text-left text-gray-900 pb-10 sm:text-6xl">Follow These Steps...</h3>
        </div>
      </div>
      <div className="flex-grow whitespace-normal">
        <div className="flow-root">
          <ul role="list" className="-mb-8">
            {timeline.map((event, eventIdx) => (
              <li key={event.id}>
                <div className="relative pb-6 sm:pb-12">
                  {eventIdx !== timeline.length - 1 ? (
                    <span className="absolute sm:left-5 sm:top-4 left-2.5 top-2 -ml-px h-full sm:w-3 w-1.5 bg-indigo-200" aria-hidden="true" />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div className='text-white'>
                      <span
                        className={classNames(
                          event.iconBackground,
                          'h-6 w-6 sm:h-12 sm:w-12 rounded-full flex items-center justify-center '
                        )}
                      >
                        <p className='text-sm sm:text-2xl'>{event.id}</p>
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 ">
                      <div className="flex items-center justify-center">
                        <div>
                          <span className="font-medium  text-m sm:text-xl text-gray-900">
                            {event.content}
                          </span>
                          <span className="font-medium text-m sm:text-xl text-gray-900">&nbsp;</span>
                          <a href={event.href}>
                            <span className="font-bold text-m sm:text-xl text-blue-500">
                              {event.target}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}


