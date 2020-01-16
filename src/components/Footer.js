import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

function Footer() {
    return (
        <div className="Footer" id="contact">
            {/* <div style={{}} class="container">
                <div class="row align-items-start justify-content-md-center">
                    <div class="col-2">
                        React
                    </div>
                    <div class="col-2">
                        Angular
                    </div>
                    <div class="col-2">
                        Java
                    </div>
                    <div class="col-2">
                        Git
                    </div>
                </div>
            </div> */}
            <footer style={{ marginTop: -50 }} id="sticky-footer" class="py-4 bg-dark text-white-50">
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <a style={{ marginRight: 10 }} href="https://www.linkedin.com/in/jacoboreilly23/"><FontAwesomeIcon sytle={{color: '#8D8741'}} icon={['fab', 'linkedin-in']} size="lg" /></a>
                    <a style={{ marginRight: 10 }} href="https://github.com/jacob-oreilly"><FontAwesomeIcon icon={['fab', 'github-alt']} size="lg" /></a>
                    <a target="_top" rel="noopener noreferrer" href="mailto:Jacob_OReilly@outlook.com"><FontAwesomeIcon icon="envelope" /></a>
                </div>
                <div style={{ marginBottom: 30 }} class="container text-center">
                    <small>Copyright &copy; Jacob O'Reilly</small>
                </div>
            </footer>
        </div>
    );
}

export default Footer;