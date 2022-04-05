
import Product from '../../../models/Product';
import dbConnect from './../../../util/mongo';

export default async function handler(req, res) {
    const {
        method,
        query: { id },
        cookies
    } = req;
    const token = cookies.token

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
        if (!token || token !== process.env.token) {
            return res.status(401).json("Not authenticated!")
        }
        try {
            const product = await Product.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            console.log(product);
            res.status(201).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    // delete product
    if (method === "DELETE") {
        if (!token || token !== process.env.token) {
            return res.status(401).json("Not authenticated!")
        }
        try {
            const product = await Product.findByIdAndDelete(id);
            res.status(200).json("the product deleted successfully");
        } catch (err) {
            res.status(500).json(err);
        }
    }
}
