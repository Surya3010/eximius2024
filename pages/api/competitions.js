const competitions = [
 

    {
        id: 0,
        image: "images/competitions/FII - Case-a-Blanca_2024.png",
        url: "https://unstop.com/competitions/case-a-blanca-solve-a-live-business-problem-eximius-2024-iim-bangalores-entrepreneurship-summit-iim-bangalo-998501",
        title: "Case-a-Blanca",
        // subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/competitions/ENI Club_2024.png",
        url: "https://unstop.com/competitions/bzzwings-2024-flagship-b-plan-competition-eximius-2024-iim-bangalores-entrepreneurship-summit-iim-bangalore-1023362",
        title: "BzzWings",
        // subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/competitions/ENI - Pitcher Perfect_2024.png",
        url: "https://unstop.com/competitions/pitcher-perfect-s7-iimbs-version-of-shark-tank-eximius-2024-iim-bangalores-entrepreneurship-summit-iim-bang-1024538",
        title: "Pitcher Perfect",
        // subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/competitions/MASH - Havoc_2024.png",
        url: "https://unstop.com/competitions/havoc-the-case-competition-eximius-2024-iim-bangalores-entrepreneurship-summit-iim-bangalore-1020696",
        title: "Havoc Mash",
        // subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/competitions/Analytics - Data Decipher_2024.png",
        url: "#",
        title: "Data Decipher",
        // subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/competitions/WIM - Eximius DecipHER_2024.png",
        url: "https://unstop.com/competitions/eximius-decipher-eximius-2024-iim-bangalores-entrepreneurship-summit-iim-bangalore-1008035",
        title: "Eximius DecipHer",
        // subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/competitions/Wallstone Capital - IPO-Q_2024.png",
        url: "https://unstop.com/competitions/ipo-q-2024-pitch-an-ipo-iim-bangalore-992576",
        title: "IPO-Q",
        // subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/competitions/IQ_2024.png",
        url: "https://unstop.com/events/devils-advocate-eximius-2024-iim-bangalores-entrepreneurship-summit-iim-bangalore-1024018",
        title: "Devil's Advocate",
        // subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/competitions/IQ - BizWhiz_2024.png",
        url: "https://unstop.com/quiz/bizwhiz-eximius-2024-iim-bangalores-entrepreneurship-summit-iim-bangalore-1021415",
        title: "BizWhiz",
        // subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/competitions/LitClub_2024.png",
        url: "https://unstop.com/competitions/visago-50-article-writing-competition-eximius-2024-iim-bangalores-entrepreneurship-summit-iim-bangalore-1009074",
        title: "Visago 5.0",
        // subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/competitions/QUEst - InclusiVision Challenge_2024.webp",
        url: "https://unstop.com/competitions/inclusivision-challenge-eximius-2024-iim-bangalores-entrepreneurship-summit-iim-bangalore-1009079",
        title: "InclusiVision Challenge",
        // subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/competitions/MARS - Local Bazaar Chronicles_2024.webp",
        url: "https://unstop.com/competitions/local-bazaar-chronicles-innovating-traditional-commerce-eximius-2024-iim-bangalores-entrepreneurship-summit-996954",
        title: "Local Bazaar Chronicles",
        // subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/competitions/MASH - Marketing Meisters Showdown_2024.webp",
        url: "https://unstop.com/competitions/marketing-meisters-showdown-eximius-2024-iim-bangalores-entrepreneurship-summit-iim-bangalore-1021360",
        title: "Marketing Meisters Showdown",
        // subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/competitions/Canvas - Design Forward_2024.png",
        url: "https://unstop.com/competitions/design-forward-transforming-the-interior-design-industry-onspot-challenge-eximius-2024-iim-bangalores-entre-1022427",
        title: "Design Forward",
        // subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/competitions/OPMAC - Opsimius_2024.png",
        url: "https://unstop.com/competitions/opsimius-unleash-your-operations-prowess-eximius-2024-iim-bangalores-entrepreneurship-summit-iim-bangalore-1009071",
        title: "Opsimius",
        // subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/competitions/HMC - Faster Feasts_2024.png",
        url: "https://unstop.com/competitions/operation-faster-feasts-eximius-2024-iim-bangalores-entrepreneurship-summit-iim-bangalore-1026260",
        title: "Faster Feasts",
        // subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/competitions/SIGMA - Techminator_2024.png",
        url: "https://unstop.com/competitions/techminator-the-product-management-case-competition-eximius-2024-iim-bangalores-entrepreneurship-summit-iim-991347",
        title: "Techminator",
        // subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/competitions/Vikasana_2024.png",
        url: "https://unstop.com/competitions/social-pact-pitch-your-social-impact-idea-eximius-2024-iim-bangalores-entrepreneurship-summit-iim-bangalore-1022444",
        title: "Social Pact",
        // subtitle: 'Travel Plan Competition'
    }
    
]
export default function handler(req, res) {
    res.status(200).json(competitions)
}
