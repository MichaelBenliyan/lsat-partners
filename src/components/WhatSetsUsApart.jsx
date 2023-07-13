const people = [
  {
    id: 1,
    name: '99th Percentile Tutors',
    href: '#',
    bio:
      'All of our tutors have scored in the top 1% on the LSAT. These instructors are true masters of their craft and know how to help students across all score ranges.',
    imageUrl:
      '/goldtrophy.jpg',
  },
  {
    id: 2,
    name: 'Customized Study Plans',
    href: '#',
    bio:
      'Having a study plan that fits your needs is essential for progress and accountability. That is why we develop a free customized study plan for each student.',
    imageUrl:
      '/customplan.jpg',
  },{
    id:3,
    name: 'Affordable Pricing',
    href: '#',
    bio:
      'Our experience showed us that the students who spent more time with top scorering tutors saw larger score increases. Our affordable pricing enables students more opportunity to be around and learn from LSAT experts.',
    imageUrl:
      '/piggybank.jpg',
  },
]

// export default function Example() {
//   return (
//     <div className="bg-white py-12 sm:py-12">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-3xl font-bold tracking-tight text-blue-600 sm:text-6xl">Our Method</h2>
//           <p className="mt-2 text-lg leading-8 text-gray-600">
//           Our LSAT prep sessions are expertly-designed from years of tutoring experience 
//           </p>
//         </div>
//         <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-3 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
//           {posts.map((post) => (
//             <article
//               key={post.id}
//               className="article-hover relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 "
//             >
//               <div className="horizontal"></div>
//               <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
//               <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
//               <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

//               <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
//                 <time dateTime={post.datetime} className="mr-8">
//                   {post.date}
//                 </time>
//               </div>
//               <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
//                 <a href={post.href}>
//                   <span className="absolute inset-0" />
//                   {post.title}
//                 </a>
//               </h3>
//               <p className="mt-4 text-base text-gray-300">{post.description}</p>
//             </article>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

export default function Example() {
  return (
    <div className="bg-white py-16 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
        <div className="max-w-2xl xl:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">Our Methods</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Our LSAT prep sessions are expertly-designed from years of tutoring experience .
          </p>
        </div>
        <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-5 pt-6 items-center sm:flex-row sm:items-start sm:pt-12 sm:gap-10">
            <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.imageUrl} alt="" />
            <div className="max-w-xl flex-auto">
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
              <p className="mt-2 text-base leading-7 text-gray-600 sm:mt-6">{person.bio}</p>
            </div>
          </li>          
          ))}
        </ul>
      </div>
    </div>
  )
}
