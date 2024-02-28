import React, { useState } from "react";
import styled from "styled-components";

const PaymentSetting = () => {

    const [on,setON]=useState(false);
   const handleClick=()=>{
    setON(!on)
   }

  return (
    <Wrapper>
      <div className="slidebar">slidebar</div>
      <div className="payment-setting">
        <div className="payment-status">
          <div className="title">
            Active Online Payment <span>*</span>
          </div>
          <div className="btn">
            <button className={on ? "on" : "disable"} onClick={handleClick}>
              ON
            </button>
            <button className={on ? "disable" : "off"} onClick={handleClick}>
              OFF
            </button>
          </div>
        </div>
        <div className="payment-detail">
          <div className="payment-detait-title">Razorpay Detail</div>
          <div className="details">
            <div className="secret-info">
              <div className="title">
                {" "}
                Key id <span>*</span>
              </div>
              <input type="text" name="" id="" />
            </div>
            <div className="secret-info">
              <div className="title">
                {" "}
                Secret key <span>*</span>
              </div>
              <input type="text" name="" id="" />
            </div>
          </div>
        </div>
        <div className="payment-detail">
          <div className="payment-detait-title">Paytm Detail</div>
          <div className="details">
            <div className="secret-info">
              <div className="title">
                {" "}
                Merchant id <span>*</span>
              </div>
              <input type="text" name="" id="" />
            </div>
            <div className="secret-info">
              <div className="title">
                {" "}
                Secret key <span>*</span>
              </div>
              <input type="text" name="" id="" />
            </div>
          </div>
        </div>
        <hr />
        <div className="submit">
          <button className="save" type="submit">
            Save
          </button>
          <button className="clear" type="clear">
            Clear
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  .slidebar {
    width: 20%;
    height: 100vh;
    background-color: grey;
  }
  .payment-setting {
    width: 80%;
    margin:2rem 0;
    margin-left: 2rem;
  }
  .payment-status {
    display: flex;
    gap: 2rem;
    @media screen and (max-width:600px) {
        gap:1rem;
    }
  }
  .payment-detail {
    width: 95%;
    border: 1px solid grey;
    margin: 1rem 0;
  }
  .payment-detait-title {
    border-bottom: 1px solid grey;
    font-size: 1.5rem;
    font-weight: 900;
    color: #f87408;
    padding: 0.3rem;
    background-color: #e4e1e1;
  }
  .details {
    display: flex;
    gap: 2rem;
    margin: 1rem;
  }
  input[type="text"] {
    width: 90%;
    padding: 0.2rem 0.5rem;
    margin: 0.3rem 0;
  }
  button {
    border-radius: 0.3rem;
    color: white;
    padding: 0.3rem 0.5rem;
    border: none;
  }
  .submit {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
  .save {
    background-color: #f87408;
    border-color: #f87408;
  }
  .clear {
    color: #f87408;
    background-color: #fcf8f5;
    border: 1px solid #f8932e;
  }
  span {
    color: #f87408;
  }
  hr {
    margin-top: 3rem;
    width: 95%;
  }
  .btn {
    border: 1px solid grey;
  }
  .btn button {
    border: none !important;
    border-radius: 0;
    color: #0b0b0a;
    cursor: pointer;
  }
  .on {
    background-color: green;
  }
  .off {
    background-color: red;
  }
  .disable {
    background-color: #e4e1e1;
    color: white;
  }
`;

export default PaymentSetting;
