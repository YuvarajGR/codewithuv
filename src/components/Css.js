import React from "react";
import "./Css.css";
import Nav from "./nav";
import Sidebar from "./Sidebar";

const Css = () => {
  return (
    <div>
          <Nav />
          <Sidebar />
      <div className="css-one">
        <div className="css-two">
        </div>
        <div className="css-three">
          <h1>Information & History of CSS:</h1>
          <li>
            Have you ever wondered about the websites you interact with daily
            basis, how do they look without any styling? Well, without Cascading
            Style Sheets (CSS) this is what this website looks like
          </li>
          <li>
            CSS was created by Håkon Wium Lie to allow web designers to change
            their website's layout, colours, and fonts. Originally, websites
            were meant to be used by researchers only, so the decoration did not
            matter. However, the need to make them look nice grew when websites
            became widespread
          </li>
          <h3>Key features of CSS:</h3>
          <ol>
            <li>Used to style and layout webpages</li>
            <li>Written in HTML and XML</li>
            <li>
              The last version was CSS 2.1, but seeing the scope everything now
              comes under the umbrella of CSS without any version number
            </li>
            <li>Reusability of the same rules for multiple HTML documents</li>
          </ol>
          <h1>CSS Properties :-</h1>
          <h3>1.CSS background style.</h3>

          Example:

          <img
            src={
              "https://miro.medium.com/v2/resize:fit:720/format:webp/0*6XD7v-7gdDg5uld2.png"
            }
            alt=""
          />
          <h3>2.CSS Colors.</h3>
          <li>
            We have been glimpsing this property for quite a while in the
            Introduction portion; so you must be aware that this property can
            help us set the colour of the text
          </li>
          Example:
          <img
            src={
              "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-colors/rgb%20color%20code.webp"
            }
            alt=""
          />
          <h3>3.CSS Borders.</h3>
          <p>
            Border property helps in creating borders around the text. Various
            properties in it are discussed in this module
          </p>
          <h4>Border Style.</h4>
          <p>It specifies the type of border a text is going to have.</p>
          
          Example:

          <img
            src={
              "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-borders/border%20styles.webp"
            }
            alt=""
          />
          <h3>4.CSS Images.</h3>
          <p>Images help in enhancing website looks therefore CSS provided image styling at our convenience.</p>
          Syntex:
            <img src={"https://static.studytonight.com/cascading-style-sheet/images/css-syntax-1.png"} alt="" />

            <h3>5.CSS Video Embedding.</h3>
            <p>With the help of CSS and HTML, we can use videos on our website. Here’s an example of the same</p>
            Example:

            <img src={"https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-video-embedding/css%20video%20embedding%20code.webp"} alt="" />
            
            <h3>6.CSS Fonts.</h3>
            <p>Fonts decide how your text would look on the screen; depending on the website different kinds of fonts are used. Let’s look at major font attributes.</p>

            <h4>CSS Font Colour.</h4>
            <p>It helps in changing the colour of the font. We have seen this in detail in the colour section. Refer to this: CSS colours</p>
            <h4>CSS Font Size.</h4>
            <p>This property sets the size of the font. It also has predefined sizes like small, large, larger, medium, etc. The units of font size are em, px and %</p>

            Example:
            <img src={"https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-video-embedding/css%20video%20embedding%20code.webp"} alt="" />
            <h3>7.CSS Padding:</h3>
            <p>CSS works on a box model structure, where elements are packed according to the sequence of the image.</p>
            <img src={"https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-padding/css%20box%20model.webp"} alt="" />
            <p>The padding property defines the space between the element and the border. The background colour isn’t affected in the case of padding. Here’s an</p>

            Example:
            This is how your website looks without padding.
            <img src={"https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-padding/css%20without%20padding.webp"} alt="" />
        
        </div>
      </div>
    </div>
  );
};

export default Css;
