module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5dbdecf858f8403f8e956e8a2d44f880'),
  },
});
