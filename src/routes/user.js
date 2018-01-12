import KoaRouter from 'koa-router';
import controllers from '../controllers/';

const router = new KoaRouter({
  prefix: '/api/user'
});

router
  .get('/:id', controllers.user.getUserById)
  .post('/', controllers.user.addUser)
  .put('/', controllers.user.updateUser)
  .post('/login', controllers.user.getUserByUsernameAndPassword)

module.exports = router