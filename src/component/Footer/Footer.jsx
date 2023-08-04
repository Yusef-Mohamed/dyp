import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      style={{
        background:
          "linear-gradient(rgb(255, 255, 255) 0%, rgba(79, 80, 82, 0.25) 10%, rgba(79, 80, 82, 0.5) 25%, rgb(79, 80, 82) 100%)",
        position: "relative",
        zIndex: "3",
      }}
      className="text-white fw-bolder py-4"
    >
      <div className="content-container">
        <div className="row py-5">
          <div
            className="col-lg-5  text-center"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: "40px",
            }}
          >
            <img
              className="w-50 "
              src="data:image/png;base64,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"
              alt=""
            />
            <div className="flex">
              <a href="https://www.facebook.com" className="p-3">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAfCAMAAADDR10IAAAAOVBMVEUAAABEs9xFstxGsd1Fst1Ir99Ar99Est1Fr99Gst5Est1Fs95Fsd1Es91Gs9xFst1Fst1FstxFst0mIgS5AAAAEnRSTlMAQMCA8CAQcDCwr6CQf1Df0GAvjsd9AAAAmUlEQVQoz+WQSRLDIAwEJRmMF8DJ/P+xEZADS+HKITf3aYoG1SBqWMNxQTFMA2zwZRmcAyRaDcsoGXAljXK99GgmI16kbC4EGWS57pFxndwRdTbgF8V2UsCplFDmL9KLiCnSiHJslUTGpkJjW4CZc0PLikH7kiosDE3lGzv1Y9e8YQ0HHN0U2mp5tl85b5fwYJmYyLPInX7kA/glCht1BWfMAAAAAElFTkSuQmCC"
                  alt=""
                  style={{ height: "25px" }}
                />
              </a>
              <a href="https://www.facebook.com" className="p-3">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAMAAABBJv+bAAAAQlBMVEUAAABFstxAr99Fst1FstxFr99Es9xFst5Fsd1Fst1Fsd1Fs95Fs9xFst1Fst1Ir99Est1Fst1Fsd1Fst1Fsd1Fst00Bd7QAAAAFXRSTlMAwBCAYDBAsJDg8KBQ39AgcO/Pn29Lm6iIAAAA80lEQVQoz52R2ZKDIBBFbQEBF9xy/v9XJxhZJqGmatIP9pVT3pbb3RfV/8FWu4OopxoWeT6NmIo6GCWA1QIRTyzFbcLraC8AROnhSHwg3NJNmjF6YyeO298y5/9bLq1RvYXH9ZWQxyjc1eIEPcI5Dx2+wkNpqxsBkCaONatJRGVsX+cbWzMe4b7L1MSBV+do5k5ILnMDa1xKammONlmdn3sjJGnGT+7Yuorb9W2y77vCPbuq33fMmxm2XOpA19Cc4PPJvJektJOFGvYOSvJjZDbDVS34NDdtUpQe+s4MDwu4/ne6OpDLbxmWMteurdpM96/6AZLcDOKJ0pHLAAAAAElFTkSuQmCC"
                  alt=""
                  style={{ height: "25px" }}
                />
              </a>
              <a href="https://www.facebook.com" className="p-3">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAA7dJREFUWEe1V11y2jAQ1sq0r80NCiF9bnqCmJnA9CUQThBygtITlJ4g5AQlJ+AnLx3ITNwTJH1uCOYEJc/Y3q5kC2RHNpikniFMpLX222+/XS3ADM/n/qzoFYIzQLTDbYi+Tdapay5jSB9w6Rxn3Di4MlmCvigc+5b/Y0eHm9AtGLLOpFG+1A1XAKr92SGzglva3Es5aR5GtM0DRxlWvUm9fK72JYAw8uBu5RzZE210MeCDSbN0v41Lk43dn+29Lfg2ImsTq2tQyC6JCVqjVfGnOnqgyFd5/r30ue00S4tdHZveIx8t8kHpDR+EoHJz8sGBKPpZuMqelgEvvpbz2vDhLOBQ9Dx+Kc6sDacdBPZN+gK4mpzstyC2qFHz0uiPR9M20XsRBXZPlH8SKXnDA5d4fyfWSQsARI2j8qNo2cZ5dTRb5dTy2fxns+Tq79VGjwNk2FBrwlmU7pi/GABllAYgSpeg8JQ+8WpBdg8Mu6rej6//2EAiltFqzOqMi4AJwBSTKDNEJChNK1MlL2fpW02Rc0k5Y0W9knQAgOz7GgAJkPJkPDypYCFWAHAYoixREpZg5OMKOLFBYq6YxKyfFQfA8NekfmAno3/WI0i9Sw/aycNjlIcVtap1/Uxph1w0PLYVgOr1Y48iPdNLJ00jspvywFEqt3xeSoozP4DR9K/M+5Y9IiYyxr7e1MvdnRmIoWUwHNf3Ra4zn1hjM6Q1FwNJ43Gj3NkEIKx1VVnPdbUzgDRRmUv2lQAk7gnZTjcxULt+OEWEfppoczEQ0SlqXdb4Nq1av1kBsDk+ORjsLMIQQOwaXTCfV9JmBMq9uG5bkcM5tfZikrHcDEQgHG2gWFDn64LHhwKIaLcFyzsCBmLosJVDU/RiLwNAeD2acix7ukUNRm+3mWLAc+qqPZOJ6S5wyfC9MM66DaO7vENd7kuG7znppCUmnTSb2PzB8Dx2HZtaZ/IgObJbwSldveumBNwFFgySgjOB0Ft7eB3rvZ4QpVGXyXiOzepwekcsHopXRMCCAVKtGhbRIQCVHOflMtUFSC/KKgnHpOF0oW4wqvb/wkKkoVsVPU1B8qKSAGIDJP1PZdZRk2yuEFOMo1nhQjkX0dPofyhmivUvo5gW5EkLQinudjn18ABdBEtUzMaHxGXLd5Dt0Y8SW3MsR38WcFs1s1jdUyq6G8pso/MNBnPqpKd6J33WeORUU8A2C6jMovn9pV4F5cRm1/N5LznKGTufcihyF9LP5XeeB0GkDN2CV3CTY5l+zj/m2H3itGIcfgAAAABJRU5ErkJggg=="
                  alt=""
                  style={{ height: "25px" }}
                />
              </a>
              <a href="https://www.facebook.com" className="p-3">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAbCAMAAAAj8t3SAAAAOVBMVEUAAABFstxEs9xFst1Ir99Fs95Fst1Fr99Ar99FstxGst5Est1Gs9xFst1Fsd1Gst1Fst1Fsd1Fst0FGmtkAAAAEnRSTlMAwECAIKDwMBBgsHBQ4JCP0M8YFEifAAAA4ElEQVQoz4WSSXbEIAxEhRCzh07d/7BB9AsJtlv5Oxd/IUtFijTvOlj46knwid7kEwZBhhNhEtU6VPfMnGhBetSCPhIJgI0+kgAIFaCSQQUKecDPJHOmlfd7UPOHgNhopehQDuCZ6Kp2XiQG3F3qYbpKPaRFUsLvaCrcpO1QK3pTYhKnmrcl8nqoakrbPobPljSUndfBX0C6/F0s/+/J59sy658S6EeV21nqemBp/Hjgpgc0GAVIo6AfES3dGDaenB5ryWcEwnAn0U0iJqI+OxjM3pTDvR4Fd2x0JfNkWeg3RYMYPUj/Te0AAAAASUVORK5CYII="
                  alt=""
                  style={{ height: "25px" }}
                />
              </a>
              <a href="https://www.facebook.com" className="p-3">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAiCAMAAAB/VplGAAAAPFBMVEUAAABFstxFst1Es9tFst1Fs9xAr99Fst1Fst5Fr99FstxFs95Est1Fsd1Ir99Fst1Fst1Fst9Fst1Fst1ey84bAAAAE3RSTlMAwIBA8FAQ4LAwYKBwzyCQ0D+fc0HnZgAAAWNJREFUOMt1kdu2wyAIRMULXqJJ0/n/fz2CWrPWaechGjYCo2aLK/lYzA/lBtXF3+jpMZW+4YSP3uEfDXjq/eOwX/y+n5Sx9KpuZj5wnVOV05iOK5GHW0evKNmpiCXBQg6UbSkeY9qNLewqTHnezH0PrFZIY6tMaDqQndihDUxSi5NMTRHJFMUGGNjjFN9eajSE3hUrvNIC/GmJepJZmIazjCiHq4XoEKw3cqEOHyRFM+FyhXLHEpDlUl+yAFzh1Z/idWz6JwRzTJ5An6ZKpETkxWlgsyeUbxPeHjgiaxKbkPklyIMFH/u6tEbyhaO2LxK2Zg41BwQQBRPcxhXHwAFRHtVwFAzFSkaJA8S5z/HuKRufcntX/8kePlnbgLKxbNZzEkRe45KkenXU0N725tNZG9YLuoETQk9RRVqUJ85lWHDlIgzRVW4HhGDJj+edOmdkK6aqVbbY2aTNeic2P+TC3v8B6Vgal//hgFsAAAAASUVORK5CYII="
                  alt=""
                  style={{ height: "25px" }}
                />
              </a>
            </div>
          </div>
          <div className="col-lg-7 row py-3">
            <div className="col-4">
              <h4>
                <Link to={"/polises"} className="hoverGold">
                  Polises
                </Link>
              </h4>
            </div>
            <div className="col-4">
              <h4>
                <Link to={"/aboutus"} className="hoverGold">
                  About Us
                </Link>
              </h4>
            </div>
            <div className="col-4">
              <h4>
                <Link to={"/contact"} className="hoverGold">
                  Contact Us
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>Copyright © 2023 iGenius. All rights reserved.</span>
          <img
            src="data:image/png;base64,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"
            alt="PaymentMethods"
            style={{ height: "30px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
