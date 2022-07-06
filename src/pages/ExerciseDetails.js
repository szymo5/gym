import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import {exerciseOptions, youtubeOptions, fetchData} from '../utils/fetchData';

import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';
import ExerciseVideos from '../components/ExerciseVideos';

const ExerciseDetails = () => {
    const [exerciseDetail, setExerciseDetail] = useState({})
    const [exerciseVideos,  setExerciseVideos] = useState([])
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
    const [equipmentExercises, setEquipmentExercises] = useState([])

    const {id} = useParams();

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDatailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDatailData);

            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDatailData.name}`, youtubeOptions)
            setExerciseVideos(exerciseVideosData?.contents);

            const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDatailData.target}`, exerciseOptions);
            setTargetMuscleExercises(targetMuscleExercisesData);
            
            const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDatailData.target}`, exerciseOptions);
            setEquipmentExercises(equipmentExercisesData);
        }

        fetchExercisesData();
    }, [id])



    return ( 
        <Box>
            <Detail exerciseDetail={exerciseDetail}/>
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
        </Box>
     );
}
 
export default ExerciseDetails;