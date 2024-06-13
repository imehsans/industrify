import FeatureCard from "@/components/cards/FeatureCard";
import PackageCard from "@/components/cards/PackageCard";
import Container from "@/components/container/Container";
import HomeHero from "@/components/hero/HomeHero";
import Section from "@/components/sectiion/Section";
import TopSection from "@/components/sectiion/TopSection";
import WaterMark from "../assets/svgs/about-ind-watrrtMark.svg";
import bgArch from "../assets/images/bg-arch.png";
import AboutBanner from "../assets/svgs/about-ind-banner.svg";
import Image from "next/image";
import ColoredTittle from "@/components/titles/ColoredTittle";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import Waverio from "../assets/svgs/waverio.svg";
import SquareStone from "../assets/svgs/squarestone.svg";
import Martino from "../assets/svgs/martino.svg";
import Virogan from "../assets/svgs/virogan.svg";
import Vertex from "../assets/svgs/vertex.svg";
import Aromix from "../assets/svgs/aromix.svg";
import Fireli from "../assets/svgs/fireli.svg";
import Natroma from "../assets/svgs/natroma.svg";



export default function Home() {

  const featureCardData = [
    {
      id: 0,
      title: 'Industry-Integrated Learning',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra elementum in volutpat leo eu etiam a tellus.',
      btnLink: ''
    },
    {
      id: 1,
      title: 'Personalized Career Guidance',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra elementum in volutpat leo eu etiam a tellus.',
      btnLink: ''
    },
    {
      id: 2,
      title: 'Networking Opportunities',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra elementum in volutpat leo eu etiam a tellus.',
      btnLink: ''
    },
  ]

  const handleClick = () => {
    // Your click handler logic
  };



  const packagesDetails = [
    {
      id: 0,
      title: "Early Bird",
      btn: 'Claim this price',
      fxn: handleClick(),
      aosClass: "zoom-out-right",
      desc: [
        {
          id: 0,
          text: "All in Essential & Plus"
        },
        {
          id: 1,
          text: "Lifetime access for one connection "
        },
        {
          id: 2,
          text: "Early access to product"
        },
        {
          id: 3,
          text: "Fully refundable"
        },
      ]
    },
    {
      id: 1,
      title: "Essential",
      btn: 'Coming soon',
      fxn: handleClick(),
      aosClass: "zoom-out-left",
      desc: [
        {
          id: 0,
          text: "Field mapping customization"
        },
        {
          id: 1,
          text: "Eventbrite embedded checkout"
        },
        {
          id: 2,
          text: "Automated event updates"
        },
        {
          id: 3,
          text: "Real-time data synchronisation"
        },
      ]
    },
    {
      id: 2,
      title: "Plus",
      btn: 'Coming soon',
      fxn: handleClick(),
      aosClass: "zoom-out-left",
      desc: [
        {
          id: 0,
          text: "All in Essential"
        },
        {
          id: 1,
          text: "Recurring events referencing"
        },
        {
          id: 2,
          text: "Multiple collection capability"
        },
        {
          id: 3,
          text: "Event series funcitionality"
        },
      ]
    },
  ]

  return (
    <div className="overflow-hidden">
      <HomeHero />
      <Container>
        <Section>
          <TopSection
            brandTitle={'Benefits'}
            primary={'features of'}
            secondary={'Industrify'}
            text={'we blend the timeless elegance of England with innovative approaches to education and career development. '} />
          <div className="flex justify-around w-full gap-4 mx-auto lg:w-11/12">
            {
              featureCardData.slice(0, 3)?.map(item => {
                return (
                  <div key={item.id} className="">
                    <FeatureCard title={item.title} desc={item.desc} />
                  </div>
                )
              })
            }
          </div>
        </Section>
        <Section>
          <div className="bg-[#FCFAF1] rounded-2xl">
            <TopSection
              brandTitle={'Our Packages'}
              primary={'A perfect fit for'}
              secondary={'everyone'}
              text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra elementum in volutpat leo eu etiam a tellus.'} />

            <div className="flex w-11/12 gap-5 pb-16 mx-auto justify-arround">
              {packagesDetails.slice(0, 3).map(item => {
                return <div className="w-full" key={item.id}>
                  <PackageCard data={item} />
                </div>
              })}
            </div>
          </div>
        </Section>
        <Section>
          <div className="inline-flex gap-8" >
            <div className="flex items-center justify-center w-1/2">
              <Image src={AboutBanner} alt="banner Image" />
            </div>
            <div className="relative w-1/2" >
              <Image className="absolute" src={WaterMark} alt="water mark" />
              <div className="space-y-2 pt-28">
                <ColoredTittle primary={'about'} secondary={'Industrify'} />
                <p className="w-full mx-auto lg:text-md md:text-xs text-xxs">
                  Welcome to Industrify, where we blend the timeless elegance of England with innovative approaches to education and career development. Empowering students to seamlessly transition from academics to real-world experience, we are your pathway to success.
                </p>
                <div className="py-5 space-y-2 font-medium list-disc text-md ps-2 text-primary">
                  <li>
                    Industry-Integrated Learning
                  </li>
                  <li>
                    Personalized Career Guidance
                  </li>
                  <li>
                    Networking Opportunities
                  </li>
                </div>
                <div className="py-5">
                  <ButtonPrimary onClickFxn={handleClick()} value={'Read Story'} className={"px-8 py-4 text-lg font-bold"} />
                </div>
              </div>
              {/* <Image src={WaterMark} alt="banner Image" /> */}

            </div>
          </div>
        </Section>
      </Container>
      <Section>
        <div className="bg-[#FCFAF1] w-full py-16 text-center relative">
          <div className="absolute top-0 right-0">
            <Image src={bgArch} alt="bg-arch" />
          </div>
          <Container>
            <h1 className='w-1/2 px-5 mx-auto text-xlg lg:text-xl font-bolder '>Trusted by nearly 5000+ paying customers</h1>

            <div className="z-10 flex flex-wrap justify-between w-full gap-12 pt-12 mx-auto xl:w-3/4">
              <div className="flex justify-center w-1/5">
                <Image src={Waverio} alt="logo" />
              </div>
              <div className="flex justify-center w-1/5">
                <Image src={SquareStone} alt="logo" />
              </div>
              <div className="flex justify-center w-1/5">
                <Image src={Martino} alt="logo" />
              </div>
              <div className="flex justify-center w-1/5">
                <Image src={Virogan} alt="logo" />
              </div>
              <div className="flex justify-center w-1/5">
                <Image src={Vertex} alt="logo" />
              </div>
              <div className="flex justify-center w-1/5">
                <Image src={Aromix} alt="logo" />
              </div>
              <div className="flex justify-center w-1/5">
                <Image src={Fireli} alt="logo" />
              </div>
              <div className="flex justify-center w-1/5">
                <Image src={Natroma} alt="logo" />
              </div>
            </div>
          </Container>
        </div>
      </Section>
    </div>
  );
}
