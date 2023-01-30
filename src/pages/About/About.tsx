import React, {FC, ReactElement} from 'react'
import {Box, Typography} from '@mui/material'

const About: FC<any> = (): ReactElement => {
    return (
        <Box
            sx={{
                maxWidth: '800px',
                display: 'flex',
                flexDirection: 'column',
                gap: '30px',
            }}
        >
            <Typography
                variant="h4"
                color="text.primary"
                sx={{textAlign: 'center'}}
            >
                Welcome to our Full Stack project!
            </Typography>
            <Typography variant="body1" color="text.primary">
                &emsp;&emsp;We are a team of two aspiring developers who embarked on
                this project with the goal of learning new technologies and skills. Over
                the course of two months, we dove into the world of React, JWT-based
                authentication and authorization, Node.JS, TypeScript, MongoDB and CI/CD.
            </Typography>
            <Typography variant="body1" color="text.primary">
                &emsp;&emsp;Throughout the development process, we also focused on
                utilizing best practices for Git workflow and collaboration.
            </Typography>
            <Typography variant="body1" color="text.primary">
                &emsp;&emsp;We are proud of what we have accomplished and are excited to
                share our project with the world. We hope you enjoy using it as much as
                we enjoyed building it.
            </Typography>
            <Typography variant="body1" color="text.primary">
                &emsp;&emsp;Thank you for visiting our about page.
            </Typography>
        </Box>
    )
}

export default About;
