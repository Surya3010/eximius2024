import { MdLocationOn } from 'react-icons/md'
import { FaStar } from 'react-icons/fa'
import CardLayout from '../../Common/CardLayout'

const SpeakerCard = ({ data }) => {
    return (
        <CardLayout>
            <div className="flex flex-col justify-between w-80 md:w-96 h-full">
                <div className="flex justify-between items-center">
                <img src={`${data}`}/>
                </div>
            </div>
        </CardLayout>
    )
}

export default SpeakerCard