const workshops = [
    {
        id: 0,
        image: "images/workshops/Workshop-1.webp",
        url: "#",
        title: "How to Crack D2C",
        // subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/workshops/Workshop-2.webp",
        url: "#",
        title: "Empowering Team Synergy and Collobrative Growth",
        // subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/workshops/Workshop-3.webp",
        url: "#",
        title: "How to market a startup & scale to millions of impressions in a year",
        // subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/workshops/Workshop-5.webp",
        url: "#",
        title: "AI masterclass in ChatGPT",
        // subtitle: 'Travel Plan Competition'
    },
     {
        id: 0,
        image: "images/workshops/Workshop-6.webp",
        url: "#",
        title: "Challenges in Supplychain & Managing Money Control",
        // subtitle: 'Travel Plan Competition'
    }
]
export default function handler(req, res) {
    res.status(200).json(workshops)
}
