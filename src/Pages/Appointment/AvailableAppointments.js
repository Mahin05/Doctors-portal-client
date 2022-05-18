import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Loading from '../Shared/Loading'

const AvailableAppointments = ({ date }) => {
    const [treatment, setTreatment ] = useState(null);
    const formattedDate = format(date,'PP');
    const {data:services,isLoading,refetch} = useQuery(['available',formattedDate], () => 
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
            )
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h4 className='text-xl text-secondary text-center'>Available appointments on {format(date, 'PP')}</h4>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;