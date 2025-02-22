import { withIronSessionApiRoute } from 'iron-session/next'

import { sessionOptions } from '../../libs/session'

export default withIronSessionApiRoute(async (req, res) => {
  try {
    const user = {
      isLoggedIn: false,
      email: '',
      id: '',
    }
    req.session.destroy()
    res.json(user)
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Service is not available', message: error.message })
  }
}, sessionOptions)
