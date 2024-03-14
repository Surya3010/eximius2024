const workshops = [
    {
        id: 0,
        image: "images/workshops/Workshop-1.png",
        url: "#",
        title: "Navudyog",
        subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/workshops/Workshop-2.png",
        url: "#",
        title: "Navudyog",
        subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/workshops/Workshop-3.png",
        url: "#",
        title: "Navudyog",
        subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/workshops/Workshop-5.png",
        url: "#",
        title: "Navudyog",
        subtitle: 'Travel Plan Competition'
    },
     {
        id: 0,
        image: "images/workshops/Workshop-6.png",
        url: "#",
        title: "Navudyog",
        subtitle: 'Travel Plan Competition'
    },
]
export default function handler(req, res) {
    res.status(200).json(workshops)
}