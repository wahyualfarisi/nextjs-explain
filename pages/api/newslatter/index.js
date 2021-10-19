import { MongoClient } from 'mongodb';

export default async function handler(req, res) {

    switch(req.method){
        case 'POST':
            const email = req.body.email;

            const client = await MongoClient.connect(`mongodb+srv://nextjs:indonesiaku123@belajarmongodb.qxd4e.mongodb.net/events?retryWrites=true&w=majority`)
            const db = client.db();
            await db.collection('newslatter').insertOne({ email: email })
            client.close();

            res.status(201).json({
                email: email
            })
        break;

        default:
            return res.status(200).json({ message: 'Hello Worlds !' })
    }

    
}