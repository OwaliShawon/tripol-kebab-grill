
import Order from '../../../models/Order';
import dbConnect from './../../../util/mongo';

export default async function handler(req, res) {
    const { method } = req;

    dbConnect();

    if (method === "GET") {
        try {
            const orders = await Order.find();
            res.status(200).json(orders);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    if (method === "POST") {
        try {
            const orders = await Order.create(req.body);
            res.status(201).json(orders);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}
