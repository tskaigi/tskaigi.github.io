import Loading from './ui/loading'

export default function Home() {
  return (
    <div className='max-w-3xl my-8 lg:my-20 m-auto'>
      <div className='hidden md:block'>
        <Loading />
      </div>
      <div className='my- lg:my-20 grid lg:grid-cols-2 gap-4'>
        <Loading />
        <Loading />
      </div>
    </div>
  )
}
