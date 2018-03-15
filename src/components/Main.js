import React , {Component} from 'react';
import Article from './Article'
import SubArticle from './SubArticle';
import Slideshow from './Slideshow';



class Main extends Component{

  render(){
    return(
      <div id="main">

        <Slideshow id = "intro"
                    title = "Home" />


           <Article
             id="about"
             title="About"
             image = {"/images/about.jpg"}
             body = "Gezim Sherolli, and his wife Nezaqet migrated to Australia from a small town in Albania in 1996. Similar to many migrants from Albania at this time, he and Nezaqet began working as orchard labourers in the Shepparton (Goulburn Valle) area. Along with his wife he worked long hours with little if any time off to establish a life for himself and his family here in Australia, all the time having a dream to establish an orchard of his own."

             description = "The orchard he had in mind was a walnut orchard, as walnuts were an integral part of his rural upbringing in Albania. Coupled with generations of traditional knowledge and expertise from his homeland, Gezim engaged the services of Australia’s foremost walnut experts in establishing the Goulburn Valley’s largest planting of walnuts. This inherited knowledge, combined with leading edge horticultural research and development defines Gezim’s goal to becoming the best Walnut grower in Australia, if not the world.

             Growing walnuts is not just a job or a means for business success to Gezim, it is an ingrained passion which has been fermenting through his ancestral veins for hundreds of years, This genuine desire to advance the production and consumption of one of the worlds most positive health foods is, a quest that shall never cease for Gezim."/>

             <SubArticle
                id="chandler-walnuts"
                title="Chandler Walnuts"
                image= {"/images/chandler.jpg"}
                body = "The University of California introduced the Chandler walnut in 1979 and named it after W. H. Chandler, Professor of Pomology, at U. C. Davis. Today it is the most prominent variety grown in California. The Chandler walnut is large, smooth and oval shaped with a good shell seal. Chandlers are known around the world and are highly prized by buyers for their extra light and high quality kernels. Harvested mid to late season, Chandlers provide one of the highest kernel yields of any of the varieties."
                description = "Find some of the characteristics of this type of walnut below"
                col0title = "Shell"
                col1title = "Color"
                col2title = "Yield"
                col3title = "Flavor"
                col4title = "HalvesYield"


                col0 = "Thin"
                col1 = "variable"
                col2 ="48-51%"
                col3="Mild"
                col4="Percentage High"
              />
            <SubArticle
               id="cisco-walnuts"
               title="Cisco Walnuts"
               image= "./img/walnut1.jpg"
               body = "Cisco is an extremely late leafing, laterally fruitful walnut. Due to its moderate yield, Cisco is mainly used as a pollenizer for Chandler and Howard walnuts. In growth habit, the tree is semi-upright and relatively small. The Cisco nut and kernel are similar to Franquette, but slightly larger. Kernel color can be variable."

               col0title = "Brief"
               col1title = "Estimated Chilling Requirement"
               col2title = "Pollination"
               col3title = "Harvest Season"
               col4title = "Flavor"


               col0 = "Late leafing, relatively small tree, used as pollenizer for Chandler and Howard. Nut and kernel similar to Franquette."
               col1 = "700-1000 hours below 45°F"
               col2 ="Partly self-fruitful"
               col3="Within fruit type very late"
               col4="Percentage High"
             />

             <Article
               id="review"
               title="Reviews and more.."
               image = {"/images/home-walnut.jpg"}
               body = "Why Australian Walnuts are better:"
               description = " – Free from Pesticides
                              –  Free from chemical treatments

                              –  100%  sold in the year of harvest

                              –  They taste better"/>


          <article id="contact">
            <h2 className="major">Contact</h2>
            <form method="post" action="#">
              <div className="field half first">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field half">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="field">
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="4"></textarea>
              </div>
              <ul className="actions">
                <li><input type="submit" value="Send Message" className="special" /></li>
                <li><input type="reset" value="Reset" /></li>
              </ul>
            </form>
            <ul className="icons">
              <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
              <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            </ul>
          </article>


          <article id="elements">
            <h2 className="major">Elements</h2>

            <section>
              <h3 className="major">Text</h3>
              <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
              This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
              This is <u>underlined</u> and this is code: <code>for (;;) {` ... `}</code>. Finally, <a href="#">this is a link</a>.</p>
              <hr />
              <h2>Heading Level 2</h2>
              <h3>Heading Level 3</h3>
              <h4>Heading Level 4</h4>
              <h5>Heading Level 5</h5>
              <h6>Heading Level 6</h6>
              <hr />
              <h4>Blockquote</h4>
              <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>
              <h4>Preformatted</h4>

            </section>

            <section>
              <h3 className="major">Lists</h3>

              <h4>Unordered</h4>
              <ul>
                <li>Dolor pulvinar etiam.</li>
                <li>Sagittis adipiscing.</li>
                <li>Felis enim feugiat.</li>
              </ul>

              <h4>Alternate</h4>
              <ul className="alt">
                <li>Dolor pulvinar etiam.</li>
                <li>Sagittis adipiscing.</li>
                <li>Felis enim feugiat.</li>
              </ul>

              <h4>Ordered</h4>
              <ol>
                <li>Dolor pulvinar etiam.</li>
                <li>Etiam vel felis viverra.</li>
                <li>Felis enim feugiat.</li>
                <li>Dolor pulvinar etiam.</li>
                <li>Etiam vel felis lorem.</li>
                <li>Felis enim et feugiat.</li>
              </ol>
              <h4>Icons</h4>
              <ul className="icons">
                <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
              </ul>

              <h4>Actions</h4>
              <ul className="actions">
                <li><a href="#" className="button special">Default</a></li>
                <li><a href="#" className="button">Default</a></li>
              </ul>
              <ul className="actions vertical">
                <li><a href="#" className="button special">Default</a></li>
                <li><a href="#" className="button">Default</a></li>
              </ul>
            </section>

            <section>
              <h3 className="major">Table</h3>
              <h4>Default</h4>
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Item One</td>
                      <td>Ante turpis integer aliquet porttitor.</td>
                      <td>29.99</td>
                    </tr>
                    <tr>
                      <td>Item Two</td>
                      <td>Vis ac commodo adipiscing arcu aliquet.</td>
                      <td>19.99</td>
                    </tr>
                    <tr>
                      <td>Item Three</td>
                      <td> Morbi faucibus arcu accumsan lorem.</td>
                      <td>29.99</td>
                    </tr>
                    <tr>
                      <td>Item Four</td>
                      <td>Vitae integer tempus condimentum.</td>
                      <td>19.99</td>
                    </tr>
                    <tr>
                      <td>Item Five</td>
                      <td>Ante turpis integer aliquet porttitor.</td>
                      <td>29.99</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="2"></td>
                      <td>100.00</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <h4>Alternate</h4>
              <div className="table-wrapper">
                <table className="alt">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Item One</td>
                      <td>Ante turpis integer aliquet porttitor.</td>
                      <td>29.99</td>
                    </tr>
                    <tr>
                      <td>Item Two</td>
                      <td>Vis ac commodo adipiscing arcu aliquet.</td>
                      <td>19.99</td>
                    </tr>
                    <tr>
                      <td>Item Three</td>
                      <td> Morbi faucibus arcu accumsan lorem.</td>
                      <td>29.99</td>
                    </tr>
                    <tr>
                      <td>Item Four</td>
                      <td>Vitae integer tempus condimentum.</td>
                      <td>19.99</td>
                    </tr>
                    <tr>
                      <td>Item Five</td>
                      <td>Ante turpis integer aliquet porttitor.</td>
                      <td>29.99</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="2"></td>
                      <td>100.00</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </section>

            <section>
              <h3 className="major">Buttons</h3>
              <ul className="actions">
                <li><a href="#" className="button special">Special</a></li>
                <li><a href="#" className="button">Default</a></li>
              </ul>
              <ul className="actions">
                <li><a href="#" className="button">Default</a></li>
                <li><a href="#" className="button small">Small</a></li>
              </ul>
              <ul className="actions">
                <li><a href="#" className="button special icon fa-download">Icon</a></li>
                <li><a href="#" className="button icon fa-download">Icon</a></li>
              </ul>
              <ul className="actions">
                <li><span className="button special disabled">Disabled</span></li>
                <li><span className="button disabled">Disabled</span></li>
              </ul>
            </section>

            <section>
              <h3 className="major">Form</h3>
              <form method="post" action="#">
                <div className="field half first">
                  <label for="demo-name">Name</label>
                  <input type="text" name="demo-name" id="demo-name" value="" placeholder="Jane Doe" />
                </div>
                <div className="field half">
                  <label for="demo-email">Email</label>
                  <input type="email" name="demo-email" id="demo-email" value="" placeholder="jane@untitled.tld" />
                </div>
                <div className="field">
                  <label for="demo-category">Category</label>
                  <div className="select-wrapper">
                    <select name="demo-category" id="demo-category">
                      <option value="">-</option>
                      <option value="1">Manufacturing</option>
                      <option value="1">Shipping</option>
                      <option value="1">Administration</option>
                      <option value="1">Human Resources</option>
                    </select>
                  </div>
                </div>
                <div className="field half first">
                  <input type="radio" id="demo-priority-low" name="demo-priority" checked />
                  <label for="demo-priority-low">Low</label>
                </div>
                <div className="field half">
                  <input type="radio" id="demo-priority-high" name="demo-priority" />
                  <label for="demo-priority-high">High</label>
                </div>
                <div className="field half first">
                  <input type="checkbox" id="demo-copy" name="demo-copy" />
                  <label for="demo-copy">Email me a copy</label>
                </div>
                <div className="field half">
                  <input type="checkbox" id="demo-human" name="demo-human" checked />
                  <label for="demo-human">Not a robot</label>
                </div>
                <div className="field">
                  <label for="demo-message">Message</label>
                  <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
                </div>
                <ul className="actions">
                  <li><input type="submit" value="Send Message" className="special" /></li>
                  <li><input type="reset" value="Reset" /></li>
                </ul>
              </form>
            </section>

          </article>

      </div>
    )
  }
}
export default Main;
