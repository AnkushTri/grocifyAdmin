import React from 'react'
import styled from "styled-components"

const BrandBanner = () => {
  return (
    <Wrapper>
      <div className="slider">slider</div>
      <form action="">
        <div className="form-sec">
          <div className="title">
            Banner Type <span>*</span>
          </div>
          <select name="banner-type" id="">
            <option value="">-Select Banner Type-</option>
            <option title="Standard Banner">bnaer1</option>
          </select>
        </div>
        <div className="form-sec">
          <div className="title">
            Image Caption<span>*</span>
          </div>
          <input type="text" name="image-caption" required/>
        </div>
        <div className="form-sec">
          <div className="title">
            Upload Image<span>*</span>
          </div>
          <input type="file" name="image-caption" />
        </div>
        <div className="form-sec">
          <label htmlFor="radio">Link To</label>
          <input type="radio" name="" id="" />
          <button disabled>None</button>
          <input type="radio" name="" id="" />
          <button disabled>Category</button>
          <input type="radio" name="" id="" />
          <button className="selected">Store</button>
          <input type="radio" name="" id="" />
          <button disabled>Offer</button>
        </div>
        <div className="form-sec">
          <select name="banner-type" id="">
            <option value="">-Select Store-</option>
            <option title="Standard Banner">PIzza</option>
          </select>
        </div>
        <div className="form-sec">
          <label htmlFor="radio">
            Status<span>*</span>
          </label>
          <input type="radio" name="" id="" />
          <button disabled className="selected">
            Active
          </button>
          <input type="radio" name="" id="" />
          <button disabled>Inactive</button>
        </div>
        <div className="form-sec">
          <label htmlFor="radio">
            Banner Availablity<span>*</span>
          </label>
          <input type="radio" name="" id="" />
          <button disabled className="selected">
            All Location
          </button>
          <input type="radio" name="" id="" />
          <button disabled>Selected Location</button>
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
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  .slider {
    width: 20%;
    background-color: grey;
    height: 100vh;
  }
  form {
    margin: 1rem;
    width: 80%; /* Adjust the width of the form */
    padding: 0 2rem; /* Add padding to the form */
    box-sizing: border-box; /* Ensure padding is included in the width */
  }
  .form-sec {
    margin-bottom: 1.5rem; /* Add margin between form sections */
  }
  .title {
    margin-bottom: 0.5rem; /* Add margin below titles */
  }

  input[type="radio"] {
    margin: 0 0.2rem 0 0.7rem;
  }
  input[type="text"] {
    width: 35%;
    margin-right: 1rem;
    padding: 0.3rem 0.5rem;
  }
  select {
    width: 37.2%;
    margin-right: 1rem;
    padding: 0.3rem 0.5rem;
  }

  button {
    border-radius: 0.3rem;
    color: white;
    padding: 0.3rem 0.5rem;
    background-color: #f87408; /* Apply default button background color */
    border: none;
  }
  .form-sec input[type="radio"]:checked + button {
    background-color: green; /* Change button background color when radio is checked */
  }
  .submit {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
  .save {
    background-color: #f87408;
    border-color: #f87408;
    cursor: pointer;
  }
  .clear {
    color: #f87408;
    background-color: #fcf8f5;
    border: 1px solid #f8932e;
    cursor: pointer;
  }
  span {
    color: #f87408;
  }
  label {
    margin-right: 0.2rem;
  }
`;

export default BrandBanner