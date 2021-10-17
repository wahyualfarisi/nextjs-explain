function userDetailPage(props){
    return <h1>{props.userid}</h1>
}

export default userDetailPage;

export async function getServerSideProps(context){
    const { params, req, res } = context;

    return {
        props: {
            userid: 'userid-'+params.uid
        }
    }
}