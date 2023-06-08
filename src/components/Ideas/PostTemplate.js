import { Grid, Card, CardContent, Typography } from '@mui/material'
const PostTemplate = ({ activity, type, item, handleClick }) => {
    return (
        <Grid item md={3}>
            <Card sx={{ backgroundColor: "#8f95ec", cursor: "pointer" }} onClick={() => handleClick(item)}>
                <CardContent>
                    <Typography
                        variant='h5'
                        component='h3'
                        sx={{ height: '130px' }}>

                        {activity}
                    </Typography>
                </CardContent>

                <CardContent sx={{ background: "#525b93", color: "#d7d5ff" }}>
                    <Typography
                        variant='p'
                        component='span'>
                        {type}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default PostTemplate