import CardLayout from '../../layouts/CardLayout'
import Avatar from '../../assets/json/Avatar.json'
const Profile = () => {
  return (
    <div>
        <CardLayout cardTitle={"Perfil de usuario"} cardHeader={"Perfil de usuario"} cardIcon={Avatar}></CardLayout>
    </div>
  )
}

export default Profile