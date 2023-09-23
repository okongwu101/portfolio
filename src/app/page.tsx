import SectionDivider from '@/components/display/sectionDivider'
import AboutMeSection from '@/components/sections/aboutMeSection'
import AppSection from '@/components/sections/appSection'
import EducationSection from '@/components/sections/educationSection'
import LandingPage from '@/components/sections/landPage'
import SkillSection from '@/components/sections/skillSection'


export default function Home() {
  return (


    <div className="flex min-h-screen flex-col">

      <div id='home' className='px-12'>
        <LandingPage />
        <SectionDivider />
      </div>
      <div className='px-4 md:mx-8 2xl:mx-72'>
        <div id='about-me' >
          <AboutMeSection />
          <SectionDivider />
        </div>
        <div id='skills'>
          <SkillSection />
          <SectionDivider />
        </div>
        <div id="apps">
          <AppSection />
          <SectionDivider />
        </div>
        <div id='education'>
          <EducationSection />
          <SectionDivider />
        </div>
      </div>


    </div>
  )
}
