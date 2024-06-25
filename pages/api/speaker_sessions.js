const speakerSessions = [
    {
        id: 0,
        image: "images/speaker_sessions/Speaker_Kiran Mazumdar Shaw.png",
        title: "Kiran Mazumdar Shaw",
     
    },
    {
        id: 1,
        image: "images/speaker_sessions/Speaker_Kris GopalaKrishnan.png",
        title: "Kris GopalaKrishnan",
     
    },
    {
        id: 2,
        image: "images/speaker_sessions/Speaker_Prajakta_Koli.png",
        title: "Prajakta Koli",
     
    },
    {
        id: 3,
        image: "images/speaker_sessions/Speaker_Ashok Kamath.png",
        title: "Ashok Kamath & Shukla Bose",
     
    },

]
export default function handler(req, res) {
    res.status(200).json(speakerSessions)
}