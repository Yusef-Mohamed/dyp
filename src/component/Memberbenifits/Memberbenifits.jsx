import React, { useEffect, useState } from "react";
import "./memberbenifits.css";
import check from "../../assets/checkmark.svg";
import x from "../../assets/x.svg";
function Memberbenifits() {
  const [data, setData] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`https://api.wealthmakers-fx.com/api/v1/education/packages`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
    fetch(`https://api.wealthmakers-fx.com/api/v1/education/courses`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.data);
        console.log(data);
      });
  }, []);
  return (
    <div className="memberbenifits">
      <div style={{ backgroundColor: "#ededed" }} className="p-5">
        <p className="container p-5 text-center">
          <b> iGenius helps people</b> solve their problems in new and brilliant
          ways.
        </p>
      </div>
      <div className="container py-5">
        <div className="text-center">
          <h1 className="heading">Benefits</h1>
          <p style={{ fontSize: "20px" }} className="my-5">
            iGenius has a membership for anyone interested in improving their
            relationship with money.
          </p>
        </div>
        <table>
          <thead>
            <tr>
              <td>الباقات</td>
              <td>السعر</td>
              <td>smc | ict</td>
              <td>تحليل اساسي + نقط + ذهب</td>
              <td>تحليل فني</td>
              <td>Sk</td>
              <td>اداره مخاطر</td>
              <td>توصيات</td>
              <td style={{ direction: "rtl" }}>
                50
                <span>ساعه مع خبير</span>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>الباقة الاولي </td>
              <td>$300 </td>
              <td>
                <img src={check} alt="check" />
              </td>
              <td>
                <img src={x} alt="x" />
              </td>
              <td>
                <img src={x} alt="x" />
              </td>
              <td>
                <img src={x} alt="x" />
              </td>
              <td>
                <img src={x} alt="x" />
              </td>
              <td>
                <img src={x} alt="x" />
              </td>
              <td>
                <img src={x} alt="x" />
              </td>
            </tr>
            <tr>
              <td>الباقة الثانية </td>
              <td>$300 </td>
              <td>
                <img src={x} alt="x" />
              </td>
              <td>
                <img src={x} alt="x" />
              </td>
              <td>
                <img src={x} alt="x" />
              </td>
              <td>
                <img src={check} alt="check" />
              </td>
              <td>
                <img src={x} alt="x" />
              </td>
              <td>
                <img src={x} alt="x" />
              </td>
              <td>
                <img src={x} alt="x" />
              </td>
            </tr>
            <tr>
              <td>الباقة الثالثة </td>
              <td style={{ direction: "rtl" }}>
                $100 شهريا
                <br />/ $700 سنويا
              </td>
              <td>
                <img src={check} alt="check" />
              </td>
              <td>
                <img src={check} alt="check" />
              </td>
              <td>
                <img src={check} alt="check" />
              </td>
              <td>
                <img src={check} alt="check" />
              </td>
              <td>
                <img src={check} alt="check" />
              </td>
              <td>
                <img src={check} alt="check" />
              </td>
              <td>
                <img src={x} alt="x" />
              </td>
            </tr>
            <tr>
              <td>الباقة الرابعة </td>
              <td>$200 </td>
              <td>
                <img src={x} alt="x" />
              </td>
              <td>
                <img src={x} alt="x" />
              </td>
              <td>
                <img src={check} alt="check" />
              </td>
              <td>
                <img src={x} alt="x" />
              </td>
              <td>
                <img src={x} alt="x" />
              </td>
              <td>
                <img src={x} alt="x" />
              </td>
              <td>
                <img src={x} alt="x" />
              </td>
            </tr>
            <tr>
              <td>الباقة الخامسة </td>
              <td>$150 </td>
              <td>
                <img src={x} alt="x" />
              </td>
              <td>
                <img src={check} alt="check" />
              </td>
              <td>
                <img src={x} alt="x" />
              </td>
              <td>
                <img src={x} alt="x" />
              </td>
              <td>
                <img src={check} alt="check" />
              </td>
              <td>
                <img src={check} alt="check" />
                <br />
                <span>لمدة شهر فقط</span>
              </td>
              <td>
                <img src={x} alt="x" />
              </td>
            </tr>
            <tr>
              <td>الباقة السادسة </td>
              <td>$50 </td>
              <td>
                <img src={x} alt="x" />
              </td>
              <td>
                <img src={check} alt="check" />
              </td>
              <td>
                <img src={x} alt="x" />
              </td>
              <td>
                <img src={x} alt="x" />
              </td>
              <td>
                <img src={check} alt="check" />
              </td>
              <td>
                <img src={check} alt="check" />
              </td>
              <td>
                <img src={x} alt="x" />
              </td>
            </tr>
            <tr>
              <td>الباقة السابعة </td>
              <td>$3000 لمرة واحدة</td>
              <td>
                <img src={check} alt="check" />
              </td>
              <td>
                <img src={check} alt="check" />
              </td>
              <td>
                <img src={check} alt="check" />
              </td>
              <td>
                <img src={check} alt="check" />
              </td>
              <td>
                <img src={check} alt="check" />
              </td>
              <td>
                <img src={check} alt="check" />
              </td>
              <td>
                <img src={check} alt="check" />
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <td>Title</td>
              <td>Description</td>
              <td>Courses</td>
              <td>Expiration Time</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {data?.map((packagee) => (
              <tr>
                <td>{packagee.title}</td>
                <td>{packagee.description}</td>
                <td>
                  {/* {packagee.courses.map((e) =>
                    courses.map((c) => (c._id == e ? `${c.title} &` : ""))
                  )} */}
                  {packagee.courses.join("&")}
                </td>
                <td>{packagee.expirationTime}</td>

                <td>{packagee.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Memberbenifits;
