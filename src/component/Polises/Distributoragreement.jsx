import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./polises.css";
import pdf from "../../assets/file-pdf.svg";
import link from "../../assets/link.svg";
function Distributoragreement() {
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
            Distributor Agreement
          </h2>
          <ol>
            <li>
              I understand that as an Independent Distributor for iGenius (the
              “Company”):
              <ol type="a">
                <li>
                  I have the right to offer for sale the Company’s products and
                  services in accordance with these Terms and Conditions.
                </li>
                <li>I have the right to enroll persons in the Company.</li>
                <li>
                  If qualified, I have the right to earn commissions pursuant to
                  the Company’s Bonus Plan.
                </li>
              </ol>
            </li>
            <li>
              I agree to present the Company’s Marketing, Bonus Plan, products
              and services, among other revenue generating instruments offered
              by the Company as set forth in official Company literature, as may
              be amended from time-to-time.
            </li>
            <li>
              I agree that as a Distributor for the Company, I am an Independent
              Contractor, and NOT an employee, partner, legal representative, or
              franchisee of the Company. I agree that I will be solely
              responsible for paying all expenses incurred by myself, including
              but not limited to travel, food, lodging, secretarial, office,
              long distance telephone and other expenses. I UNDERSTAND THAT I
              SHALL NOT BE TREATED AS AN EMPLOYEE OF THE COMPANY FOR FEDERAL OR
              STATE TAX PURPOSES. The Company is not responsible for withholding
              and shall not withhold or deduct from my bonuses and commissions,
              if any, FICA, or taxes of any kind. I further understand that I
              will be required to report my earnings according to the federal
              and local tax laws of my legal Distributor address/location of
              formation.
            </li>
            <li>
              I have carefully read and agree to comply with the Company’s
              Replicated Website and Privacy Policy, Consent to Electronic
              Record contained herein, Bonus Plan, Compliance & Regulatory and
              the Policies and Procedures all of which are incorporated into and
              made a part of these Terms and Conditions (these documents shall
              be collectively referred to as the “Agreement”). If I have not yet
              reviewed the Replicated Website and Privacy Policy, the Bonus
              Plan, Compliance & Regulatory, and the Policies and Procedures at
              the time I sign this Agreement, I understand that they are posted
              at Policies & Procedures and agree that I will review them within
              five days from the date on which I sign this Agreement. If I do
              not agree to the documents that comprise this Agreement, my sole
              recourse is to notify the company and cancel my Agreement. Failure
              to cancel constitutes my acceptance of the Policies and
              Procedures, Bonus Plan, Replicated Website, Privacy Policy,
              Compliance and Regulatory documents. I understand that I must be
              in good standing, and not in violation of the Agreement, to be
              eligible for bonuses or commissions from the Company. I understand
              that the Agreement may be amended at the sole discretion of the
              Company, and I agree to abide by all such amendments. Notification
              of amendments shall be posted on the Company’s website OR in my
              Back Office. Amendments shall become effective immediately upon
              release and notice unless otherwise specified by the Company. The
              continuation of my business or my acceptance of bonuses or
              commissions after the effective date of any amendment shall
              constitute my acceptance of any and all amendments to all of the
              policy documentation that comprises this Agreement.
            </li>
            <li>
              In rendering the services hereunder and in connection with my
              agreement in Section 2 above to present the Company’s Marketing,
              Bonus Plan, products and services, among other revenue generating
              instruments offered by the Company as set forth in official
              Company literature, I agree to comply with all applicable federal
              and state laws and the rules and regulations of self-regulatory
              agencies applicable to the presentation and sale of the Company’s
              Marketing, Bonus Plan, products and services, among other revenue
              generating instrument
            </li>
            <li>
              The term of this agreement is one year (subject to prior
              cancellation pursuant to the Policies and Procedures). If I fail
              to annually renew my business, or if it is canceled or terminated
              for any reason, I understand that I will permanently lose all
              rights as a Distributor. I shall not be eligible to sell the
              Company’s products and services, nor shall I be eligible to
              receive commissions, bonuses, or other income resulting from the
              activities of my former sales organization. In the event of
              cancellation, termination or nonrenewal, I waive all rights,
              including but not limited to property rights, to my former sales
              organization and to any bonuses, commissions or other remuneration
              derived through the sales and other activities of my former
              organization. The Company reserves the right to terminate all
              Agreements upon 30 days’ notice if the Company elects to: (1)
              cease business operations; (2) dissolve as a business entity; or
              (3) terminate distribution of its products and/or services via
              direct selling channels. A Distributor may cancel this Agreement
              at any time, and for any reason, upon written notice to the
              Company through the Company’s support ticketing system which is
              accessed via the website and mobile app.
            </li>
            <li>
              I may not assign any rights under the Agreement without the prior
              written consent of the Company. Any attempt to transfer or assign
              the Agreement without the express written consent of the Company
              renders the Agreement voidable at the option of the Company and
              may result in termination of my business.
            </li>
            <li>
              I understand that if I fail to comply with the terms of the
              Agreement, the Company may, at its discretion, impose upon me
              disciplinary sanctions as set forth in the Policies and
              Procedures. If I am in breach, default or violation of the
              Agreement at termination, I shall not be entitled to receive any
              further bonuses or commissions, whether the sales for such bonuses
              or commissions have been completed. I agree that the Company may
              deduct, withhold, set-off, or charge to any form of payment I have
              previously authorized, any amounts I owe or am indebted to the
              Company.
            </li>
            <li>
              The Company, its parent or affiliated companies, brands,
              directors, officers, shareholders, employees, assigns, and agents
              (collectively referred to as “affiliates”), shall not be liable
              for, and I release and hold harmless the Company and its
              affiliates from, all claims for consequential and exemplary
              damages for any claim or cause of action relating to the
              Agreement. I further agree to release and hold harmless the
              Company and its affiliates from all liability arising from or
              relating to the promotion or operation of my business and any
              activities related to it (e.g., the presentation of the Company’s
              products or Compensation and Marketing Plan, the operation of a
              motor vehicle, the lease of meeting or training facilities, etc.),
              and agree to indemnify the Company and its affiliates for any
              liability, damages, fines, penalties, or other awards arising from
              any unauthorized conduct that I undertake in operating my
              business.
            </li>
            <li>
              The Agreement, in its current form and as amended by the Company,
              at its discretion, constitutes the entire contract between the
              Company and myself. Any promises, representations, offers, or
              other communications not expressly set forth in the Agreement are
              of no force or effect.
            </li>
            <li>
              The Agreement, in its current form and as amended by the Company,
              at its discretion, constitutes the entire contract between the
              Company and myself. Any promises, representations, offers, or
              other communications not expressly set forth in the Agreement are
              of no force or effect.
            </li>
            <li>
              If any provision of the Agreement is held to be invalid or
              unenforceable, such provision shall be severed, and the severed
              provision shall be reformed only to the extent necessary to make
              it enforceable. The balance of the Agreement shall remain in full
              force and effect.
            </li>
            <li>
              This Agreement will be governed by and construed in accordance
              with the laws of the State of Utah without regard to principles of
              conflicts of laws. In the event of a dispute between a Distributor
              and the Company arising from or relating to the Agreement, or the
              rights and obligations of either party, the parties shall attempt
              in good faith to resolve the dispute through nonbinding mediation
              as more fully described in the Policies and Procedures. The
              Company shall not be obligated to engage in mediation as a
              prerequisite to disciplinary action against a Member. If the
              parties are unsuccessful in resolving their dispute through
              mediation, the dispute shall be settled totally and finally by
              arbitration as more fully described in the Policies and
              Procedures.
            </li>
            <li>
              This Agreement will be governed by and construed in accordance
              with the laws of the State of Utah without regard to principles of
              conflicts of laws. In the event of a dispute between a Distributor
              and the Company arising from or relating to the Agreement, or the
              rights and obligations of either party, the parties shall attempt
              in good faith to resolve the dispute through nonbinding mediation
              as more fully described in the Policies and Procedures. The
              Company shall not be obligated to engage in mediation as a
              prerequisite to disciplinary action against a Member. If the
              parties are unsuccessful in resolving their dispute through
              mediation, the dispute shall be settled totally and finally by
              arbitration as more fully described in the Policies and
              Procedures.
            </li>
          </ol>
          <h2 className="heading2 " style={{ color: "rgb(68, 178, 221)" }}>
            Consent to Electronic Record
          </h2>
          <p>
            E-SIGN, the Electronic Signatures in Global and National Commerce
            Act (15 U.S.C. § 7001, et seq.), requires that you consent to
            entering into an electronic agreement with iGenius LLC (the
            "Company") before an online version of the Distributor Agreement is
            entered.{" "}
            <b style={{ color: "rgb(68, 178, 221)" }}>
              Please read the following information carefully.
            </b>
          </p>
          <p>
            Should you enter into an online Distributor Agreement ("the
            Agreement"), you will not be required to submit a paper application.
            The entire agreement between you and the Company will be evidenced
            by an electronic record. To enter into the Agreement, you must
            additionally electronically acknowledge that you agree to the
            Agreement Terms and Conditions, the Replicated Website and Privacy
            Policy, the Bonus Plan, and the Policies and Procedures.
          </p>
          <p>
            Should you enter into an online Distributor Agreement ("the
            Agreement"), you will not be required to submit a paper application.
            The entire agreement between you and the Company will be evidenced
            by an electronic record. To enter into the Agreement, you must
            additionally electronically acknowledge that you agree to the
            Agreement Terms and Conditions, the Replicated Website and Privacy
            Policy, the Bonus Plan, and the Policies and Procedures.
          </p>
          <p>
            <b style={{ color: "rgb(68, 178, 221)" }}>
              Your consent will apply to all transactions between you and the
              Company.
            </b>
          </p>
          <p>
            As a Distributor, you will be provided with a replicated website
            issued by the Company as defined in your Back Office. You may
            withdraw your consent to the use of electronic records at any time.
            However, should you do so, the Agreement will be automatically
            terminated. To withdraw your consent (and thereby terminate the
            Agreement), or update any personal information, you may do so by
            logging into your Back Office and notifying the Company of your
            election to withdraw this consent or to update your personal
            information. Alternatively, you may notify the Company by submitting
            a ticket through the Company’s member support site.
          </p>
          <p>
            By entering into the Agreement, you agree that the Company may amend
            the same (including the Agreement Terms and Conditions, the
            Replicated Website and Privacy Policy, the Bonus Plan, and the
            Policies and Procedures) at its sole discretion at any time. Prior
            versions are archived by the Company. Should you wish to obtain a
            copy of any archived version of the Agreement Terms and Conditions,
            the Replicated Website and Privacy Policy, the Bonus Plan, and the
            Policies and Procedures, submit a ticket via the internal support
            ticketing system. Your request must include your name, your
            Distributor number, your email address and phone number. Upon
            receipt of such a request, the Company will email you a copy of the
            version of the Agreement that you requested. Be certain to specify
            the date of the version that you wish to receive. The most current
            version of the Agreement Terms and Conditions, the Replicated
            Website and Privacy Policy, the Bonus Plan, and the Policies and
            Procedures are always available for viewing, printing and
            downloading through your backoffice, private member and public
            websites.
          </p>
          <p>
            <b style={{ color: "rgb(68, 178, 221)" }}>
              Please indicate your consent to the above by clicking on the
              "Agree" button below. By providing your consent, you also confirm
              that you are able to access all the terms of the Agreement
              electronically.
            </b>
          </p>
          <p>
            iGENIUS, LLC (THE "COMPANY") DISTRIBUTOR APPLICATION AND AGREEMENT
            IS A LEGAL AGREEMENT BETWEEN YOU AND THE COMPANY. THE COMPANY IS
            WILLING TO EXTEND TO YOU THE RIGHTS AND BENEFITS OUTLINED IN THE
            AGREEMENT ONLY UPON THE CONDITION THAT YOU ACCEPT ALL OF THE TERMS
            CONTAINED IN THIS AGREEMENT, INCLUDING THE AGREEMENT TERMS AND
            CONDITIONS, THE REPLICATED WEBSITE AND PRIVACY POLICY, THE BONUS
            PLAN, AND THE POLICIES AND PROCEDURES, AND THE BUSINESS ENTITY
            REGISTRATION FORM (THE BUSINESS ENTITY REGISTRATION FORM IS ONLY
            APPLICABLE TO THOSE WHO ENROLL USING A BUSINESS ENTITY SUCH AS A
            CORPORATION, LLC, PARTNERSHIP, ETC., RATHER THAN IN THEIR INDIVIDUAL
            CAPACITY). IN ORDER TO COMPLETE THE APPLICATION PROCESS, YOU MUST
            INDICATE THAT YOU HAVE READ AND AGREE TO ABIDE BY THE TERMS
            CONTAINED IN THESE DOCUMENTS INCLUDING THE COMPANY’S RETURN AND
            REFUND POLICY BY CLICKING I AGREE BELOW.
          </p>
          <p>
            The term of the Distributor Agreement is one year and may be renewed
            for successive one-year terms on each anniversary date of the
            Agreement. If the Agreement is not renewed on each anniversary date,
            it will be cancelled, and you will lose all rights as a Distributor
            for the Company. So that you do not inadvertently forget to renew
            and lose these benefits, the Company offers an{" "}
            <b style={{ color: "rgb(68, 178, 221)" }}>optional</b>
            automatic renewal program.
          </p>
          <p>
            This Application will not be "signed" in the sense of a traditional
            paper document. To "sign" this Application, please check the
            indicated “Agree” button.
          </p>
          <p>Effective Date</p>
          <p>
            The effective date of this Distributor Agreement is January 1st,
            2021
          </p>
        </div>
      </div>
    </>
  );
}

export default Distributoragreement;
