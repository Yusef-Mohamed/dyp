import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./polises.css";
import pdf from "../../assets/file-pdf.svg";
import link from "../../assets/link.svg";
function Purchaseterms() {
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
            Purchase Terms & Conditions - iGenius Global LTD
          </h2>
          <p>
            The following terms apply to the purchase of subscriptions offered
            by iGenius LLC (the “Company”) All subscriptions will auto-renew
            unless canceled prior to renewal date.
          </p>
          <p>
            There will be NO REFUNDS for subscription renewals that have not
            been canceled at least three (3) days prior to the renewal date.
          </p>
          <p>
            NO REFUNDS of initial purchases will be made, except when requested
            within ten (10) days of the initial purchase date.
          </p>
          <p>
            By selecting the "I have read and AGREE" option on the enrollment
            page you indicate your consent to the above terms. By providing your
            consent, you also confirm that you are aware of and able to access
            all the terms of this Agreement electronically.
          </p>
          <p>
            By using the purchased services, including any software and content
            contained therein, you agree that use of the Service is entirely at
            your own risk. It is understood that the products and services
            purchased are digital in nature and are only accessible via the
            back-office website provided to you upon successful enrollment.
          </p>
          <p>
            The Company is not a registered investment advisor or a broker
            dealer. You understand and acknowledge that there is a very high
            degree of risk involved in trading securities and currencies. Past
            results published on this Website are not indicative of future
            returns, and are not indicative of future returns which may be
            realized by you. The Company assumes no responsibility or liability
            for your trading and investment results. The indicators, strategies,
            columns, articles, webinars, chatrooms and all other features of our
            services (collectively, the "Information") are provided for
            informational and educational purposes only and should not be
            construed as investment advice. The experts and employees or
            affiliates of the Company may hold positions in the equities or
            currencies discussed here. You should not rely solely on the
            Information in making any investment. Rather, you should use the
            Information only as a starting point for doing additional
            independent research in order to allow you to form your own opinion
            regarding investments. Factual statements in this web site or any
            other communication are made as of the date stated and are subject
            to change without notice.
          </p>
          <p>
            By using the Information, research and education materials provided,
            you assume full responsibility for any and all positive and negative
            results suffered or incurred related, but not limited to: financial
            gains and losses, emotional and other types of distress, time, etc.
            The Company does not guarantee the accuracy, completeness or
            timeliness of, or otherwise endorse in any way, the views, opinions
            expressed in the Information, does not give investment advice, and
            does not advocate the purchase or sale of any security or investment
            by you or any other individual. The Information is not intended to
            provide tax, legal or investment advice, which you should obtain
            from your professional advisor prior to making any investment of the
            type discussed in the Information. The Information does not
            constitute a solicitation by the information providers, or of the
            purchase or sale of securities
          </p>
          <p>
            THE SERVICE IS PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND,
            EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION, ANY
            WARRANTY FOR INFORMATION, DATA, SERVICES, UNINTERRUPTED ACCESS, OR
            PRODUCTS PROVIDED THROUGH OR IN CONNECTION WITH THE SERVICE.
            SPECIFICALLY, THE COMPANY AND ITS AFFILIATES DISCLAIMS ANY AND ALL
            WARRANTIES, INCLUDING, BUT NOT LIMITED TO: (i) ANY WARRANTIES
            CONCERNING THE AVAILABILITY, ACCURACY, USEFULNESS, OR CONTENT OF
            INFORMATION, PRODUCTS OR SERVICES; AND (ii) ANY WARRANTIES OF TITLE,
            WARRANTY OF NON-INFRINGEMENT, WARRANTIES OF MERCHANTABILITY OR
            FITNESS FOR A PARTICULAR PURPOSE. THIS DISCLAIMER OF LIABILITY
            APPLIES TO ANY DAMAGES OR INJURY CAUSED BY ANY FAILURE OF
            PERFORMANCE, ERROR, OMISSION, INTERRUPTION, DELETION, DEFECT, DELAY
            IN OPERATION OR TRANSMISSION, COMPUTER VIRUS, COMMUNICATION LINE
            FAILURE, THEFT OR DESTRUCTION OR UNAUTHORIZED ACCESS TO, ALTERATION
            OF, OR USE OF RECORD, WHETHER FOR BREACH OF CONTRACT, TORT,
            NEGLIGENCE, OR UNDER ANY OTHER CAUSE OF ACTION.
          </p>
          <p>
            NEITHER THE COMPANY NOR ANY OF ITS EMPLOYEES, AGENTS, SUCCESSORS,
            ASSIGNS, AFFILIATES, OR CONTENT OR SERVICE PROVIDERS SHALL BE LIABLE
            TO YOU OR OTHER THIRD PARTY FOR ANY DIRECT, INDIRECT, INCIDENTAL,
            SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF USE OF SERVICE OR
            INABILITY TO GAIN ACCESS TO OR USE THE SERVICE OR OUT OF ANY BREACH
            OF ANY WARRANTY. BECAUSE SOME STATES DO NOT ALLOW THE EXCLUSION OR
            LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE
            ABOVE LIMITATION MAY NOT APPLY TO YOU. IN SUCH STATES, THE
            RESPECTIVE LIABILITY OF WG, ITS EMPLOYEES, AGENTS, SUCCESSORS,
            ASSIGNS, AFFILIATES, AND CONTENT OR SERVICE PROVIDERS RESPECTIVE
            LIABILITY IS LIMITED TO THE GREATEST EXTENT PERMITTED BY SUCH STATE
            LAW.
          </p>
          <p>
            The Company is the owner and/or authorized user of any trademark,
            registered trademark and/or service mark appearing on the Company’s
            websites and is the copyright owner or licensee of the content
            and/or information on the Website, unless otherwise indicated. The
            Company does not grant to you a license to any content, features or
            materials you may access on this Website. You may not download or
            save a copy of any of the content or screens except as otherwise
            provided in these Terms and Conditions, for any purpose. You may,
            however, print a copy of the information on this Website solely for
            your personal use or records. If you make other use of this Website,
            except as otherwise provided above, you may violate copyright and
            other laws of the United States, other countries, as well as
            applicable state laws and may be subject to liability for such
            unauthorized use. We do not grant any license or other authorization
            to any user of its trademarks, registered trademarks, service marks,
            other copyrightable material or any other intellectual property, by
            including them on this Website.
          </p>
          <p>Any dispute will be handled in the EU</p>
          <h2 className="heading2 " style={{ color: "rgb(68, 178, 221)" }}>
            Notice The Right To Cancel
          </h2>
          <p>
            You may CANCEL your INITIAL transaction, without any penalty or
            obligation,{" "}
            <span style={{ color: "rgb(68,178,221)" }}>within 10 DAYS</span>{" "}
            from the Order Date. Upon cancelling your initial purchase, any
            payments made by you under the initial contract or sale, and any
            negotiable instrument executed by you will be returned within
            FOURTEEN BUSINESS DAYS following receipt by the seller of your
            cancellation notice, and any security interest arising out of the
            transaction will be canceled. To cancel this transaction, please
            submit your cancellation request through the member support
            ticketing system or via email to support@iGeniusglobal.com NO LATER
            THAN MIDNIGHT of the tenth (10th) day following the date set forth
            above.
          </p>
          <p>
            We do not tolerate credit card fraud, and all fraud, without
            exception, will be prosecuted through criminal proceedings in your
            local jurisdiction to the fullest extent of the law. In addition, we
            will pursue civil legal action in your local jurisdiction seeking
            any loss of income related to the fraud, including business, legal
            fees, research costs, employee down time and loss of revenues.
          </p>
          <p>
            We do not tolerate credit card fraud, and all fraud, without
            exception, will be prosecuted through criminal proceedings in your
            local jurisdiction to the fullest extent of the law. In addition, we
            will pursue civil legal action in your local jurisdiction seeking
            any loss of income related to the fraud, including business, legal
            fees, research costs, employee down time and loss of revenues.
          </p>

          <p>
            We do not tolerate credit card fraud, and all fraud, without
            exception, will be prosecuted through criminal proceedings in your
            local jurisdiction to the fullest extent of the law. In addition, we
            will pursue civil legal action in your local jurisdiction seeking
            any loss of income related to the fraud, including business, legal
            fees, research costs, employee down time and loss of revenues.
          </p>
          <p>
            We do not tolerate credit card fraud, and all fraud, without
            exception, will be prosecuted through criminal proceedings in your
            local jurisdiction to the fullest extent of the law. In addition, we
            will pursue civil legal action in your local jurisdiction seeking
            any loss of income related to the fraud, including business, legal
            fees, research costs, employee down time and loss of revenues.
          </p>
          <p>
            When we detect questionable activity related to a subscription
            purchase that is being made, we will mark the purchase with a
            “customer review in progress” status and perform fraud detection
            procedures on the purchase to reduce our exposure to risk; during
            this time, you will not be able to access your Account.
          </p>
          <p>
            In general, we complete reviews within four (4) to six (6) hours;
            certain purchases posing a higher potential risk may require more
            time as our Compliance Department performs even more extensive fraud
            detection checks. We may also contact you directly as a backup
            precaution. If we determine that a purchase is high-risk or doesn't
            comply with our Compliance and risk Policies, the purchase will
            immediately be cancelled and the funds will immediately be refunded
            to the credit card from which the purchase was initially made.
            Furthermore, in such instances, we reserve the right, at our sole
            discretion, to close any and all of your Account(s) with us
            immediately. Any active Orders associated with the same fraudulent
            credit card and/or Account will also be cancelled immediately.
          </p>
          <p>
            In addition, we will attempt to recover fraudulently disputed
            charges plus additional costs via a third-party collection agency
            and your account will be reported to all credit bureaus as a
            delinquent collection account. In the event that a chargeback is
            placed or threatened on a purchase, we also reserve the right to
            report the incident for inclusion in chargeback abuser database(s)
            of our choosing and in our sole discretion. The information reported
            will include name, email address, order date, order amount, IP
            address, full address, and phone number. Being listed on such
            databases may make it more difficult for you to use (any of) your
            credit card(s) on future purchases with us or other merchants.
          </p>
          <p>
            <b>DISCLAIMER</b> iGENIUS LLC (THE "COMPANY"), PURCHASE TERMS AND
            CONDITIONS IS A LEGAL AGREEMENT BETWEEN YOU AND THE COMPANY. THE
            COMPANY IS WILLING TO EXTEND TO YOU THE RIGHTS AND BENEFITS OUTLINED
            IN THE AGREEMENT ONLY UPON THE CONDITION THAT YOU ACCEPT ALL OF THE
            TERMS CONTAINED IN THIS AGREEMENT, INCLUDING THE AGREEMENT TERMS AND
            CONDITIONS, THE BACKOFFICE WEBSITE AND PRIVACY POLICY, AND THE
            POLICIES AND PROCEDURES. IN ORDER TO COMPLETE THE ENROLLMENT
            PROCESS, YOU MUST INDICATE THAT YOU HAVE READ AND AGREE TO ABIDE BY
            THE TERMS CONTAINED IN THESE DOCUMENTS, INCLUDING THE COMPANY’S
            RETURN AND REFUND POLICY, BY SELECTING THE "I HAVE READ AND AGREE”
            OPTION.
          </p>
          <p>Effective Date</p>
          <p>The effective date of these Purchase Terms is January 1st, 2021</p>
        </div>
      </div>
    </>
  );
}

export default Purchaseterms;
