const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Indian Institute of Management, Bangalore',
                degree: 'MBA',
                detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
                year: '2023-2025'
            },
            {
                id: 1,
                title: 'R.M.K College of Engineering & Technology',
                degree: 'BE, Electical and Electronics Engineering',
                detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
                year: '2018-2022'
            },
            {
                id: 2,
                title: 'S.B.O.A. Matriculation & hr. Sec. School',
                degree: 'HSC',
                detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
                year: '2013-2015'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Cognizant',
                role: 'Associate, Frontend developer',
                url: 'https://www.cognizant.com/in/en',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!',
                year: '04/2022 - 06/2023',
                location: 'Chennai, India'
            },
            {
                id: 2,
                title: 'Cognizant',
                role: 'Program Analyst',
                url: 'https://www.cognizant.com/in/en',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!',
                year: '07/2020 - 04/2022',
                location: 'Chennai, India'
            },
            {
                id: 3,
                title: 'Program Analyst',
                role: 'Program Analyst Trainee',
                url: 'https://www.cognizant.com/in/en',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!',
                year: '07/2019 - 06/2020',
                location: 'Chennai, India'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
