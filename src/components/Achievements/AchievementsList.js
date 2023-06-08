import { useSelector } from "react-redux/es/hooks/useSelector"
import { Grid } from "@mui/material"
import AchievementsTemplate from './AchievementsTemplate'

const AchievementsList = () => {

    const completed = useSelector(state => state.completed.completed)

    function countObjectsByType(arr) {
        const countMap = {};

        arr.forEach((obj) => {
            const { type } = obj;
            countMap[type] = countMap[type] ? countMap[type] + 1 : 1;
        });

        const countedArray = Object.entries(countMap).map(([activity, count]) => ({
            activity,
            count,
        }));

        return countedArray;
    }

    const counted = countObjectsByType(completed)

    return (
        <>
            <h1 className="section-title">Achievements</h1>
            {completed.length
                ? <Grid container rowSpacing={6}>
                    {completed && counted.map((item, id) => <AchievementsTemplate key={id} {...item} />)}
                </Grid>
                : <p style={{ height: "132px", fontSize: "30px", marginTop: "40px" }}>There are no completed tasks on your list</p>}

        </>
    )
}
export default AchievementsList