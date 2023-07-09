import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./polises.css";
import pdf from "../../assets/file-pdf.svg";
import link from "../../assets/link.svg";
function Privacypolicy() {
  useEffect(() => {
    const element = document.querySelector(".policies-content");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  });
  return (
    <>
      <div className="polises">
        <div className="layout"></div>
        <div className="contact container">
          <h1 className="display-5 display-md-5 display-lg-3">Get In Touch</h1>
          <div className="policies-container">
            <Link to={"/polises/compliance"}>
              <div className="policie ">
                <img src={link} alt="" />
                <h6>Compliance & Regulatory</h6>
              </div>
            </Link>

            <div></div>
            <a
              href="../../assets/iGenius-Policies-Procedures.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="policie ">
                <img src={pdf} alt="" />
                <h6>Policies & Procedures</h6>
              </div>
            </a>
            <div></div>
            <Link to={"/polises/distributoragreement"}>
              <div className="policie ">
                <img src={link} alt="" />
                <h6>Distributor Agreement</h6>
              </div>
            </Link>
            <div></div>
            <Link to={"/polises/privacypolicy"}>
              <div className="policie ">
                <img src={link} alt="" />
                <h6>Privacy Policy</h6>
              </div>
            </Link>
            <div></div>
            <Link to={"/polises/purchaseterms"}>
              <div className="policie ">
                <img src={link} alt="" />
                <h6>Purchase Terms</h6>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="policies-content bg-white">
        <div className="container py-5 ">
          <h2 className="heading2 " style={{ color: "rgb(68, 178, 221)" }}>
            Privacy Policy
          </h2>
          <p>
            We respect our customers and understand that you are concerned about
            privacy. The purpose of this privacy policy is to let you know what
            kind of information we collect, how we use it, with whom it may be
            shared, what choices you have regarding our use of your information,
            and how you may review and change some of the data you provide to
            us.
          </p>
          <p>
            You have entered a “replicated website” of a Distributor for iGenius
            LLC (referred to herein as the “Company”, “our”, “us” or “we”) or
            through our corporate site{" "}
            <a href="https://igeniusglobal.com/">iGeniusglobal.com</a>. These
            sites are operated by the Company and are hosted on the server of
            the Company and its third-party technology providers. The
            information you submit on the site is sent to and accessed by the
            Company, as well as the Distributor (referred to herein as
            “Distributor”) to whom this Site is assigned (except as set forth in
            this privacy policy). By visiting this Site and providing
            information to the Company you consent to the following privacy
            policy, use and disclosure of information.
          </p>
          <p>
            We place a high priority on the security of your personal
            information and we have incorporated the General Data Protection
            Regulation (GDPR) implemented by the European Union on May 25th,
            2018. We adhere to these regulations for all customers and
            distributors regardless of their geographical location or country of
            origin.
          </p>
          <h2 style={{ color: "rgb(68, 178, 221)" }}>Information Collected</h2>
          <p>
            The Company is the sole owner of the information collected on our
            websites and on the replicated websites that we provide for use by
            our Distributors (hereafter the “websites”). We collect information
            from customers and visitors to the websites at different points on
            the websites.
          </p>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>Personal Information</h3>
          <p>
            Through your use of or visits to our websites, you may be required
            or requested to provide personally identifiable information to us.
            Personal information is any piece of information that can
            potentially be used to uniquely identify, contact, or locate a
            single person including names, addresses, email addresses, telephone
            numbers, and credit card or banking information. We adhere to
            General Data Protection Regulation (GDPR) a regulation implemented
            by the European Union designed to protect the rights of the person,
            their information and how their information is used. This regulation
            is effective as of May 25th, 2018 and is incorporated within this
            policy. GDPR expands the definition of personal information to
            include <b>all</b> of the following:
          </p>
          <ul>
            <li>a name and surname</li>
            <li>a home address</li>
            <li>an email address such as name.surname@company.com</li>
            <li>an identification card number</li>
            <li>
              location data (for example the location data function of a mobile
              phone)*
            </li>
            <li>an Internet Proctcol (IP) address</li>
            <li>a cookie ID*</li>
            <li>the advertising identifier</li>
            <li>
              data held by a hospital or doctor, which could be a symbol that
              uniquely identifies a person
              <br />
              *We do not track or identify member location and/or mobile unique
              identifiers
            </li>
          </ul>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>Customer Information</h3>
          <p>
            Customers are required to provide contact information (such as name,
            mailing address, telephone number(s), and email address). Customers
            are also required to provide payment information (such as credit
            card, debit card, or checking account information). We use this
            information to maintain contact with customers, to process customer
            orders, and for billing purposes. All payment information is stored
            by our merchant gateway, encrypted and not available to our
            employees or the company for access. Only partial payment
            identifiers are available to demonstrate and verify a customer
            purchase. If you contact us and ask us to tell you the payment
            information you have on file, we are not able to do so other than to
            provide you a partial payment identifier. We cannot update your
            credit card or payment information for you. Only you can enter this
            information which is encrypted and managed by PCI compliant
            merchants.
          </p>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>Profile Information</h3>
          <p>
            The Company gathers and stores some information that it collects
            through cookies, log files, clear gifs, and/or third parties. Such
            information is not used to provide offers or create a profile of
            visitors to our websites (“users”) which include visitors and
            customers. Profile information is not tied to a user’s personally
            identifiable information; however, such information is aggregated to
            provide offers and improve the content of the site for the user.
          </p>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>Payment Information</h3>
          <p>
            The Company may at its discretion share credit card response data
            for failed payments to third party companies in order to optimize
            the Company's credit card payment processes. This credit card
            response data DOES NOT constitute financial credit card data such as
            credit card card number, security codes and expiration date.
          </p>
          <h2 style={{ color: "rgb(68, 178, 221)" }}>
            Information Use & Sharing
          </h2>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>
            Personally Identifiable Information
          </h3>
          <p>
            The Company DOES NOT share personally identifiable information
            except with contracted service providers as may be necessary to: (a)
            process orders and/or returns and obtain payment; (b) complete an
            enrollment as a customer. We also provide personally identifiable
            information: (a) to upline Distributor(s) as described herein;
            and/or (b) to the Distributor on the Company’s Distributor locator
            feature on the Company’s website; and/or (c) to assign a sales or
            enrollment lead to an active Distributor.
          </p>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>Geneology Information</h3>
          <p>
            The Company provides certain information to Distributors regarding
            Customers enrolled in a Distributor(s) downline marketing
            organization. As a Customer of The Company, your name, address,
            email address, telephone number, sales volume, and order history
            information will be provided to other Distributors as downline
            genealogy information. No other personally identifiable information
            will be shared with other Distributors. Information relating to
            downline Distributors is made available to Distributors subject to a
            confidentiality and non-solicitation covenant in the Distributor
            agreement that each Distributor enters into with the Company.
            However, the Company does not warrant that other Distributors will
            adhere to the confidentiality and non-solicitation covenants, and
            the Company shall not be responsible for Distributors’ violation of
            these covenants.
          </p>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>Sales Information</h3>
          <p>
            If you make a purchase from a Distributor through this Site, we will
            provide the Distributor to whom this Site is assigned with your
            name, contact information, a description of the item(s) purchased,
            and the sales volume associated with the purchase. No other
            personally identifiable information will be shared with the
            Distributor. You may change the information at any time by accessing
            your account profile page.
          </p>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>
            Aggregated Information (Non-Personally Identifiable)
          </h3>
          <p>
            The Company may share aggregated demographic information with our
            partners, vendors, suppliers, third party providers, and
            advertisers. This is not linked to any personally identifiable
            information. Cumulatively this information cannot identify an
            individual person.
          </p>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>Business Transitions</h3>
          <p>
            In the event the Company goes through a business transition, such as
            a merger, being acquired by another company, or selling a portion of
            its assets, the personal information of customers and Distributors
            will, in most instances, be part of the assets transferred. If as a
            result of the business transition, a customer’s personally
            identifiable information will be used in a manner different from
            that stated at the time of collection, the customer will be given a
            choice consistent with our notification of changes section.
          </p>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>
            Lead Assignment And Generator Locator Features
          </h3>
          <p>
            The Company occasionally will assign prospective sales and new
            customer leads to Distributors. In these cases, we will provide the
            Distributor the name and contact information of the customer or
            prospective customer. In addition, the Company has a Generator
            Locator feature on its website. Pursuant to this feature, a
            prospective customer can locate a nearby Distributor. In order to
            make the Distributor Locator feature and the lead assignments
            effective, the company will provide the prospective customer with
            the Distributor’s name and contact information, which may include
            his/her telephone number, address, and/or email address. Both the
            Customer and Distributor define the information they will allow to
            be shared for this purpose. The customer and distributor may change
            this information at any time by accessing their company provided
            account page/profile.
          </p>
          <h2 style={{ color: "rgb(68, 178, 221)" }}>Communication From Us</h2>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>
            Special Offers And Updates
          </h3>
          <p>
            The Company sends all Customers a welcoming email to verify
            password, username, and reference to terms and agreements signed for
            during the purchase process. All Customers will occasionally receive
            information on the Company business, products, services, promotional
            offers, and newsletters. We do not allow other companies or entities
            to contact our customers unless a customer requests or grants
            permission to the third-party provider.
          </p>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>Service Announcements</h3>
          <p>
            At times it is necessary to send out a strictly service related
            announcements. For instance, if our service is temporarily suspended
            for maintenance we might send customers an email. Generally,
            customers may not opt-out of these communications, though they can
            deactivate their account. However, these communications are not
            promotional in nature.
          </p>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>Customer Support</h3>
          <p>
            The Company communicates with Customers via email, regular mail,
            support ticketing system and telephone on a regular basis to provide
            requested services and in regard to issues relating to their Company
            services. Such communications may be by email, regular mail, support
            ticketing system or telephone. The Company also communicates with
            customers by posting messages in the member site and through its
            mobile app.
          </p>
          <h2 style={{ color: "rgb(68, 178, 221)" }}>Miscellaneous</h2>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>Legal Disclaimer</h3>
          <p>
            Though the Company makes every effort to preserve user privacy, the
            Company may need to disclose personal information when required by
            law wherein we have a good-faith belief that such action is
            necessary to comply with a current judicial proceeding, a law
            enforcement action, a subpoena, warrant, court order or legal
            process served on the Company.
          </p>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>
            Changes To The Privacy Policy
          </h3>
          <p>
            The Company reserves the right to amend or change this Privacy
            Policy at any time and at its sole discretion. When material changes
            or amendments are made to the Privacy Policy, we will announce the
            release and effective date of the amended Privacy Policy which is
            typically immediately upon release unless otherwise specified by the
            Company.
          </p>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>Choice</h3>
          <p>
            Users are notified when their information is being collected by any
            outside parties (except for IT providers, merchant services
            providers, federal regulators and Google Analytics). Typically the
            Company does not share information with third parties but in the
            event it does so, all users will be notified in advance.
          </p>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>Links</h3>
          <p>
            The Company’ websites may contain links to other sites. Please be
            aware that the Company is not responsible for the privacy practices
            of such other sites. We encourage users to be aware when they leave
            our site and to read the privacy statements of each and every
            website that collects personally identifiable information. This
            privacy statement applies solely to information collected by the
            Company websites.
          </p>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>
            CALIFORNIA ONLINE PRIVACY PROTECTION ACT COMPLIANCE
          </h3>
          <p>
            Because we value your privacy we have taken the necessary
            precautions to fully comply with the California Online Privacy
            Protection Act. We therefore will not distribute your personal
            information to outside parties without your consent.
          </p>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>
            CHILDERN'S ONLINE PRIVACY PROTECTION ACT COMPLIANCE
          </h3>
          <p>
            We are in compliance with the requirements of COPPA (Children’s
            Online Privacy Protection Act), we do not knowingly collect any
            information from anyone under 13 years of age. Our website, products
            and services are all directed to people who are at least 13 years
            old or older.
          </p>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>
            Privacy Policy Applies To All Data Collected
          </h3>
          <p>
            This privacy policy applies to personal data regardless of the
            technology used for processing that data – it’s technology neutral
            and applies to both automated and manual processing. It also doesn’t
            matter how the data is stored – in an IT system, through video
            surveillance, or on paper; in all cases, personal data is protected
            as defined in this policy.
          </p>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>USER RIGHTS</h3>
          <p>
            Your personal information is exclusively yours. If you choose to
            share information with us as a customer or as a distributor, you
            grant us permission to collect your personal information. We will
            protect your information as defined in this policy. You maintain
            control over your information.
          </p>
          <h4>You have the right to:</h4>
          <ul>
            <li>information about the processing of your personal data</li>
            <li>obtain access to the personal data held about you</li>
            <li>
              ask for incorrect, inaccurate or incomplete personal data to be
              corrected
            </li>
            <li>
              request that personal data be erased when it’s no longer needed or
              if processing it is unlawful
            </li>
            <li>
              object to the processing of your personal data for marketing
              purposes or on grounds relating to your particular situation
            </li>
            <li>
              request the restriction of the processing of your personal data in
              specific case
            </li>
            <li>
              receive your personal data in a machine-readable format and send
              it to another controller (‘data portability’)
            </li>
            <li>
              receive your personal data in a machine-readable format and send
              it to another controller (‘data portability’)
            </li>
          </ul>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>QUESTIONS</h3>
          <p>
            Questions regarding this Privacy Policy should be directed to:{" "}
            <br />
            <a href="mailto:compliance@iGeniusglobal.com">
              compliance@iGeniusglobal.com
            </a>
            <br />
            by mail to:
            <br />
            iGenius
            <br />
            459 North 300 West Suite 15B
            <br />
            Kaysville, UT
            <br />
            84037
          </p>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>Effective Date</h3>
          <p>The effective date of this Privacy Policy is January 1st, 2021.</p>
        </div>
      </div>
    </>
  );
}

export default Privacypolicy;
