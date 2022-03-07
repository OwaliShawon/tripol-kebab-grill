
import Product from '../../../models/Product';
import dbConnect from './../../../util/mongo';

export default async function handler(req, res) {
    const {
        method,
        query: { id },
    } = req;

    dbConnect();

    // get a product
    if (method === "GET") {
        try {
            const product = await Product.findById(id);
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    // update product
    if (method === "PUT") {
        try {
            const product = await Product.create(req.body);
            res.status(201).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    // delete product
    if (method === "DELETE") {
        try {
            const product = await Product.create(req.body);
            res.status(201).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}
