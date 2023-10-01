import "../css/TermsPage.css";

export default function TermsPage(){
  return(
    <div className="terms-container">
      <h1 className="terms-heading">Terms and Conditions</h1>

      <div className="terms-section">
        <h2>1. Introduction</h2>
        <p>Welcome to Eljay's Shop. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms and Conditions.</p>
      </div>

      <div className="terms-section">
        <h2>2. Intellectual Property Rights</h2>
        <p>All content on this website, including text, graphics, logos, images, and software, is the property of Eljay's Shop and is protected by international copyright laws.</p>
      </div>

      <div className="terms-section">
        <h2>3. Products and Services</h2>
        <p>Eljay's Shop offers a variety of products and services. All purchases are subject to our <a href="/return-policy">Return Policy</a>.</p>
      </div>

      <div className="terms-section">
        <h2>4. Pricing and Payment</h2>
        <p>Prices for our products and services are subject to change without notice. We accept payment through various methods, as specified during the checkout process.</p>
      </div>

      <div className="terms-section">
        <h2>5. Shipping and Delivery</h2>
        <p>For information about shipping and delivery, please refer to our <a href="/shipping-policy">Shipping Policy</a>.</p>
      </div>

      <div className="terms-section">
        <h2>6. Returns and Refunds</h2>
        <p>For information about returns and refunds, please refer to our <a href="/return-policy">Return Policy</a>.</p>
      </div>

      <div className="terms-section">
        <h2>7. Privacy</h2>
        <p>We are committed to protecting your privacy. Any personal information you provide will be handled in accordance with our <a href="/privacy-policy">Privacy Policy</a>.</p>
      </div>

      <div className="terms-section">
        <h2>8. Governing Law</h2>
        <p>These Terms and Conditions are governed by and construed in accordance with the laws of [Your Country].</p>
      </div>

      <div className="terms-section">
        <h2>9. Changes to Terms and Conditions</h2>
        <p>We reserve the right to update, change, or replace any part of these Terms and Conditions. It is your responsibility to check this page periodically for changes.</p>
      </div>

      <div className="terms-section">
        <h2>10. Contact Us</h2>
        <p>If you have any questions about these Terms and Conditions, please contact us at [Your Contact Information].</p>
      </div>
    </div>
);
}

