module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '72e9b5a0d21cd791a37623bcddc818ad'),
  },
});
