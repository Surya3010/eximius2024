const workshops = [
    {
        id: 0,
        image: "images/workshops/Eximius'24 Workshops_AceTheCase.png",
        url: "https://unstop.com/workshops-webinars/ace-the-case-eximius-2024-eximius-2024-iim-bangalores-entrepreneurship-summit-iim-bangalore-994853",
        title: "Ace the Case",
        // subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/workshops/Inspire Innvoation Nikunj Dang 2024.png",
        url: "https://unstop.com/workshops-webinars/infinite-innovation-design-thinking-in-the-age-of-ai-ever-evolving-customers-eximius-2024-iim-bangalo-1034768",
        title: "Inspire Innovation",
        // subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/workshops/BA and Analytics_SHAILJA MISHRA_2024.png",
        url: "https://unstop.com/workshops-webinars/business-analytics-and-intelligence-with-power-bi-eximius-2024-iim-bangalores-entrepreneurship-summit-1034748",
        title: "Business Analytics and Intelligence with Power BI",
        // subtitle: 'Travel Plan Competition'
    }
]
export default function handler(req, res) {
    res.status(200).json(workshops)
}
