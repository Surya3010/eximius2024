const speakerSessions = [
    {
        id: 0,
        image: "images/speaker_sessions/1.webp",
        url: "#",
        title: "Navudyog",
        subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/speaker_sessions/2.webp",
        url: "#",
        title: "Navudyog",
        subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/speaker_sessions/3.webp",
        url: "#",
        title: "Navudyog",
        subtitle: 'Travel Plan Competition'
    }
]
export default function handler(req, res) {
    res.status(200).json(speakerSessions)
}