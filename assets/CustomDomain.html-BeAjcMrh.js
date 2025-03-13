import{_ as a,e as t,i,o}from"./app-keppcQkQ.js";const n={};function r(d,e){return o(),t("div",null,e[0]||(e[0]=[i('<h1 id="custom-domain" tabindex="-1"><a class="header-anchor" href="#custom-domain"><span>Custom Domain</span></a></h1><p>This page outlines the process in case you want to use a custom domain for your instance rather than a provided <code>tough.zone</code> subdomain.</p><h2 id="preparation" tabindex="-1"><a class="header-anchor" href="#preparation"><span>Preparation</span></a></h2><p>We need following information upfront as they decide about what steps to take:</p><ul><li>FQDN for the (sub-) domain you want to use</li><li>whether we should handle DNS for your (sub-) domain or you will handle it <ul><li>if we should handle DNS, we need a technical contact who is able to change NS settings for the desired (sub-) domain</li><li>if you want to handle DNS, we need a technical contact who is able to change DNS settings for the desired (sub-) domain. We need to know whether you like us to take care of SSL/TLS certificates (recommended) or bring your own certificate. Depending on your decision, both processes are outlined below.<br> Additionally we will provide you with a CNAME record that you will need to set on your (sub-) domain.</li></ul></li></ul><h3 id="we-take-care-of-dns" tabindex="-1"><a class="header-anchor" href="#we-take-care-of-dns"><span>We take care of DNS</span></a></h3><p>After we set up our name servers with your (sub-) domain, everything else is handled by us and you do not need to care about technical details.</p><h3 id="you-take-care-of-dns" tabindex="-1"><a class="header-anchor" href="#you-take-care-of-dns"><span>You take care of DNS</span></a></h3><h4 id="certificates-handled-by-us-recommended" tabindex="-1"><a class="header-anchor" href="#certificates-handled-by-us-recommended"><span>Certificates handled by us (recommended)</span></a></h4><p>If you decide that we handle needed certificates for your instance, there are two ways to validate certificate creation through AWS&#39; certificate authority:</p><h5 id="dns-validation-recommended" tabindex="-1"><a class="header-anchor" href="#dns-validation-recommended"><span>DNS validation (recommended):</span></a></h5><ol><li>certificates are requested and pending</li><li>we will provide you with DNS records you need to set for certificate validation</li><li>after DNS is validated, the needed certificates are created and can deploy your instance</li></ol><h5 id="email-validation" tabindex="-1"><a class="header-anchor" href="#email-validation"><span>Email validation</span></a></h5><ol><li>certificates are requested and pending</li><li>the technical contact on record with your domain registrar receives an email from AWS with steps how to validate certificate creation</li><li>after the technical contact validated certificate creation within the timeout outlined by AWS, the certificates are created and we can deploy your instance</li></ol><h4 id="bring-your-own-certificate" tabindex="-1"><a class="header-anchor" href="#bring-your-own-certificate"><span>Bring your own certificate</span></a></h4><p>If you decide that you want to bring your own certificate, it must comply to the requirements outlined on <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cnames-and-https-requirements.html" target="_blank" rel="noopener noreferrer">this page</a>.</p><p>After you sent us the required public and private keys we can import the certificate and deploy your instance.</p>',17)]))}const c=a(n,[["render",r],["__file","CustomDomain.html.vue"]]),l=JSON.parse('{"path":"/technical/CustomDomain.html","title":"Custom Domain","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Preparation","slug":"preparation","link":"#preparation","children":[{"level":3,"title":"We take care of DNS","slug":"we-take-care-of-dns","link":"#we-take-care-of-dns","children":[]},{"level":3,"title":"You take care of DNS","slug":"you-take-care-of-dns","link":"#you-take-care-of-dns","children":[]}]}],"git":{"updatedTime":1741884588000,"contributors":[{"name":"Julian Rabe","username":"Julian Rabe","email":"jr@tough.dev","commits":1,"url":"https://github.com/Julian Rabe"}],"changelog":[{"hash":"c50835a35e412e54b6c8f261db532374d6f4cdd9","time":1741884588000,"email":"jr@tough.dev","author":"Julian Rabe","message":"fix(CustomDomain): lists"}]},"filePathRelative":"technical/CustomDomain.md"}');export{c as comp,l as data};
