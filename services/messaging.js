const { config } = require("dotenv")
const twilio = require("twilio")

export class TwilioMessaging {
  constructor(params) {
    this.client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    )
    this.message = params.message
    this.receiver = params.receiver
  }
  async sendMessage() {}
}
