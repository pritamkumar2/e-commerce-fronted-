import React from "react";


function CompanyPage() {
  return (
    <div className="CompanyPage">
      <header className="CompanyPage-header">
        <h1>About Our Company</h1>
      </header>
      <section className="CompanyPage-info">
        <div className="CompanyPage-about">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vel faucibus est, non varius libero. Phasellus fermentum enim ac
            lorem imperdiet, vitae interdum risus consectetur.
          </p>
          <p>
            Sed eget convallis sapien. Nullam malesuada, dolor eu varius
            dignissim, turpis nulla semper tortor, ut gravida mi lorem in
            metus.
          </p>
        </div>
        <div className="CompanyPage-team">
          <h2>Our Team</h2>
          <div className="CompanyPage-member">
            <img
              src="https://via.placeholder.com/100"
              alt="Team Member 1"
              className="CompanyPage-member-avatar"
            />
            <p>John Doe - CEO</p>
          </div>
          <div className="CompanyPage-member">
            <img
              src="https://via.placeholder.com/100"
              alt="Team Member 2"
              className="CompanyPage-member-avatar"
            />
            <p>Jane Smith - CTO</p>
          </div>
        </div>
      </section>
      <footer className="CompanyPage-footer">
        <h2>Contact Us</h2>
        <p>Email: info@example.com</p>
        <p>Phone: +1 123-456-7890</p>
      </footer>
    </div>
  );
}

export default CompanyPage;
