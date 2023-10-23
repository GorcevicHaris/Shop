import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div class="footer">
      <div class="footer-row">
        <div class="footer-column">
          <div class="footer-title">COMPANY NAME</div>
          <div className="column">
            <p>Here you can use rows and columns</p>
            <p>to organize your footer content.</p>
            <p>Lorem ipsum dolor sit amet, </p>
            <p> consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="footer-column">
          <div class="footer-title">PRODUCTS</div>
          <ul class="footer-list">
            <li>
              <a class="footer-link" href="https://angular.io/">
                Angular
              </a>
            </li>
            <li>
              <a class="footer-link" href="https://react.dev/">
                React
              </a>
            </li>
            <li>
              <a class="footer-link" href="https://vuejs.org/">
                Vue
              </a>
            </li>
            <li>
              <a class="footer-link" href="https://laravel.com/">
                Laravel
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <div class="footer-title">USEFUL LINKS</div>
          <ul class="footer-list">
            <li>
              <a class="footer-link" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Settings
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Orders
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Help
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <div class="footer-title">CONTACT</div>
          <p>New York, NY 10012, US</p>
          <p>info@example.com</p>
          <p>+ 01 234 567 88</p>
          <p>+ 01 234 567 89</p>
        </div>
      </div>
    </div>
  );
}
