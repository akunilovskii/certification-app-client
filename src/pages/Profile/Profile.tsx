import {useSelector} from 'react-redux'
import {RootState} from '../../store/store'
import UserResults from './components/UserResults'
import {Box, Typography} from "@mui/material";

const Profile = () => {
    const {userInfo} = useSelector((state: RootState) => state.user)

    return (
        <Box sx={{width: '70%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <Typography variant="h6" sx={{textAlign: 'center'}}>
                Welcome {userInfo?.email}
            </Typography>
            <UserResults/>
        </Box>
    )
}
export default Profile
