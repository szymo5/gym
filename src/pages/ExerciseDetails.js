import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import {exerciseOptions, fetchData} from '../utils/fetchData';

import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';
import ExerciseVideos from '../components/ExerciseVideos';

const ExerciseDetails = () => {
    const [exerciseDetail, setExerciseDetail] = useState({})

    const {id} = useParams();

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSerachUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDatailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDatailData);
        }

        fetchExercisesData();
    }, [id])



    return ( 
        <Box>
            <Detail exerciseDetail={exerciseDetail}/>
            <ExerciseVideos />
            <SimilarExercises />
        </Box>
     );
}
 
export default ExerciseDetails;