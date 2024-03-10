import { MdLocationOn } from 'react-icons/md'
import { FaStar } from 'react-icons/fa'
import CardLayout from '../../Common/CardLayout'

const SpeakerCard = ({ data }) => {
    return (
        <CardLayout>
            <div className="flex flex-col justify-between w-80 md:w-96 h-full">
                <div className="flex justify-between items-center" style={{
                    background: 'rgba(95, 158, 160, 0.3)',
                    borderRadius: '250px',
                    width: '320px'
                }}>
                    <img src={`${data}`} />
                </div>
            </div>
        </CardLayout>
    )
}

export default SpeakerCard