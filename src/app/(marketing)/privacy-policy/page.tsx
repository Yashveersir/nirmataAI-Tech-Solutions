import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { createMetadata } from "@/lib/metadata";
import { siteInfo } from "@/data/site";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "NirmataAI Tech Solution's privacy policy — how we collect, use, and protect your personal data.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const lastUpdated = "July 10, 2026";

  return (
    <>
      <Section spacing="lg">
        <Container size="md">
          <AnimatedSection>
            <SectionHeader
              title="Privacy Policy"
              subtitle={`Last updated: ${lastUpdated}`}
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="text-muted-foreground mt-12 space-y-8 text-base leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-foreground text-xl font-semibold">1. Introduction</h2>
                <p>
                  {siteInfo.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
                  is committed to protecting your privacy. This Privacy Policy explains how
                  we collect, use, disclose, and safeguard your information when you visit
                  our website or use our services.
                </p>
                <p>
                  By accessing our website or using our services, you agree to the collection
                  and use of information in accordance with this policy.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-foreground text-xl font-semibold">2. Information We Collect</h2>
                <h3 className="text-foreground text-lg font-medium">Personal Data</h3>
                <p>
                  We may collect personally identifiable information such as your name, email
                  address, phone number, and company name when you fill out a contact form,
                  subscribe to our newsletter, or book a consultation.
                </p>
                <h3 className="text-foreground text-lg font-medium">Usage Data</h3>
                <p>
                  We automatically collect certain information when you visit our website,
                  including your IP address, browser type, operating system, referring URLs,
                  and pages viewed. We use this data to improve our website and services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-foreground text-xl font-semibold">3. How We Use Your Information</h2>
                <p>We use the information we collect for the following purposes:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>To provide, operate, and maintain our services</li>
                  <li>To communicate with you about your inquiries, projects, and requests</li>
                  <li>To send you marketing communications (with your consent)</li>
                  <li>To improve our website and services</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-foreground text-xl font-semibold">4. Data Sharing and Disclosure</h2>
                <p>
                  We do not sell your personal information. We may share your data with
                  trusted third-party service providers who assist us in operating our
                  website and services, provided they agree to keep your information
                  confidential.
                </p>
                <p>
                  We may disclose your information if required to do so by law or in
                  response to valid legal requests.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-foreground text-xl font-semibold">5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect
                  your personal information against unauthorized access, alteration,
                  disclosure, or destruction.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-foreground text-xl font-semibold">6. Your Rights</h2>
                <p>Depending on your jurisdiction, you may have the right to:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to or restrict processing of your data</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-foreground text-xl font-semibold">7. Cookies</h2>
                <p>
                  We use essential cookies to ensure the proper functioning of our website.
                  Analytics cookies may be used to understand how visitors interact with our
                  site. You can control cookie preferences through your browser settings.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-foreground text-xl font-semibold">8. Third-Party Services</h2>
                <p>
                  Our website may contain links to third-party websites. We are not
                  responsible for the privacy practices of these websites. We encourage you
                  to review their privacy policies before providing any personal information.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-foreground text-xl font-semibold">9. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of
                  any changes by posting the new policy on this page and updating the
                  &ldquo;Last updated&rdquo; date.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-foreground text-xl font-semibold">10. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <ul className="space-y-1 text-sm">
                  <li>Email: {siteInfo.contact.email}</li>
                  <li>Phone: {siteInfo.contact.phone}</li>
                  <li>Address: {siteInfo.contact.address}</li>
                </ul>
              </section>
            </div>
          </AnimatedSection>
        </Container>
      </Section>
    </>
  );
}
