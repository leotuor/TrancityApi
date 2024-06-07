import jwt from 'jsonwebtoken';
import Usuario from '../models/UserModel';

// eslint-disable-next-line consistent-return
export default async (req, res, next) => {
  try {
    const token = req.headers.authorization || null;
    // eslint-disable-next-line eqeqeq
    if (!token || token == 'Bearer') {
      return res.status(401).send({
        message: 'Access denied!',
      });
    }
    const [_, tokenLimpo] = token.split(' ');

    const decodedToken = jwt.decode(tokenLimpo);

    const usuario = await Usuario.findOne({
      where: {
        id: decodedToken.userId,
      },
    });
    if (usuario.role !== 'admin') {
      return res.status(401).send({
        message: 'Acesso negado, Permissão não encontrada',
      });
    }
    next();
  } catch (error) {
    return res.status(401).send({
      message: error.message,
    });
  }
};
