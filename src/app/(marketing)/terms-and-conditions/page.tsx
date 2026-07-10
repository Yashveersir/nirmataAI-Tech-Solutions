import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { createMetadata } from "@/lib/metadata";
import { siteInfo } from "@/data/site";

export const metadata = createMetadata({
  title: "Terms & Conditions",
  description:
    "NirmataAI Tech Solution's terms and conditions governing the use of our website and services.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  const lastUpdated = "July 10, 2026";

  return (
    <>
      <Section spacing="lg">
        <Container size="md">
          <AnimatedSection>
            <SectionHeader
              title="Terms & Conditions"
              subtitle={`Last updated: ${lastUpdated}`}
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="text-muted-foreground mt-12 space-y-8 text-base leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-foreground text-xl font-semibold">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using the {siteInfo.name} website and services, you agree
                  to be bound by these Terms & Conditions. If you do not agree with any
                  part of these terms, you may not access our services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-foreground text-xl font-semibold">2. Services</h2>
                <p>
                  {siteInfo.name} provides software development, AI solutions, cloud
                  infrastructure, UI/UX design, and mobile development services. The specific
                  scope, deliverables, timeline, and pricing of each engagement will be
                  defined in a separate Statement of Work (SOW) or Service Agreement.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-foreground text-xl font-semibold">3. Intellectual Property</h2>
                <h3 className="text-foreground text-lg font-medium">Client IP</h3>
                <p>
                  Upon full payment for services, all intellectual property rights to the
                  deliverables created specifically for your project are transferred to you.
                  This includes source code, design assets, and documentation.
                </p>
                <h3 className="text-foreground text-lg font-medium">NirmataAI IP</h3>
                <p>
                  We retain the right to use any pre-existing tools, libraries, frameworks,
                  and methodologies that we bring to a project. We may also use anonymized
                  project insights for portfolio and marketing purposes unless otherwise
                  agreed in writing.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-foreground text-xl font-semibold">4. Client Responsibilities</h2>
                <p>As a client, you agree to:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Provide timely feedback and approvals to keep the project on schedule</li>
                  <li>Grant access to necessary systems, APIs, and third-party accounts</li>
                  <li>Provide clear requirements and promptly communicate any changes</li>
                  <li>Make timely payments as outlined in the SOW or Service Agreement</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-foreground text-xl font-semibold">5. Payment Terms</h2>
                <p>
                  Payment terms are outlined in each SOW or Service Agreement. Typical terms
                  include a deposit before work begins, milestone-based payments, and final
                  payment upon delivery. Invoices are due within the timeframe specified in
                  the agreement.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-foreground text-xl font-semibold">6. Confidentiality</h2>
                <p>
                  Both parties agree to maintain the confidentiality of all proprietary
                  information shared during the course of the engagement. This obligation
                  survives the termination of the agreement.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-foreground text-xl font-semibold">7. Limitation of Liability</h2>
                <p>
                  {siteInfo.name} shall not be liable for any indirect, incidental, special,
                  or consequential damages arising from the use of our services. Our total
                  liability is limited to the amount paid for the specific service giving
                  rise to the claim.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-foreground text-xl font-semibold">8. Termination</h2>
                <p>
                  Either party may terminate an engagement with written notice as specified
                  in the SOW or Service Agreement. Upon termination, the client will pay for
                  all work completed up to the termination date.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-foreground text-xl font-semibold">9. Website Use</h2>
                <p>
                  You agree not to use our website for any unlawful purpose or in violation
                  of any applicable laws. You may not reproduce, distribute, or create
                  derivative works from our website content without our written permission.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-foreground text-xl font-semibold">10. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be
                  effective immediately upon posting to this page. Your continued use of our
                  services after any changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-foreground text-xl font-semibold">11. Governing Law</h2>
                <p>
                  These terms shall be governed by and construed in accordance with the laws
                  of the State of California, without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-foreground text-xl font-semibold">12. Contact</h2>
                <p>
                  For questions about these Terms & Conditions, please contact us:
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
