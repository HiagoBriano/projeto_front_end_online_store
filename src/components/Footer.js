import { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="card-body text-white bg-secondary">
        <blockquote className="blockquote mb-0 text-center ">
          <p>Projeto idealizado pela Trybe</p>
          <footer className="blockquote-footer text-white">
            Feito por Hiago Briano <br />
            <a
              href="https://www.linkedin.com/in/hiago-briano/"
              target="_blank"
              className="badge bg-primary"
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
            >
              Linkedin
            </a>
            <a
              href="https://github.com/HiagoBriano"
              target="_blank"
              className="badge bg-dark"
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
            >
              GitHub
            </a>
          </footer>
        </blockquote>
      </div>
    );
  }
}
