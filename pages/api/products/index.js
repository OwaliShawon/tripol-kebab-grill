
import Product from '../../../models/Product';
import dbConnect from './../../../util/mongo';

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();
  // get all the products
  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // posting a new product
  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
