import Pusher from "pusher"

export const pusher = new Pusher({
    appId: 'YOUR_APP_ID',
    key: 'YOUR_KEY',
    secret: 'YOUR_SECRET',
    cluster: 'YOUR_CLUSTER',
    useTLS: true,
  });