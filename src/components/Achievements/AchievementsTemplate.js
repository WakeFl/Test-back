import { Grid, Avatar } from '@mui/material'

const AchievementsTemplate = ({ activity, count }) => {
    return (
        <Grid item xs={6} md={4}>
            <Avatar sx={{ bgcolor: "#8f95ec", fontSize: "50px", width: "100px", height: "100px", margin: "0 auto", color: "#212846" }}>
                {count}
            </Avatar>
            <h3 style={{ marginTop: "20px" }}>{activity}</h3>
        </Grid >
    )
}
export default AchievementsTemplate