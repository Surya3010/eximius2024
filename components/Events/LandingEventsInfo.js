const LandingEventsInfo = () => {
    return (
        <div className="flex h-fit w-full flex-col items-center justify-center gap-16 rounded-[5px] border-white py-12 pt-0 transition-all duration-200 md:h-fit md:flex-row md:gap-6 md:py-6 pos-relative">
            <div className="flex h-fit w-full flex-col items-center justify-center"><div className="h-[200px] w-full bg-competitionsIcon bg-cover bg-custom md:w-[200px] lg:bg-cover lg:bg-left" /><span className="text-[60px]" style={{color: 'white'}}>25+</span><span className="text-[19px]" style={{color: 'white'}}>Competitions</span></div>
            <div className="flex h-fit w-full flex-col items-center justify-center"><div className="h-[200px] w-full bg-speakersIcon bg-cover bg-custom md:w-[200px] lg:bg-cover lg:bg-left" /><span className="text-[60px]" style={{color: 'white'}}>100+</span><span className="text-[19px]" style={{color: 'white'}}>Renowned Speakers</span></div>
            <div className="flex h-fit w-full flex-col items-center justify-center"><div className="h-[200px] w-full bg-participantsIcon bg-cover bg-custom md:w-[200px] lg:bg-cover lg:bg-left" /><span className="text-[60px]" style={{color: 'white'}}>50,000+</span><span className="text-[19px]" style={{color: 'white'}}>Participants</span></div>
            <div className="flex h-fit w-full flex-col items-center justify-center"><div className="h-[200px] w-full bg-workshopsIcon bg-cover bg-custom md:w-[200px] lg:bg-cover lg:bg-left" /><span className="text-[60px]" style={{color: 'white'}}>20+</span><span className="text-[19px]" style={{color: 'white'}}>Workshops</span></div>
        </div>
    )
}
export default LandingEventsInfo