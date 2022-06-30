import { FC } from 'react'
import { useRouter } from 'next/router'
import { __auth } from 'context/AuthProvider'
import { StyledProfileButton } from 'theme/profile.element'

const Profile: FC = function () {
  const { push } = useRouter()
  const { currentUser } = __auth()

  return (
    <StyledProfileButton onClick={() => push('/profile')}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={currentUser.user_avatar}
        referrerPolicy='no-referrer'
        alt={`${currentUser.user_name} profile picture`}
      />
    </StyledProfileButton>
  )
}

export default Profile
