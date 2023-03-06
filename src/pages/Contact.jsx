import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-header">
            Let's Talk
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><a href="tel:09365270413">Call Me</a></li>
            <li className="list-group-item"><a href="mailto:almacleto23@gmail.com">Send me an email</a></li>
            <li className="list-group-item"><a href="skype:live:.cid.494d298a2fc71e80">skype: live:.cid.494d298a2fc71e80</a></li>
            <li className="list-group-item"><a href="https://www.linkedin.com/in/alma-cleto-eyzy11/">Connect with me in LinkedIn</a></li>
            <li className="list-group-item"><a href="https://www.onlinejobs.ph/jobseekers/info/1239484">onlinejobs:</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
