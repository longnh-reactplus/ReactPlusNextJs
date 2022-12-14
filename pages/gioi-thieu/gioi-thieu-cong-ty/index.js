import Footer from "../../../src/components/footer";
import Head from "next/head";
import Menu from "../../../src/components/menu";
import { IMAGE_META, ListItem } from "../../../src/config/index";
import { get_members, URL } from "../../../src/services/api";

const GioiThieu = ({ data }) => {
  return (
    <>
      <Head>
        <title>Giới thiệu công ty React Plus</title>
        <link rel="icon" href="/assets/icon/icon_tab.png" />
        <meta
          property="og:image"
          content={IMAGE_META}
        />
      </Head>
      <Menu />
      <div className="main">
        <div className="container backgroudReact">
          <div className="box_introduce">
            <div className="introduce__left">
              <img
                src="/assets/icon/Group2101.png"
                className="img-icon-header"
                alt=""
              />
              <h1>
                React Plus <br />
                Công ty chuyên về React lớn nhất tại Việt nam
              </h1>
              <p>
                Thành lập năm 2018, React Plus là công ty đầu tiên tại Việt Nam
                xây dựng đội ngũ chuyên gia tập trung duy nhất vào ReactJs &
                React Native. Phát triển theo chiều sâu và hướng tới thị trường
                quốc tế là định hướng của chúng tôi. Đến nay, React plus đã đạt
                được một số thành tựu: <br />
              </p>
            </div>
            <div className="introduce__right">
              <img src="/assets/images/Sticker-ReactPlus.svg" alt="" />
            </div>
          </div>
          <div className="box__company__scale">
            <div className="company__scale__item">
              <div className="item__img">
                <img
                  height="40px"
                  width="40px"
                  src="/assets/icon/quymo.svg"
                  alt=""
                />
              </div>
              <p className="content">
                Quy mô 200 nhân sự. <br />
              </p>
            </div>
            <div className="company__scale__item">
              <div className="item__img">
                <img
                  height="40px"
                  width="40px"
                  src="/assets/icon/Japan.svg"
                  alt=""
                />
              </div>
              <p className="content">
                Nhiều khách hàng lớn tại Nhật Bản, Mỹ và Úc.
                <br />
              </p>
            </div>
            <div className="company__scale__item">
              <div className="item__img">
                <img
                  height="40px"
                  width="40px"
                  src="/assets/icon/edit-curves.svg"
                  alt=""
                />
              </div>
              <p className="content">
                Tăng trưởng 500% sau 2 năm
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="box_Pr_introduce">
          <div className="container">
            <div className="row_introduce">
              {ListItem &&
                ListItem.map((val) => (
                  <div className="item" key={val._id}>
                    <div className="item__img">
                      <img
                        width="100%"
                        height="100%"
                        style={{ objectFit: "cover" }}
                        src={"/assets/images/" + val.image}
                        alt=""
                      />
                    </div>
                    <div className="item__content">
                      <h2 className="item__content__title">{val.title}</h2>
                      <div
                        className="item__content__content"
                        dangerouslySetInnerHTML={{ __html: val.content }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="organizational-structure-title">Đội ngũ chuyên gia</h2>
          <div className="container2">
            <div className="box-team-of-experts">
              {data.map((val) => (
                <div className="item-experts" key={val.id}>
                  <div className="item__img">
                    <img
                      width="110px"
                      height="110px"
                      style={{ borderRadius: "50%" }}
                      src={`${URL}${val.image.url}`}
                      alt={val.name}
                    />
                  </div>
                  <div className="item__content">
                    <h3 className="name-experts">{val.name}</h3>
                    <div
                      className="content-experts"
                      dangerouslySetInnerHTML={{
                        __html: val.note,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ height: "50px" }} className="none" />
          <div className="box-find-us">
            <div className="find-us-left">
              <h1 className="find-us-title">Tìm chúng tôi</h1>
              <div className="box-address">
                <img
                  width="24px"
                  height="24px"
                  src="/assets/images/icont-map.png"
                />
                <p className="find-us-address">
                  Tầng 7, Golden Field Building, <br />
                  24 Nguyễn Cơ Thạch, Nam Từ Liêm, Hà Nội
                </p>
              </div>
            </div>
            <div className="find-us-right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9374362403164!2d105.76576981379881!3d21.03518919125538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b93c73ca9d%3A0x210784911132ebe!2zMjQgUGjhu5EgTmd1eeG7hW4gQ8ahIFRo4bqhY2gsIE3hu7kgxJDDrG5oLCBU4burIExpw6ptLCBIw6AgTuG7mWksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1637831847073!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mr-100" />
      <Footer />

      <style jsx>{`
        .backgroudReact {
          background-image: url(/assets/icon/Group2078.svg);
        }
        .img-icon-header {
          display: none;
        }
        .box_introduce {
          margin: 15px 0;
          height: auto;
          width: 100%;
          display: flex;
          margin: 60px 0;
          justify-content: space-between;
        }

        .introduce__left {
          width: 837px;
        }
        .introduce__left h1 {
          font-weight: 600;
          font-size: 32px;
          line-height: 48px;
          letter-spacing: -0.02em;
        }
        .introduce__left p {
          width: 662px;
          font-size: 14px;
          line-height: 21px;
          letter-spacing: -0.02em;
          color: #52575c;
        }
        .introduce__right {
          width: 211px;
          display: flex;
          align-items: center;
        }
        .organizational-structure-title {
          font-weight: 600;
          font-size: 32px;
          line-height: 48px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #25282b;
        }
        .box-organizational-structure {
          height: 525px;
          margin: 30px 0;
        }
        .box__company__scale {
          margin: 20px 0;
          display: flex;
          justify-content: space-around;
        }
        .company__scale__item {
          width: 238px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .company__scale__item .content {
          margin-top: 10px;
          text-align: center;
          font-size: 14px;
          line-height: 21px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #25282b;
        }
        .company__scale__item .item__img {
          height: 74px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 74px;
          background: #ffffff;
          box-shadow: 0px 2px 21px 3px rgba(0, 0, 0, 0.04);
        }
        .box_Pr_introduce {
          margin: 40px 0;
          padding: 81px 0;
          justify-content: space-between;
          background: linear-gradient(
            180deg,
            #f4f6fa 0%,
            rgba(244, 246, 250, 0) 83.85%
          );
        }
        .row_introduce {
          display: flex;
          justify-content: space-between;
        }
        .item {
          width: 341px;
          border-radius: 8px;
          height: 385px;
          background: #ffffff;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
        }
        .item + .item {
          margin-left: 27px;
        }
        .item__img {
          border-radius: 8px;
          overflow: hidden;
          width: 100%;
          height: 171px;
        }
        .item__content {
          width: 100%;
          height: calc(315px - 171px);
          padding: 20px 0;
        }
        .item__content__title {
          border-left: 4px solid #0bbee7;
          font-weight: 600;
          font-size: 22px;
          line-height: 33px;
          letter-spacing: -0.02em;
          color: #25282b;
          padding: 0 20px;
        }
        .item__content__content {
          padding: 0 24px;
          padding-top: 8px;
          font-weight: 400;
          font-size: 14px;
          line-height: 21px;
          letter-spacing: -0.02em;
          color: #52575c;
        }

        .box-team-of-experts {
          display: flex;
          flex-wrap: wrap;
          margin: 30px 0;
        }
        .item-experts {
          width: 22.63%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-right: 25px;
          align-items: center;
        }
        .item-experts:nth-child(4n) {
          margin-right: 0;
        }
        .box-team-of-experts .item-experts .item__img {
          width: 184px;
          height: 184px;
          background-image: url(/assets/images/Frame.png);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .name-experts {
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #000000;
        }
        .content-experts {
          font-size: 13px;
          line-height: 19px;
          text-align: center;
          letter-spacing: -0.02em;
        }
        .content-experts p {
          text-align: center;
        }
        .box-find-us {
          height: auto;
          width: 100%;
          margin: 60px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .box-address {
          display: flex;
        }
        .find-us-left {
          width: 280px;
        }
        .find-us-title {
          font-weight: 600;
          font-size: 32px;
          line-height: 48px;
          letter-spacing: -0.02em;
          color: #25282b;
        }
        .find-us-address {
          margin-left: 10px;
          font-size: 13px;
          line-height: 19px;
          letter-spacing: -0.02em;
          color: #000000;
        }
        .find-us-right {
          width: 677px;
          height: 340px;
        }

        footer {
          background: #f4f6fa;
          padding: 30px 0;
        }
        .mr-100 {
          margin-top: 100px;
        }
        @media screen and (max-width: 768px) {
          .box_Pr_introduce {
            margin: 26px 0;
            padding: 21px 0;
          }
          .img-icon-header {
            display: block;
          }
          .introduce__left h1 {
            font-size: 22px;
            line-height: 33px;
            margin: 16px 0;
          }
          .box_introduce {
            display: block;
          }
          .box-team-of-experts .box-find-us .row_introduce .item {
            width: 100%;

            height: auto;
          }
          .box-team-of-experts {
            width: 1080px;
            margin: 0;
          }
          .item__content {
            height: auto;
          }
          .introduce__left {
            width: 100%;
          }
          .introduce__left p {
            width: 100%;
          }
          .introduce__right {
            margin: auto;
          }
          .flex {
            display: block;
          }
          .box__company__scale {
            flex-direction: column;
            align-items: center;
          }
          .company__scale__item {
            margin: 10px 0;
          }
          .asked-questions-right {
            width: auto;
            margin: 20px 0;
          }
          .box-organizational-structure {
            width: 100%;
            height: auto;
          }
          .btnmorefull {
            margin: auto;
            display: block;
          }
          .none {
            display: none;
          }
          .question-title {
            padding: 15px 0;
            line-height: 25px;
          }
          .introduce-item {
            height: auto;
            display: block;
          }
          .item-image {
            height: auto;
            width: 100%;
          }
          .item-content {
            width: 100%;
          }
          .row_introduce {
            display: block;
          }
          .row_introduce .item {
            width: 100%;
            height: auto;
            margin: 20px 0;
          }
          .item-experts {
            width: 21%;
            display: block;
            margin: 0;
            margin-right: 30px;
          }
          .item-experts p {
            margin: 0;
          }
          .box-team-of-experts::-webkit-scrollbar {
            display: none;
          }
          .name-experts {
            font-size: 14px;
          }
          .box-find-us {
            display: block;
            margin: 0;
          }

          .find-us-right {
            width: 100%;
            height: 172px;
          }
          .find-us-left {
            width: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .box-address {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .box-address img {
            display: block;
            margin: 0 auto;
          }
          .find-us-address {
            text-align: center;
          }
          .organizational-structure-title {
            font-size: 20px;
            line-height: 30px;
          }
          .container2 {
            width: 100%;
            overflow-x: scroll;
          }
          .content-experts {
            font-size: 12px;
            line-height: 18px;
          }
          .name-experts,
          .content-experts {
            text-align: left;
          }
          .box-team-of-experts .item-experts .item__img {
            width: 129px;
            height: 129px;
            background-size: cover;
            background-repeat: no-repeat;
          }
          .box-team-of-experts .item-experts .item__img img {
            width: 65px !important;
            height: 65px !important;
          }
          .item-experts {
          }
          .mr-100 {
            margin-top: 0;
          }
          .find-us-address {
            margin: 15px 0;
          }
          .find-us-title {
            font-size: 20px;
          }
          .box-team-of-experts::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export async function getServerSideProps() {
  const res = await get_members();
  const data = res.data;
  return {
    props: {
      data: data,
    },
  };
}

export default GioiThieu;
