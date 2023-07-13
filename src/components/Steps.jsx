import { CheckIcon, HandThumbUpIcon, UserIcon, CheckCircleIcon } from '@heroicons/react/20/solid'

const timeline = [
  {
    id: 1,
    content: 'Schedule a ',
    target: '1-on-1 Interview',
    href: "https://calendar.app.google/LzLeCSfPr8oS6Msr9",
    date: 'Sep 30',
    datetime: '2020-09-30',
    icon: CheckCircleIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 2,
    content: 'Complete the',
    target: 'New Student Form',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSd6FPAi8wshsoZ__qHm55K9vdILXY2zAipgpgjB0-cCDvWvJg/viewform?usp=sf_link',
    date: 'Sep 22',
    datetime: '2020-09-22',
    icon: CheckCircleIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 3,
    content: 'Interview and Decision',
    target: '',
    href: '#',
    date: 'Sep 28',
    datetime: '2020-09-28',
    icon: CheckCircleIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 4,
    content: 'Receive Personal Study Plan',
    target: '',
    href: "https://calendar.app.google/LzLeCSfPr8oS6Msr9",
    date: 'Sep 30',
    datetime: '2020-09-30',
    icon: CheckCircleIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 5,
    content: 'Start Sessions',
    target: '',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: CheckCircleIcon,
    iconBackground: 'bg-blue-500',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="flex flex-col sm:flex-row bg-white px-6">
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
                <div className="relative pb-12">
                  {eventIdx !== timeline.length - 1 ? (
                    <span className="absolute left-4 top-4 -ml-px h-full w-4 bg-blue-200" aria-hidden="true" />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div className='text-white'>
                      <span
                        className={classNames(
                          event.iconBackground,
                          'h-12 w-12 rounded-full flex items-center justify-center '
                        )}
                      >
                        <p className='text-xl'>{event.id}</p>
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 ">
                      <div className="flex items-center justify-center">
                        <a>
                          <span className="font-medium text-xl text-gray-900">
                            {event.content}
                          </span>
                          <span className="font-medium text-xl text-gray-900">&nbsp;</span>
                          <span href={event.href} className="font-bold text-xl text-blue-500">
                            <u>{event.target}</u>
                          </span>
                        </a>
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


