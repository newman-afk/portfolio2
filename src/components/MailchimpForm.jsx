import { Col, Row } from "react-bootstrap";

const MailchimpForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col sm={12} xl={5}>
            <h3>
              Subscribe to our Newsletter<br></br> & Never miss latest updates
            </h3>
          </Col>
          <Col xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input type="email" placeholder="Email Address" />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default MailchimpForm;
