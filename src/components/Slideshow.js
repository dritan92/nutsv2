import React from 'react';
import { render } from 'react-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import '../styles/slider-animations.css';
import styles from '../styles/style.css';

const content = [
	{
		title: 'Why Australian Walnuts',
		description:
		   "- Free from Pesticides. \n - Free from chemical treatments. \n - 100%  sold in the year of harvest. \n - They taste better" ,
		image: 'http://premieraustralianwalnuts.com/wp-content/uploads/2017/01/walnut-768x551.jpg',
		a: "https://www.facebook.com/premieraustralianwalnuts/",
		button: 'See more',
		user: 'Gezim Sherolli',
		userProfile: 'http://premieraustralianwalnuts.com/wp-content/uploads/2017/01/13639591_1428751343809103_185994446_o.jpg'
	},
	{
		title: 'Regular Crop Maintenance provides stable yields',
		description:"The middle of April is the time for the walnut harvest, a nut that should be in every house",
		image: 'https://scontent.fsyd3-1.fna.fbcdn.net/v/t1.0-9/13912337_896866890417890_5661337155155288709_n.jpg?oh=0346cc883ab598dc69f39e027c41862f&oe=5B45BA38',
		a: "https://www.facebook.com/premieraustralianwalnuts/",
		button: 'See more',
		user: 'Gezim Sherolli',
		userProfile: 'http://premieraustralianwalnuts.com/wp-content/uploads/2017/01/13639591_1428751343809103_185994446_o.jpg'
	},
	{
		title: '2018 Walnuts',
		description:
		'Packaging is an important detail part of our business',
		a: "https://www.facebook.com/premieraustralianwalnuts/",
		button: 'Buy now',
		image: 'http://premieraustralianwalnuts.com/wp-content/uploads/2017/01/13606451_873233809447865_3799016443029891492_n.jpg',
		user: 'Nezaqet Sherolli',
		userProfile: 'http://premieraustralianwalnuts.com/wp-content/uploads/2017/01/13639591_1428751343809103_185994446_o.jpg'
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
    		<Slider className="slider-wrapper" autoPlay="3000">
    			{content.map((item, index) => (
    				<div
    					key={index}
    					className="slider-content"
    					style={{ background: `url('${item.image}') no-repeat center center` }}
    				>
    					<div className="inner">
    						<h1 style = {styles.h1}>{item.title}</h1>
    						<p style = {styles.p}>{item.description.split('\n').map((item, key) => {
										return <span style = {styles.span} key={key}>{item}<br/></span>
									})}</p>
								<button style={styles.button}><a href={item.a}>{item.button}</a></button>
    					</div>
    					<section style = {styles.section}>
    						<img src={item.userProfile} alt={item.user} />
    						<span style = {styles.span}>
    							Quoted by <strong>{item.user}</strong>
    						</span>
    					</section>
    				</div>
    			))}
    		</Slider>
    </article>
  )
}
