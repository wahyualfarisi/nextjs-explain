export default function handler(req, res) {

    switch(req.method){
        case 'POST':
            const email = req.body.email;
            res.status(201).json({
                email: email
            })
        break;

        default:
            return res.status(200).json({ message: 'Hello Worlds !' })
    }

    
}