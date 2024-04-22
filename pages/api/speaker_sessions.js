const speakerSessions = [
    {
        id: 0,
        image: "images/speaker_sessions/1.webp",
        url: "#",
        title: "Ankur Warikoo",
        // subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/speaker_sessions/2.webp",
        url: "#",
        title: "curtain Raiser",
        // subtitle: 'Travel Plan Competition'
    },
    {
        id: 0,
        image: "images/speaker_sessions/3.webp",
        url: "#",
        title: "Varun Mayya",
        // subtitle: 'Travel Plan Competition'
    }
]
export default function handler(req, res) {
    res.status(200).json(speakerSessions)
}