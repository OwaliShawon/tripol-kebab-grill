import React from 'react';
import Image from "next/image";
import styles from "../styles/About.module.css";

const about = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.ourStory__wrapper}>
					<div className={styles.ourStory__img}>
						<Image
							src="/img/menu/Philadelphia.jpg"
							alt=""
							width="500"
							height="490"
						/>
					</div>
					<div className={styles.ourStory__info}>
						<h3 className={styles.ourStory__title}>
							Welcome To <br /> The Star Kebab
						</h3>
						<p className={styles.ourStory__text}>
							Way back in the 14th century, the Moghuls invaded Hindukush,The
							land of milk, honey and other rich treasures. In return, they left
							behind a trail of destruction, and well, the kebab.The open fire
							was too unpredictable, so the even, dry heat of the tandoor took
							its place. The kebab was, at the time, just meat sprinkled with
							salt, which was then barbecued and gobbled up by this army on the
							move. But soon it caught the fancy of Indian chefs. And by their
							very capable hands, the kebab was perfected into a sublime art.
							They choose the finest meats, created an amazing array of
							marinades in which these meats were transformed into savory
							goodness.
						</p>
					</div>
				</div>
			</div>

			<div className={styles.container}>
				<div className={styles.info_features}>
					<div className={styles.card_feature}>
						<div className={styles.card_feature_header}>
							<h1 className={styles.title}>Make it Simple</h1>
						</div>
						<div className={styles.card_feature_body}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
								neque molestiae eius explicabo mollitia tempore reiciendis, vel,
								sequi.
							</p>
						</div>
					</div>
					<div className={styles.card_feature}>
						<div className={styles.card_feature_header}>
							<h1 className={styles.title}>Make it Simple</h1>
						</div>
						<div className={styles.card_feature_body}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
								neque molestiae eius explicabo mollitia tempore reiciendis, vel,
								sequi.
							</p>
						</div>
					</div>
					<div className={styles.card_feature}>
						<div className={styles.card_feature_header}>
							<h1 className={styles.title}>Make it Simple</h1>
						</div>
						<div className={styles.card_feature_body}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
								neque molestiae eius explicabo mollitia tempore reiciendis, vel,
								sequi.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.container_dish}>
				<div className={styles.dish_image} alt="brown couch" />
				<div className={styles.dish_content}>
					<h1>Our Dishes</h1>
					<p className={styles.dish_text}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
						natus reprehenderit corrupti? Expedita soluta, nobis provident
						quidem repellat corporis consectetur modi odio quas deleniti ad vel
						praesentium optio autem quia.
					</p>
				</div>
			</div>
		</>
	);
};

export default about;
