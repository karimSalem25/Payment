import { Injectable } from '@nestjs/common';
require('dotenv').config();


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async payment(amount: number) {
    const stripe = require('stripe')(
      process.env.STRIPE_SECRET_KEY1,
    );

    const paymentIntent = await stripe.charges.create(
      {
        amount: amount,
        currency: 'eur',
        source: 'tok_amex'
      },
      {
        stripeAccount: process.env.STRIPE_ACCOUNT_ID1,
      },
    );
    return paymentIntent;
  }
}