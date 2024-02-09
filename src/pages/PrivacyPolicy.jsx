import React from "react";
import Navbar from "../componenets/LandingPage/Navbar";
import Footer from "../componenets/LandingPage/Footer";

const PrivacyPolicy = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto py-8 flex flex-col justify-center items-center w-[700px]">
        <h1 className="text-3xl font-bold text-center mb-8">
          Website Privacy Policy
        </h1>
        <div className="prose prose-lg mx-auto">
          <h2 className="font-bold">Personal Information Collection:</h2>
          <p>
            We may collect personal information from individuals or volunteers
            who interact with our website. The types of personal information we
            collect may include:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>First Name</li>
            <li>Middle Name</li>
            <li>Last Name</li>
            <li>Sex</li>
            <li>Date of Birth</li>
            <li>Age</li>
            <li>Nationality</li>
            <li>Place of Birth</li>
            <li>Region</li>
            <li>Current Address</li>
            <li>Educational Background</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Field of Study</li>
            <li>Available Hours per Week</li>
            <li>Short Bio</li>
          </ul>
          <p>For organizations, we may collect:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Organization Name</li>
            <li>Sector/Working Area</li>
            <li>Working Region</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Location</li>
            <li>Short Bio</li>
          </ul>

          <h2>Use of Personal Information:</h2>
          <p>
            We use the personal information provided to us for the following
            purposes:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              To communicate with individuals or volunteers regarding their
              inquiries, applications, or participation in activities organized
              by Ethiopian Youth Council.
            </li>
            <li>
              To provide updates, news, and information about the council,
              opportunities, events, or other relevant content.
            </li>
            <li>
              To improve our website and services based on user feedback and
              preferences.
            </li>
            <li>
              To comply with legal obligations and protect the rights and safety
              of individuals and the organization.
            </li>
          </ul>

          <h2>Data Security:</h2>
          <p>
            We take appropriate measures to protect the personal information
            submitted to us, including using encryption technologies and
            maintaining secure storage systems. However, please note that no
            method of data transmission over the internet or electronic storage
            is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>Third-Party Disclosure:</h2>
          <p>
            We do not sell, trade, or transfer personal information to third
            parties without explicit consent, except for trusted third parties
            who assist us in operating our website, conducting our business, or
            providing services, as long as they agree to keep the information
            confidential.
          </p>

          <h2>Cookies and Analytics:</h2>
          <p>
            Our website may use cookies to enhance the user experience. These
            cookies may collect non-personal information about website usage and
            traffic patterns. We may also use analytics tools to track and
            analyze website performance and visitor behavior, but this
            information is anonymized and does not personally identify
            individuals.
          </p>

          <h2>Accessibility Policy:</h2>
          <p>
            Ethiopian Youth Council is committed to ensuring that our website is
            accessible to all individuals, including those with disabilities. We
            strive to comply with accessibility standards and guidelines to
            provide an inclusive and user-friendly experience.
          </p>
          <p>
            <strong>Web Accessibility Features:</strong>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Clear and consistent website navigation.</li>
            <li>Text alternatives for non-text content such as images.</li>
            <li>Captions and transcripts for multimedia content.</li>
            <li>Adjustable text sizes and color contrast options.</li>
            <li>Keyboard accessibility for easy navigation.</li>
            <li>
              Compatibility with screen readers and assistive technologies.
            </li>
          </ul>
          <p>
            <strong>Ongoing Improvements:</strong>
          </p>
          <p>
            We continuously review and improve our website accessibility to
            ensure compliance with accessibility standards. We welcome feedback
            from users and encourage them to contact us regarding any
            accessibility concerns or suggestions for improvement.
          </p>

          <h2>Third-Party Content:</h2>
          <p>
            While we strive to make our website accessible, some third-party
            content or external links may not be fully compliant with
            accessibility standards. We are not responsible for the
            accessibility of such content but will address any accessibility
            issues within our control.
          </p>

          <h2>Contact Us:</h2>
          <p>
            If you have any questions, concerns, or feedback regarding the
            privacy or accessibility of our website, please contact us at{" "}
            <a href="mailto:contact@ethioyouthcouncil.org">
              contact@ethioyouthcouncil.org
            </a>
            . We will make every effort to address and resolve your inquiries
            promptly.
          </p>

          <p>
            Please note that this Privacy and Accessibility Policy applies to
            the Ethiopian Youth Council website only and does not extend to any
            third-party websites linked from our site. We encourage you to
            review the privacy and accessibility policies of those websites
            separately.
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
