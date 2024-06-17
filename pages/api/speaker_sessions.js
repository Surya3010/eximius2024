const speakerSessions = [
    {
        id: 0,
        image: "images/speaker_sessions/Speaker_Kiran Mazumdar Shaw.png",
        url: "",
        title: "Kiran Mazumdar Shaw",
     
    }

]
export default function handler(req, res) {
    res.status(200).json(speakerSessions)
}