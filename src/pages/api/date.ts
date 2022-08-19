import { NextApiRequest, NextApiResponse } from 'next'
import DownTen from '../../data/product-10ab.json'
import UpTem from '../../data/product-10ac.json'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'POST') {
      if (req.body.value === 1) {
        res.status(200).json(DownTen)
      } else if (req.body.value === 2) {
        res.status(200).json(UpTem)
      } else {
        res.status(404).json({ bad: 'Not value ' })
      }
    } else {
      res.status(400)
    }
  } catch (error) {
    console.log(error)
  }
}
