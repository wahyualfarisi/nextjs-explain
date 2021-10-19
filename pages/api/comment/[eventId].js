import { MongoClient } from 'mongodb';

export default async (req, res) => {
    const eventId = req.query.eventId;

    const client = await MongoClient.connect(`mongodb+srv://nextjs:indonesiaku123@belajarmongodb.qxd4e.mongodb.net/events?retryWrites=true&w=majority`)
    const db = client.db();

    switch(req.method){

        case 'POST':
            const { name, email, text } = req.body;
            const comment = {
                name,
                email,
                text,
                eventId
            }
            
            const results = await db.collection('comments').insertOne(comment);
            comment['id'] = results.insertedId;

            res.status(201).json({ message: 'Created Comment', data: comment })
        break;

        default:
            const data = await db.collection('comments').find().sort({ _id: 1 }).toArray();
            return res.status(200).json({ comments: data })
    }

    client.close();
}