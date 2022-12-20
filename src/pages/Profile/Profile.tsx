import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

const Profile = () => {
  const { userInfo } = useSelector((state: RootState) => state.user)

  return (
    <div>
      <figure>{userInfo?.email}</figure>
      <span>
        Welcome <strong>{userInfo?.email}</strong> You can view this page
        because you're logged in
      </span>
    </div>
  )
}
export default Profile
