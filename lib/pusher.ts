import Pusher from "pusher"
import PusherClient from "pusher-js"
export const pusher = new Pusher({
    appId: "1722427",
    key: "7a81232e8743d8b34617",
    secret: "0711b2f698ec1c2931f8",
    cluster: 'ap2',
    useTLS: true,
  });

export const pusherClient = new PusherClient( "7a81232e8743d8b34617",{
  cluster:"ap2",
})
// NEXT_PUBLIC_PUSHER_APP_ID = "1722427"
// NEXT_PUBLIC_PUSHER_KEY = "7a81232e8743d8b34617"
// NEXT_PUBLIC_PUSHER_SECRET = "0711b2f698ec1c2931f8"
// NEXT_PUBLIC_PUSHER_CLUSTER = "ap2"