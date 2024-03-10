const speakerSessions = [
    {
        id: 0,
        image: "images/competitions/Anveshan-Navudyog.png",
        url: "#",
        title: "Navudyog",
        subtitle: 'Travel Plan Competition'
    }
]
export default function handler(req, res) {
    res.status(200).json(speakerSessions)
}