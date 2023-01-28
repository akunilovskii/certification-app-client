import React, {FC, ReactElement} from 'react'
import {Box, Button, CardMedia, Typography} from '@mui/material'
import {useNavigate} from "react-router-dom";

const Home: FC<any> = (): ReactElement => {
    const navigate = useNavigate();
    const getStarted = (role: string) => {
        navigate(`/login-sign-up?role=${role}`)
    }
    return (
        <Box
            sx={{
                maxWidth: '800px',
                display: 'flex',
                flexDirection: 'column',
                gap: '30px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    gap: '10px',
                    flexDirection: 'column',
                }}
            >
                <Typography
                    variant="h4"
                    color="text.primary"
                    sx={{textAlign: 'center'}}
                >
                    Welcome to our online test platform!
                </Typography>
                <Typography variant="body1" color="text.primary">
                    &emsp;&emsp;We provide a comprehensive solution for teachers to
                    create, update, and delete tests, as well as for students to take
                    them.
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    gap: '10px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                    }}
                >
                    <Typography variant="body1" color="text.primary">
                        For teachers:
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        Our platform allows you to create and manage tests for your
                        students. You can easily create multiple choice, true/false, and
                        fill-in-the-blank questions, and even include images and videos. You
                        can also assign tests to specific classes or groups, and track
                        student progress. With our intuitive interface, you can easily
                        update and delete tests as needed, making it the perfect tool for
                        managing and assessing student performance.
                    </Typography>
                    <Box>
                        <Button size="small" variant="contained" onClick={()=>getStarted('teacher')}>
                            GET STARTED
                        </Button>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    alt="table with a laptop"
                    image={require('../../assets/home_teacher.jpg')}
                    sx={{
                        objectFit: 'cover',
                        objectPosition: 'left top',
                        maxHeight: '200px',
                        maxWidth: '300px',
                    }}
                />
            </Box>

            <Box
                sx={{
                    display: 'flex',

                    gap: '10px',
                }}
            >
                <CardMedia
                    component="img"
                    alt="table with a laptop"
                    image={require('../../assets/home_student.jpg')}
                    sx={{
                        objectFit: 'cover',
                        objectPosition: 'left top',
                        maxHeight: '200px',
                        maxWidth: '300px',
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                    }}
                >
                    <Typography variant="body1" color="text.primary">
                        For students:
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        Our platform offers an easy way for students to take tests. You can
                        access tests assigned to you by your teachers, and take them at your
                        own pace. You can review your answers and receive instant feedback
                        on your performance. Our platform keeps track of your progress,
                        allowing you to see how you have improved over time. You can easily
                        access and take your tests wherever you are, making it the perfect
                        tool for studying and preparing for exams.
                    </Typography>
                    <Box sx={{alignSelf: 'flex-end'}}>
                        <Button size="small" variant="contained" onClick={()=>getStarted('student')}>
                            GET STARTED
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Typography variant="body2" color="text.primary">
                &emsp;&emsp;Overall, our platform is designed to make test-taking and
                test-making easy and efficient for both teachers and students. Join us
                today and start using our platform to improve your performance.
            </Typography>
        </Box>
    )
}

export default Home
