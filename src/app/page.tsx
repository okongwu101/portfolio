import SectionDivider from '@/components/display/sectionDivider'



import LandingPage from '@/components/sections/landPage'



export default function Home() {
  return (


    <div className="flex min-h-screen flex-col">

      <div id='home' className='px-12'>
        <LandingPage />
        <SectionDivider />
      </div>
    


    </div>
  )
}
