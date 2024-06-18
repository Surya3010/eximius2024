import kms from '../public/images/Kiran_Mazumdar_Shaw.png'
import aw from "../public/images/past_speakers/ankur_warikoo.png";
import aj from "../public/images/past_speakers/aniketh_jain.png";
import am from "../public/images/past_speakers/arjun_manjumdar.png";
import bb from "../public/images/past_speakers/brij_bhushan.png";
import gp from "../public/images/past_speakers/ganesh_prasad.png";
import kb from "../public/images/past_speakers/kiran_bedi.png";
import ns from "../public/images/past_speakers/nandita_sharma.png";
import vm from "../public/images/past_speakers/varun_mayya.png";
import vs from "../public/images/past_speakers/vetri_subramanian.png";

// import ar from "../public/speakers/anaswara_ramesh.webp";
// import aa from "../public/speakers/anoop_ambika.webp";
// import an from "../public/speakers/adhila_noora.webp";
// import pg from "../public/speakers/priyesh_gopalakrishnan.webp";

class Speaker {
  constructor(name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;
  }
}

export const Speaker_data = [
  new Speaker(
    "Kiran Mazumdar Shaw",
    "Kiran Mazumdar-Shaw is a pioneering entrepreneur and the Executive Chairperson of Biocon Limited, a globally recognized biopharmaceutical company based in India. Renowned for her groundbreaking work in biotechnology, she founded Biocon in 1978, transforming it from a small industrial enzymes company into a leading player in the global biopharmaceutical industry. Her visionary leadership and commitment to affordable healthcare have earned her numerous accolades, including being listed among Forbes' most powerful women in the world. Beyond her business achievements, Kiran is also a dedicated philanthropist, advocating for healthcare, education, and environmental sustainability.",
    kms
  )
  // new Speaker(
  //   "Aniketh Jain",
  //   "Aniketh Jain is the founder of Fyno, a company focused on revolutionizing financial services. Fyno provides innovative solutions to simplify and enhance financial processes using technology. Aniketh Jain's background likely includes expertise in fintech, entrepreneurship, and technology development, given his role as the founder of Fyno. His leadership in this space underscores a commitment to reshaping how financial services are accessed and utilized.",
  //   aj
  // ),
  // new Speaker(
  //   "Arjun Manjumdar",
  //   "Arjun Manjunath is the CEO of Indiahikes, a leading trekking and outdoor adventure organization in India. Indiahikes specializes in organizing trekking expeditions across various regions in India, catering to both seasoned trekkers and beginners. Under Arjun's leadership, Indiahikes has become known for its focus on safety, sustainability, and providing memorable outdoor experiences. Arjun is passionate about trekking and promoting responsible trekking practices, making Indiahikes a trusted name in the adventure tourism industry in India.",
  //   am
  // ),
  // new Speaker(
  //   "Brij Bhushan",
  //   "Brij Bhushan is the founder of Magicpin, a technology platform that connects local merchants with consumers through a discovery and rewards app. Magicpin allows users to discover and review local experiences, earn rewards, and connect with businesses in their area. The platform aims to digitize and enhance local commerce while providing consumers with incentives to explore and engage with neighborhood businesses. Under Brij Bhushan's leadership, Magicpin has grown to become a prominent player in the Indian retail tech space, focusing on empowering small businesses and enhancing consumer experiences through technology",
  //   bb
  // ),
  // new Speaker(
  //   "Ganesh Prasad",
  //   " Ganesh Prasad is the founder of Growth School, an educational platform focused on teaching growth marketing and digital skills to aspiring entrepreneurs and marketers. Growth School provides practical training and resources to help individuals and businesses leverage digital channels effectively for growth and success. Ganesh Prasad's expertise lies in digital marketing, growth strategies, and entrepreneurship, and he aims to empower students and professionals with the knowledge and tools needed to excel in the rapidly evolving digital landscape. Through Growth School, Ganesh Prasad is contributing to bridging the skill gap in digital marketing and fostering entrepreneurship among aspiring individuals.",
  //   gp
  // ),
  // new Speaker(
  //   "Kiran Bedi",
  //   "Kiran Bedi is a retired Indian Police Service (IPS) officer known for her pioneering work in law enforcement and prison reform. She was the first woman to join the IPS in 1972. During her career, Bedi introduced innovative reforms in policing and initiated programs for education and meditation in Tihar Jail, India's largest prison. Beyond her policing career, she is active in social activism, focusing on women's empowerment, drug abuse prevention, and educational reform. Kiran Bedi has received several awards, including the Magsaysay Award for Government Service in 1994, and continues to advocate for social change and public service.",
  //   kb
  // ),
  // new Speaker(
  //   "Nandita Sharma",
  //   "Nandita Sharma is the founder of Zaivic Tech, a company focused on developing innovative sustainability solutions using AI and data analytics. Zaivic Tech helps businesses adopt eco-friendly practices and reduce their carbon footprint through advanced technology. Nandita is known for integrating cutting-edge technology with environmental science to drive positive change and promote sustainable practices in various industries.",
  //   ns
  // ),
  // new Speaker(
  //   "Varun Mayya",
  //   "Varun Mayya is the CEO and founder of Aeos and works in generative AI and content creation. Tools he has built include Godinabox (GPT inside Whatsapp), AlphaCTR (fine-tuned Stable Diffusion model for thumbnails) and AutoCodePro (text to code based on Smol). He has also dabbled in making video games using Unreal Engine and runs several popular YouTube channels. A Computer Science Engineer by training, he was previously the founder of Avalon, a community software platform, which was sold to Unacademy in early 2023.",
  //   vm
  // ),
  // new Speaker(
  //   "Vetri Subramanian",
  //   "Vetri Subramaniam, Chief Investment Officer, UTI Mutual Fund, is a no-nonsense fund manager. He was always known for his market acumen- from very early days he earned a reputation for being a serious observer of the market with an eye for detail.",
  //   vs
  // )
];
