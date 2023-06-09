import React, { useState } from 'react';
import PostTemplate from '../Ideas/PostTemplate';
import Alert from '../Alert'
import { Box, Grid } from '@mui/material';
import { Container } from '@mui/system';
import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { removeTodo } from '../../store/todoSlice';
import { addCompleted } from '../../store/completeSlice';
import 'swiper/css/virtual';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Slider = ({ items }) => {

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()

    const removeTask = (item) => {
        dispatch(addCompleted({ item }))
        dispatch(removeTodo({ item }))
        setOpen(true);

    }

    const handleSlideChange = (swiper) => {
        setActiveSlideIndex(swiper.activeIndex);
    }

    return (
        <>
            <Container maxWidth="md" >
                <Swiper style={{ padding: "30px" }} modules={[Virtual, Navigation]} spaceBetween={50} slidesPerView={3} virtual
                    onSlideChange={handleSlideChange}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                >   <Grid container>
                        {items.map((item, index) => (
                            <SwiperSlide key={index} virtualIndex={index}>
                                <PostTemplate {...item} handleClick={removeTask} item={item} />
                            </SwiperSlide>
                        ))}

                    </Grid>

                    <Box>{items.length
                        ? <h4 style={{ marginTop: "15px" }}>{activeSlideIndex + 1} / {items.length}</h4>
                        : <p style={{ height: "132px", fontSize: "30px", marginTop: "40px" }}>There are no tasks on your list</p>
                    }
                    </Box>
                </Swiper>
            </Container >
            <Box className="slider-controler">
                <Box className="swiper-button-prev slider-arrow">
                </Box>
                <Box className="swiper-button-next slider-arrow">
                </Box>
            </Box>
            {open && <Alert open={open} setOpen={setOpen} text={'You have completed this task!'} />}
        </>
    );
}


export default Slider;
