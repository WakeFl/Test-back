import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { addTodo } from '../../store/todoSlice'
import { Box, Grid } from '@mui/material'
import PostTemplate from "./PostTemplate"
import Alert from '../Alert'

const FreshIdeas = () => {

    const [combinedData, setCombinedData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [triggerEffect, setTriggerEffect] = useState(false);
    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()

    const addTask = (item) => {
        dispatch(addTodo({ item }))
        setTriggerEffect(true);
        setOpen(true);
    }

    useEffect(() => {
        async function sendMultipleRequests() {

            const URL = (type) => `http://www.boredapi.com/api/activity?type=${type}`
            const urls = [URL("education"), URL("recreational"), URL("social"), URL("diy"), URL("charity"), URL("cooking"), URL("relaxation"), URL("music"), URL("busywork")]
            const selectedUrls = [];

            try {
                while (selectedUrls.length < 4) {
                    const randomIndex = Math.floor(Math.random() * urls.length);
                    const url = urls[randomIndex];

                    if (!selectedUrls.includes(url)) {
                        selectedUrls.push(url);
                    }
                }

                const requests = selectedUrls.map(url => fetch(url));
                const responses = await Promise.all(requests);
                const data = await Promise.all(responses.map(response => response.json()));

                const combinedData = data.reduce((result, currentData) => {
                    return result.concat(currentData);
                }, []);

                setCombinedData(combinedData);
            } catch (error) {
                console.error('Something wrong', error);
            } finally {
                setIsLoading(false);
                setTriggerEffect(false);
            }
        }

        sendMultipleRequests();
    }, [triggerEffect]);



    return (
        <Box>
            <h1 className="section-title">Choose fresh ideas to do</h1>
            <Grid container spacing={2}>
                {isLoading
                    ? <p style={{ height: '240px', margin: '0 auto' }}>Loading...</p>
                    : combinedData.map((item, id) => (
                        <PostTemplate item={item} key={id} {...item} handleClick={addTask} />
                    ))
                }
            </Grid >
            {open && <Alert open={open} setOpen={setOpen} text={'Added to to-do list'} />}
        </Box>
    );
}
export default FreshIdeas