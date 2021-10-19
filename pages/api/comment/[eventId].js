export default (req, res) => {
    const eventId = req.query.eventId;

    switch(req.method){

        case 'POST':
            const { name, email, text } = req.body;
            const comment = {
                id: new Date().toISOString(),
                name,
                email,
                text
            }
            res.status(201).json({ message: 'Created Comment', data: comment })
        break;

        default:
            const data = [
                { id: 1, name: 'wahyu', email:'wahyualfarisi30@gmail.com', text: 'Great !'},
                { id: 2, name: 'isyana', email:'isyana@gmail.com', text: 'Hallo !'},
            ]
            return res.status(200).json({ comments: data })
    }
}