# Custom Email Address

We are using [AWS SES](https://aws.amazon.com/ses/) for email transport which dictates both
processes described below. Learn more about both verification processes
[here](https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html).

## Domain verification

::: tip
We generally recommend domain verification.
:::

In this case we will verify a whole (sub-) domain using DNS records. Afterwards we will be able to
send emails from any email address ending with that (sub-) domain.

### Process

1. You inform us about the address you would like to use (e.g. `noreply@your-domain.com`)
2. We start email domain verification with AWS and provide you with DKIM keys
3. You will have 48 hours to complete DNS configuration and add the provided keys to the DNS of `your-domain.com`
4. The domain is verified and can be used for outbound emails

### Pros and cons

|                             Pro                             |            Con             |
|:-----------------------------------------------------------:|:--------------------------:|
| DKIM verified, emails are more likely not delivered to spam | DNS configuration required |
|    DMARC and SPF compliance possible (please contact us)    |                            |
|  Any address that ends with your domain instantly possible  |                            |

## Single Email verification

In this case we verify a specific email address like `noreply@your-domain.com`. Afterwards we will
only be able to send emails from that specific email address.

### Process

1. You inform us about the address you would like to use (e.g. `noreply@your-domain.com`)
2. We start email address verification with AWS
3. AWS will send a verification email to your chosen email address
4. You will have 48 hours to click on the activation link provided by AWS
5. The email address is verified and can be used for outbound emails

### Pros and cons

|       Pro        |                                           Con                                           |
|:----------------:|:---------------------------------------------------------------------------------------:|
| Easier to set up |                            DMARC, DKIM and SPF not possible                             |
|                  |                  Step needs to be repeated if desired address changes                   |
|                  | You need to maintain an inbox for the desired address to receive the verification email |
