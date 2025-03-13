# Custom Domain

This page outlines the process in case you want to use a custom domain for your instance rather
than a provided `tough.zone` subdomain.

## Preparation

We need following information upfront as they decide about what steps to take:

- FQDN for the (sub-) domain you want to use
- whether we should handle DNS for your (sub-) domain or you will handle it
  - if we should handle DNS, we need a technical contact who is able to change NS settings for the
    desired (sub-) domain
  - if you want to handle DNS, we need a technical contact who is able to change DNS settings for
    the desired (sub-) domain. We need to know whether you like us to take care of SSL/TLS
    certificates (recommended) or bring your own certificate. Depending on your decision, both
    processes are outlined below.<br />
    Additionally we will provide you with a CNAME record that you will need to set on your (sub-)
    domain.

### We take care of DNS

After we set up our name servers with your (sub-) domain, everything else is handled by us and you
do not need to care about technical details.

### You take care of DNS

#### Certificates handled by us (recommended)

If you decide that we handle needed certificates for your instance, there are two ways to validate
certificate creation through AWS' certificate authority:

a. DNS validation (recommended):
  1. certificates are requested and pending
  2. we will provide you with DNS records you need to set for certificate validation
  3. after DNS is validated, the needed certificates are created and can deploy your instance

b. Email validation
  1. certificates are requested and pending
  2. the technical contact on record with your domain registrar receives an email from AWS with
     steps how to validate certificate creation
  3. after the technical contact validated certificate creation within the timeout outlined by AWS,
     the certificates are created and we can deploy your instance

#### Bring your own certificate

If you decide that you want to bring your own certificate, it must comply to the requirements
outlined on [this page](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cnames-and-https-requirements.html).

After you sent us the required public and private keys we can import the certificate and deploy
your instance.
