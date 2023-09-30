import '../css/about.css';


export default function About() {
  return(
    <>
    <div className='bar bar-left'></div>
    <div className="about-content">
      <div className='about-welcome-container'>
        <h2 className="title">About Eljay's Shop</h2>
        <p className='about-txt'>Welcome to Eljay's Shop, where style meets innovation, and every visit is a delightful discovery. Our curated collection brings together a blend of fashion, technology, and playfulness, ensuring there's something special for everyone.</p>
      </div>
      <div className='about-story-container'>
        <h2>Our Story</h2>
        <p className='about-txt'>Founded with a passion for quality and a keen eye for trends, Eljay's Shop started as a small boutique with big dreams. Over the years, it has grown into a beloved destination for those seeking a unique shopping experience.</p>
      </div>
      <div className='about-offer-container'>
        <h2>What We Offer</h2>
        <p className='about-txt-gapped'><b>Fashion</b>: Elevate your style with our carefully selected range of clothing, from chic everyday wear to elegant statement pieces. Our diverse collection ensures you'll find the perfect outfit for any occasion.</p>
        <p className='about-txt-gapped'><b>Jewelry</b>: Adorn yourself with our exquisite range of rings, bracelets, and accessories. Each piece is crafted with precision and love, adding a touch of elegance to your ensemble.</p>
        <p className='about-txt-gapped'><b>Electronics</b>: Stay connected and entertained with our cutting-edge electronics selection. From the latest gadgets to reliable essentials, we bring you the best in technology.</p>
        <p className='about-txt-gapped'><b>Toys</b>: Ignite imagination and create moments of joy with our handpicked assortment of toys. Whether for play or learning, our toys are designed to inspire and entertain.</p>
      </div>
      <div className='about-reasons-container'>
        <h2>Why Choose Eljay's Shop</h2>
        <p className='about-txt-gapped'><b>1.</b> Elevate your style with our carefully selected range of clothing, from chic everyday wear to elegant statement pieces. Our diverse collection ensures you'll find the perfect outfit for any occasion.</p>
        <p className='about-txt-gapped'><b>2.</b> Adorn yourself with our exquisite range of rings, bracelets, and accessories. Each piece is crafted with precision and love, adding a touch of elegance to your ensemble.</p>
        <p className='about-txt-gapped'><b>3.</b> Stay connected and entertained with our cutting-edge electronics selection. From the latest gadgets to reliable essentials, we bring you the best in technology.</p>
        <p className='about-txt-gapped'><b>4.</b> Ignite imagination and create moments of joy with our handpicked assortment of toys. Whether for play or learning, our toys are designed to inspire and entertain.</p>

      </div>
      <div className='about-visit-container'>
        <h2>Visit Us</h2>
        <p className='about-txt-gapped'> explore our online platform from the comfort of your home. We can't wait to welcome you into our vibrant world of fashion, technology, and play.</p>

      </div>
    </div>
    <div className='bar bar-right'></div>
    </>
  );
};