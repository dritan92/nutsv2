import React from 'react';
import { render } from 'react-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import '../styles/slider-animations.css';
import '../styles/style.css';

const content = [
	{
		title: 'Why Australian Walnuts',
		description:
		   "- Free from Pesticides. \n - Free from chemical treatments. \n - 100%  sold in the year of harvest. \n - They taste better" ,
		image: 'http://premieraustralianwalnuts.com/wp-content/uploads/2017/01/walnut-768x551.jpg',
		user: 'Gezim Sherolli',
		userProfile: 'http://premieraustralianwalnuts.com/wp-content/uploads/2017/01/13639591_1428751343809103_185994446_o.jpg'
	},
	{
		title: 'Reviews from Customers',
		description:'Our office has been gifted Australian Premier nuts for a few years, and each year, that tin of nuts is our collective favorite holiday treat. Plus, eating a handful of nuts (and chocolate) doesnt make us feel quite as guilty as eating a slice of pie.',
		image: 'http://premieraustralianwalnuts.com/wp-content/uploads/2017/01/13566958_873233819447864_7643449791722821889_n.jpg',
		user: 'Saida Hoxha',
		userProfile: 'https://i.imgur.com/JSW6mEk.png'
	},
	{
		title: '2018 Walnuts',
		description:
		'Packaging is an important detail part of our business',
		button: 'Buy now',
		image: 'http://premieraustralianwalnuts.com/wp-content/uploads/2017/01/13606451_873233809447865_3799016443029891492_n.jpg',
		user: 'Bruno Vizovskyy',
		userProfile: 'https://i.imgur.com/4KeKvtH.png'
	}
];

export default (props) => {
  return(
    <article id = {props.id}>
      <h2 className="major">
        {props.title}
      </h2>
      <span className="image main">
        <img src={props.image} alt="" />
      </span>
    		<Slider className="slider-wrapper" autoplay = "4000">
    			{content.map((item, index) => (
    				<div
    					key={index}
    					className="slider-content"
    					style={{ background: `url('${item.image}') no-repeat center center` }}
    				>
    					<div className="inner">
    						<h1>{item.title}</h1>
    						<p>{item.description.split('\n').map((item, key) => {
										return <span key={key}>{item}<br/></span>
									})}</p>
								  <button>{item.button}</button>
    					</div>
    					<section>
    						<img src={item.userProfile} alt={item.user} />
    						<span>
    							Quoted by <strong>{item.user}</strong>
    						</span>
    					</section>
    				</div>
    			))}
    		</Slider>
    </article>
  )
}
