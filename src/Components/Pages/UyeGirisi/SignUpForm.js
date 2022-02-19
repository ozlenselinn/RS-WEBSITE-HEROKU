import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      hasAgreed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="formCenter">
        <form onSubmit={this.handleSubmit} className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              AD VE SOYAD
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Ad ve Soyadınızı Giriniz."
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              ŞİFRE
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Şifrenizi Giriniz."
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-MAIL ADRESİ
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Email Adresinizi Giriniz."
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />{" "}
              
              <a href="null" className="formFieldTermsLink">
                Şartlar ve Koşulları 
              </a>
              {" "} okudum ve kabul ediyorum.
            </label>
          </div>

          <div className="formField">
            <button className="formFieldButton">Kayıt Ol</button>{" "}
            <Link to="/sign-in" className="formFieldLink">
              Zaten hesabım var.
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUpForm;
