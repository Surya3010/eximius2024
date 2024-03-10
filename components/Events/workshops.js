import { useQuery } from "react-query";
import EventsCard from "./EventsCard";
import axios from "axios";
import ImageAndParagraphSkeleton from "../Common/ImageAndParagraphSkeleton";

const Workshops = () => {

    const { isLoading, error, data } = useQuery('workshops', () =>
        axios.get('api/workshops')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching workshops:', error)))
    return (
        <div className="overflow-x-auto w-full grid  justify-items-center grid-flow-col gap-4 px-2 md:px-8 pt-2 pb-4">

            {
                isLoading ?
                    [1, 2, 3, 4].map(() => (
                        <ImageAndParagraphSkeleton className={"w-full object-cover"} />
                    ))
                    :
                    data?.map((data, key) => (
                        <EventsCard key={key} data={data} />
                    ))

            }


        </div >
    );
};

export default Workshops;
