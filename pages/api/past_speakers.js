const review = [
    'images/past_speakers/ankur_warikoo.png',
   'images/past_speakers/ganesh_prasad.png',
    'images/past_speakers/varun_mayya.png',
    'images/past_speakers/kiran_bedi.png',
    'images/past_speakers/vetri_subramanian.png',
    'images/past_speakers/arjun_manjumdar.png',
    'images/past_speakers/aniketh_jain.png',
    'images/past_speakers/nandita_sharma.png'
]
export default function handler(req, res) {
    res.status(200).json(review)
}
