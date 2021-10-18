import { getAllUser } from './../../helpers/api-util';

const UsersPage = ({ users }) => {
    console.log(users)

    if(!users){
        return <p>Loading...</p>
    }

    return (
        <div>
            <ul>
                {users.map((item, _) => <li key={_}>{item.name}</li> )}
            </ul>
        </div>
    )
}

export const getStaticProps = async() => {
    const getUser = await getAllUser();

    return {
        props: {
            users: getUser
        }
    }
}

export default UsersPage;