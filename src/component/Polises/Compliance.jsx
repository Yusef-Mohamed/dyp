import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./polises.css";
import pdf from "../../assets/file-pdf.svg";
import link from "../../assets/link.svg";
function Compliance() {
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
            Products & Services Regulatory Compliance
          </h2>
          <p>
            Investview Inc. and its wholly owned subsidiary iGenius LLC (the
            “Company”), is classified as a publisher of financial news and
            information and therefore exempt from registration with the SEC.
            This is an exemption provided in the U.S. Securities Investment
            Advisers Act of 1940. We provide financial research and information
            to the public, but it is completely at the discretion of the
            individual as to whether they will use the information or not.
          </p>
          <p className="p-border">
            "a publisher of any bona fide newspaper, news column, newsletter,
            news magazine, or business or financial publication or service,
            whether communicated in hard copy form, or by electronic means, or
            otherwise, that does not consist of the rendering of advice on the
            basis of the specific investment situation of each client."
          </p>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>NOT PROVIDING ADVICE</h3>
          <p>
            The Company delivers trade strategy signals, alerts, research,
            analysis and convenience tools that are sent to subscribing members
            via email, mobile app, telegram, website membership and any and all
            other electronic means. There is no customization, review or
            consultation of the member’s personal financial objectives,
            situation or need. The member is free to act or not to act on the
            information provided. All information is provided uniformly to the
            member base without modification or consideration of any{" "}
            <b>personal</b>
            situation or need.
          </p>
          <h4 style={{ color: "rgb(68, 178, 221)" }}>
            Qualifying As A Publisher
          </h4>
          <p>
            United States regulatory as defined by the Securities Exchange
            Commission and executed by FINRA uses the following criteria to
            determine eligibility for the exemption:
          </p>
          <p className="p-border">
            4. Publishers. Publishers are excluded from the Act, but only if a
            publication: (i) provides only impersonal advice (i.e., advice not
            tailored to the individual needs of a specific client); (ii) is
            “bona fide,” (containing disinterested commentary and analysis
            rather than promotional material disseminated by someone touting
            particular securities); and (iii) is of general and regular
            circulation (rather than issued from time to time in response to
            episodic market activity).
          </p>
          <h4>Reference Source</h4>
          <ul>
            <li>
              <a href="https://www.sec.gov/">https://www.sec.gov/</a>
            </li>
            <li>
              <a href="http://www.sec.gov/about/offices/oia/oia_investman/rplaze-042012.pdf">
                http://www.sec.gov/about/offices/oia/oia_investman/rplaze-042012.pdf
              </a>
            </li>
            <li>
              <a href="http://www.sec.gov/investor/pubs/cyberfraud/newsletter.htm">
                http://www.sec.gov/investor/pubs/cyberfraud/newsletter.htm
              </a>
            </li>
          </ul>
          <h4 style={{ color: "rgb(68, 178, 221)" }}>
            Qualifying As A Publisher
          </h4>
          <p>
            We provide research, commentary and trade signals for world
            financial markets which may include but are not limited to: US
            equities, options, ETF (exchange traded funds), currencies including
            cryptocurrency and crowd funding.
          </p>
          <p>
            To further clarify our position as a Publisher, please note the
            following:
          </p>
          <ul>
            <li>
              The Company does not take possession of any person’s investment
              capital
            </li>
            <li>
              The Company does not get paid by a financial institution for the
              research information provided
            </li>
            <li>
              The Company does not get paid by a financial institution for the
              research information provided
            </li>
            <li>
              The user of our products and services does so at their own
              discretion, they are free to act or not act on the information
              provided
            </li>
            <li>
              Users of our product may select any brokerage firm if they choose
              to act on the information provided. The only exception to this
              would be convenience “swipe” tools that may not be enabled by all
              brokerage firms.
            </li>
            <li>
              The Company does not know the individual financial situation,
              objectives or needs of the persons who use their services
            </li>
            <li>
              The Company does not modify the research information delivered to
              persons using their services, all information is delivered
              uniformly to subscribed members
            </li>
          </ul>
          <h2 style={{ color: "rgb(68, 178, 221)" }}>Transparency</h2>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>
            Performance Of Services
          </h3>
          <p>
            Due to the variety of factors that affect trade performance, the
            company does not post trade performance and trade results. From time
            to time, we will review specific trade performance as entered in a
            live account showing entry/exit and associated profit or loss.
          </p>
          <p>
            We have the following policies in place regarding the discussion of
            trade performance of our research and alerts:
          </p>
          <ul>
            <li>
              We monitor our research performance internally in live accounts as
              a general practice. There are times we provide research that has
              not been executed in one of our live accounts due to market
              timing.
            </li>
            <li>
              If we publish performance statistics for a particular period, we
              issue this information uniformly to our member base through the
              private member portal. It is not for public posting.
            </li>
            <li>
              Our members are prohibited from posting claims, performance
              statistics or any reference to profit that has not been
              specifically issued by the Company.
            </li>
            <li>
              We discourage members from sharing their personal trade histories
              however we maintain no jurisdiction in this regard and ultimately
              a user of our services may share their personal experience with
              whomever they want.
            </li>
            <li>
              If we publish performance internally for our trade research, we
              always include our basic disclaimers:
            </li>
            <li>Past performance is not indicative of future results</li>
            <li>Individuals trade results will vary</li>
            <li>Commissions are not reflected in trade performance</li>
            <li>
              Trading involves risk including the risk of losing part, all or
              more of the initial monies invested
            </li>
            <li>Trade results will vary from account to account</li>
            <li>
              Both gains and losses will be experienced by users of the services
              and each member must define and act within their personal risk
              tolerance
            </li>
          </ul>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>Disclaimers</h3>
          <p>
            The Company works to ensure that members fully understand both
            performance and use disclaimers. We have a commitment to a “plain
            language” representation of our disclaimers where all training
            sessions, recordings, newsletter alerts, emails, website posts, and
            subscriptions include our detailed disclosure of risk and the use of
            our products solely at the member’s discretion.
          </p>
          <p>An example of a disclaimer from our presentations:</p>
          <p>
            Persons who choose to purchase a subscription and subscribe to our
            information research and trade services also accepts additional
            disclaimers and risk disclosure at the time of purchase.
          </p>
          <h2 style={{ color: "rgb(68, 178, 221)" }}>
            Automated Trade Technology
          </h2>
          <p>
            The Company does not offer automated trade technology. In the past,
            we offered automated trading as a convenience for FOREX users. The
            Commodities and Futures Trade Commission reviewed our automated
            technology and determined that it required a Commodity Trading
            Advisor. Since we are committed to providing education and not
            advice, we entered a settlement on the finding from the CFTC and
            discontinued the use of automated trade services.
          </p>
          <p className="p-border">
            We know automated tools are still available in the marketplace as
            described below, but we ALSO know promotion or use of this
            automation requires registration and licensing. We do not provide
            these services and we caution our customers about these types of
            automated tools.
          </p>
          <p>
            Example of Automated Trading: A company or an individual trader
            issues a trade signal. A person pays the company/trader for their
            signals. The individual then attaches their MT4 enabled forex
            account to the provider of the trade signal.
          </p>
          <p>
            Even though the customer attaches their account themselves, and the
            provider of the signal does not review, monitor or manage the client
            account, the signal itself is deemed as advice
          </p>
          <p>
            Therefore, if the signal is deemed investment advice, then the tool
            requires a Registered Investment or Commodity Trading Advisory.
          </p>
          <p className="text-danger ">
            <b>The Company does not provide automated trading or tools.</b>
          </p>
          <p>
            If a Company customer lacks time to trade for themselves, they may
            contact SAFE Management LLC, a Registered Investment Advisory and
            Commodity Trading Advisor. SAFE Management is also owned by
            Investview Inc. the parent company of iGenius LLC. SAFE Management
            provides access to “managed” trade services, where SAFE enters,
            monitors, and exits trades for its advisory clients.
            safeadvglobal.com
          </p>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>Understanding Risk</h3>
          <p>
            It is extremely important that the user of our education and
            research information fully understand the risks. Whether it is a
            newsletter, alert or live trading room, the customer must fully
            comprehend and embrace the fact that they assume the full financial
            risk of actions they take. If they are unsure, unclear, have
            questions or concerns, they should seek answers and practice trade
            until they are extremely comfortable trading live.
          </p>
          <h2 style={{ color: "rgb(68, 178, 221)" }}>Brokers Of Choice</h2>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>
            The Company Is Not A Broker
          </h3>
          <p>
            As stated throughout this document, the Company is not a broker,
            dealer, advisor, fiduciary or registered/licensed financial entity.
          </p>
          <p>
            <b>
              We are a publisher of financial information, education and
              research.
            </b>
          </p>
          <p>
            Our members are free to use the information we provide to place
            trades for themselves with whichever broker they choose.
          </p>
          <p>
            We do, however, review various brokers and provide “brokers of
            choice” which are firms that are compliant, under regulatory
            control, and offer services beneficial to members such as enhanced
            customer service and additional training to name a few.
          </p>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>Brokers Of Choice</h3>
          <p>
            Brokers of Choice are not affiliated with the Company, we do not
            have an agreement, partnership, arrangement or any type of legal
            association with any of these firms. A “broker of choice” is simply
            listed to provide our members services and customized programming
            that may not be available through all brokers.
          </p>
          <p>
            We also provide our members a list of considerations they should
            review before they select a brokerage firm which includes but is not
            limited to:
          </p>
          <ul>
            <li>Fees</li>
            <li>Registration</li>
            <li>Regulatory</li>
            <li>Customer Support (800#, chat, 24-hour service, etc)</li>
            <li>Deposit and Withdrawl terms</li>
            <li>Customer Feedback & Industry</li>
          </ul>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>
            Third Party Providers of Services
          </h3>
          <p>
            The Company makes services available from third party providers.
            When a service is made available, the Company ensures the customer
            understands they are entering an agreement with a separate and
            distinct company that will provide them the service they desire. We
            require our customers to sign and accept an understanding that they
            are accessing a service from a third party. In spite of these
            actions, when a third party defaults or fails to provide their
            service, the customer seeks to hold the Company responsible. The
            Company is not responsible for third party service providers. We
            make them available because there is a customer demand, we do our
            best to perform proper due diligence and explain all associated
            risks. Further, we ensure our customers accept these risks before
            moving forward.
          </p>
          <p>
            It is important for users of services provided by third parties to
            understand that they become a customer of the third party and that
            the Company does not have any part to that relationship.
          </p>
          <p>
            <b>
              If a customer is uncomfortable with assuming this responsibility,
              they should not use the third-party service.
            </b>
          </p>
          <h2 style={{ color: "rgb(68, 178, 221)" }}>Cryptocurrency</h2>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>Guidlines & Regulation</h3>
          <p>
            The Company now provides members access to virtual currency or
            “crypto” education webinars, research and alerts. Guidance regarding
            the cryptocurrency / virtual currency environment is not yet fully
            determined. The market is emerging, and regulatory guidance is in
            the process of being developed, changed, and further refined.
          </p>
          <p>
            The Company is committed to understanding the rapidly changing
            regulatory environment and desires to ensure all services are within
            regulatory guidelines. The Company will change, modify or eliminate
            a service if it is deemed to be outside regulatory guidance.
          </p>
          <p>
            The following risks should be considered before purchasing, trading
            or holding virtual currencies:
          </p>
          <p>
            <span style={{ color: "rgb(68, 178, 221)" }}>
              Unique Features of Virtual Currencies.
            </span>
            Virtual currencies are not legal tender in the United States and
            many people question whether they have intrinsic value. The price of
            many virtual currencies is based on the agreement of the parties to
            a transaction. The risks associated with the unique features of
            virtual currencies should be explained and understood.
          </p>
          <p>
            <span style={{ color: "rgb(68, 178, 221)" }}>
              Price Volatility.
            </span>
            The price of a virtual currency is based on the perceived value of
            the virtual currency and subject to changes in sentiment, which make
            these products highly volatile. Certain virtual currencies have
            experienced daily price volatility of more than 20%. The risks
            associated with the extreme price volatility of virtual currencies
            and the possibility of rapid and substantial price movements, which
            could result in significant losses, should be explained.
          </p>
          <p>
            <span style={{ color: "rgb(68, 178, 221)" }}>
              Valuation and Liquidity.
            </span>
            Virtual currencies can be traded through privately negotiated
            transactions and through numerous virtual currency exchanges and
            intermediaries around the world. The lack of a centralized pricing
            source poses a variety of valuation challenges. In addition, the
            dispersed liquidity may pose challenges for market participants
            trying to exit a position, particularly during periods of stress.
            NFA generally expects the policies and procedures for valuing
            virtual currency products implemented by CPOs and CTAs to take into
            account their access to liquidity and the volatility of these
            markets. The valuation and liquidity risks and the procedures used
            for valuing virtual currencies and the related risks should be
            explained.
          </p>
          <p>
            <span style={{ color: "rgb(68, 178, 221)" }}>Cybersecurity.</span>
            The cybersecurity risks of virtual currencies and related “wallets”
            or spot exchanges include hacking vulnerabilities and a risk that
            publicly distributed ledgers may not be immutable. A cybersecurity
            event could result in a substantial, immediate and irreversible loss
            for market participants that trade virtual currencies. Even a minor
            cybersecurity event in a virtual currency is likely to result in
            downward price pressure on that product and potentially other
            virtual currencies. The cybersecurity risks associated with engaging
            in virtual currency transactions should be explained.
          </p>
          <p>
            <span style={{ color: "rgb(68, 178, 221)" }}>
              Opaque Spot Market.
            </span>
            Virtual currency balances are generally maintained as an address on
            the blockchain and are accessed through private keys, which may be
            held by a market participant or a custodian. Although virtual
            currency transactions are typically publicly available on a
            blockchain or distributed ledger, the public address does not
            identify the controller, owner or holder of the private key. Unlike
            bank and brokerage accounts, virtual currency exchanges and
            custodians that hold virtual currencies do not always identify the
            owner. The opaque underlying or spot market poses asset verification
            challenges for market participants, regulators and auditors and
            gives rise to an increased risk of manipulation and fraud, including
            the potential for Ponzi schemes, bucket shops and pump and dump
            schemes. The risks associated with the opaque nature of the
            underlying or spot virtual currency market should be explained.
          </p>
          <p>
            <span style={{ color: "rgb(68, 178, 221)" }}>
              Virtual Currency Exchanges, Intermediaries and Custodians.
            </span>
            Virtual currency exchanges, as well as other intermediaries,
            custodians and vendors used to facilitate virtual currency
            transactions, are relatively new and largely unregulated in both the
            United States and many foreign jurisdictions. Virtual currency
            exchanges generally purchase virtual currencies for their own
            account on the public ledger and allocate positions to customers
            through internal bookkeeping entries while maintaining exclusive
            control of the private keys. Under this structure, virtual currency
            exchanges collect large amounts of customer funds for the purpose of
            buying and holding virtual currencies on behalf of their customers.
            The opaque underlying spot market and lack of regulatory oversight
            creates a risk that a virtual currency exchange may not hold
            sufficient virtual currencies and funds to satisfy its obligations
            and that such deficiency may not be easily identified or discovered.
            In addition, many virtual currency exchanges have experienced
            significant outages, downtime and transaction processing delays and
            may have a higher level of operational risk than regulated futures
            or securities exchanges. If virtual currencies are traded or held
            through an exchange, intermediary or custodian, then the risks
            associated with engaging in these transactions should be explained.
          </p>
          <p>
            <span style={{ color: "rgb(68, 178, 221)" }}>
              Regulatory LandscapeVirtual
            </span>
            currencies currently face an uncertain regulatory landscape in the
            United States and many foreign jurisdictions. In the United States,
            virtual currencies are not subject to federal regulatory oversight
            but may be regulated by one or more state regulatory bodies. In
            addition, many virtual currency derivatives are regulated by the
            CFTC, and the SEC has cautioned that many initial coin offerings are
            likely to fall within the definition of a security and subject to
            U.S. securities laws. One or more jurisdictions may, in the future,
            adopt laws, regulations or directives that affect virtual currency
            networks and their users. Such laws, regulations or directives may
            impact the price of virtual currencies and their acceptance by
            users, merchants and service providers. The risks associated with
            the current regulatory landscape for virtual currencies should be
            explained.
          </p>
          <p>
            <span style={{ color: "rgb(68, 178, 221)" }}>Technology.</span>
            The relatively new and rapidly evolving technology underlying
            virtual currencies introduces unique risks. For example, a unique
            private key is required to access, use or transfer a virtual
            currency on a blockchain or distributed ledger. The loss, theft or
            destruction of a private key may result in an irreversible loss. The
            ability to participate in forks could also have implications for
            investors. For example, a market participant holding a virtual
            currency position through a virtual currency exchange may be
            adversely impacted if the exchange does not allow its customers to
            participate in a fork that creates a new product. The risks posed by
            this nascent technology should be explained.
          </p>
          <p>
            <span style={{ color: "rgb(68, 178, 221)" }}>
              {" "}
              Transaction Fees.
            </span>
            Many virtual currencies allow market participants to offer miners
            (i.e., parties that process transactions and record them on a
            blockchain or distributed ledger) a fee. While not mandatory, a fee
            is generally necessary to ensure that a transaction is promptly
            recorded on a blockchain or distributed ledger. The amounts of these
            fees are subject to market forces and it is possible that the fees
            could increase substantially during a period of stress. In addition,
            virtual currency exchanges, wallet providers and other custodians
            may charge high fees relative to custodians in many other financial
            markets. The impact of these transaction fees on performance should
            be explained.
          </p>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>Distributors</h3>
          <p>
            The Company offers an optional bonus plan to members who would like
            to actively sell our services to others. Compliance and governance
            over the actions of the Independent Distributor is critical to our
            operations, reputation and overall customer satisfaction.
          </p>
          <p>
            Our Distributors are governed by an extensive policy & procedures
            manual:
          </p>
          <a href="http://igeniusglobal.io/documents/policies/PoliciesAndProcedures.pdf">
            iGenius Policies & Procedures
          </a>
          <p>
            Violations of policy are taken very seriously and could result in
            the termination of a Distributor Agreement.
          </p>
          <p>
            With today’s instantaneous access to information, the ability for us
            to police and scrutinize each post, tweet, video or comment
            regarding our services is challenging. We are continually deploying
            additional technologies to assist in automating web searches for
            compliance infractions.
          </p>
          <p>
            In many cases, we find that individuals and users of our services
            only have a common understanding of terms and not the impact and
            meaning certain words have in the regulatory environment. Use of the
            words, “advice, automatic, opportunity, etc.” seem harmless to those
            who are speaking in plain terms. Therefore, we have a commitment to
            compliance education of our Distributors to ensure their awareness
            and implications of using such words when discussing our products
            and services. We are continually adding additional courses,
            personnel and expanding our discussions of the regulatory
            environment.
          </p>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>Summary</h3>
          <p>
            The subject of compliance is extensive and rapidly changing. At
            times, even professional legal resources are in conflict as to the
            interpretation of newly implemented regulations. Despite these
            complexities, the Company is committed to conformance to all
            regulatory guidance and full transparency of our product performance
            and operations.
          </p>
          <p>
            In addition to the a forementioned procedures, we strive to maintain
            an A rating with the Better Business Bureau and other third-party
            reporting agencies such as Dun & Bradstreet.
          </p>
          <p>
            In addition to the a forementioned procedures, we strive to maintain
            an A rating with the Better Business Bureau and other third-party
            reporting agencies such as Dun & Bradstreet.
          </p>
          <a href="mailto:compliance@iGeniusglobal.com">
            compliance@iGeniusglobal.com
          </a>
          <p>
            iGenius
            <br />
            459 North 300 West Suite 15B
            <br />
            Kaysville, UT
            <br />
            84037
          </p>
          <h3 style={{ color: "rgb(68, 178, 221)" }}>Effective Date</h3>
          <p>
            The effective date of this Products and Services Regulatory
            Compliance is January 1st, 2021.
          </p>
        </div>
      </div>
    </>
  );
}
export default Compliance;
