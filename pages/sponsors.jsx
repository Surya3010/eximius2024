import Container from "../components/utility/Container";
import CardLayout from "../components/Common/CardLayout";

const sponsorsList = [
  { image: 'images/Sponsor Eximius 2024/1.png', url: 'https://ameorganic.com/' },
  { image: 'images/Sponsor Eximius 2024/3.png', url: 'https://licindia.in/' },
  { image: 'images/Sponsor Eximius 2024/4.png', url: 'https://www.myglamm.com/' },
  { image: 'images/Sponsor Eximius 2024/5.png', url: 'https://www.redfmindia.in/bengaluru' },
  { image: 'images/Sponsor Eximius 2024/6.png', url: 'https://www.ynos.in/' },
  { image: 'images/Sponsor Eximius 2024/7.png', url: 'https://www.bisleri.com/' },
  { image: 'images/Sponsor Eximius 2024/8.png', url: 'https://www.bisleri.com/' },
  { image: 'images/Sponsor Eximius 2024/9.png', url: 'https://www.bisleri.com/' },
  { image: 'images/Sponsor Eximius 2024/10.png', url: 'https://learningwhiletravelling.com/' },
  { image: 'images/Sponsor Eximius 2024/11.png', url: 'https://unstop.com/' },
  { image: 'images/Sponsor Eximius 2024/12.png', url: 'https://insideiim.com/' },
  { image: 'images/Sponsor Eximius 2024/13.png', url: 'https://www.finlatics.com/' },
  { image: 'images/Sponsor Eximius 2024/14.png', url: 'https://www.zomato.com/' },
  { image: 'images/Sponsor Eximius 2024/15.png', url: 'https://www.pnbindia.in/' },
  { image: 'images/Sponsor Eximius 2024/16.png', url: 'https://boomlex.com/' },
  { image: 'images/Sponsor Eximius 2024/2.png', url: 'https://www.lavieworld.com/' }
]

const Sponsors = () => {
  return (
    <Container>
      <h1 className="ml-[25px] select-none text-4xl font-[200] uppercase max-sm:py-5 md:ml-0 md:pb-10 lg:ml-[32px] lg:pb-10 lg:text-[50px]">
        <p style={{ color: 'white', marginTop: '48px' }}>Sponsors'24</p>
      </h1>
      <div className="grid  justify-items-center grid-cols-2 md:grid-cols-4 gap-4 px-2 md:px-8 pt-2 pb-4">
        {sponsorsList?.map?.((spons) => <CardLayout>
          <div className="flex flex-col justify-between h-full hover:transition-all hover:scale-[1.2] ease-linear">
            <a className="flex  flex-col justify-between items-center" href={`${spons?.url}`}>
              <img src={`${spons?.image}`} width='450px' />
            </a>
          </div>
        </CardLayout>)}
      </div>
      <div className="h-[230px] w-full bg-previous_sponsors bg-cover bg-custom md:h-[630px] lg:bg-cover lg:bg-left" style={{ borderRadius: '16px', margin: '32px 0px' }} />
      <div className="h-[230px] w-full bg-sponsors_2 bg-cover bg-custom md:h-[630px] lg:bg-cover lg:bg-left" style={{ borderRadius: '16px', margin: '32px 0px' }} />
      {/* <div className="h-[230px] w-full bg-sponsors_3 bg-cover bg-custom md:h-[630px] lg:bg-cover lg:bg-left" style={{ borderRadius: '16px', margin: '32px 0px' }} /> */}
      <div className="h-[230px] w-full bg-sponsors_4 bg-cover bg-custom md:h-[630px] lg:bg-cover lg:bg-left" style={{ borderRadius: '16px', margin: '32px 0px' }} />
      <div className="h-[230px] w-full bg-sponsors_5 bg-cover bg-custom md:h-[630px] lg:bg-cover lg:bg-left" style={{ borderRadius: '16px', margin: '32px 0px' }} />
    </Container>
  );
};

export default Sponsors;
