import Icon from '../Icons';
import styles from './styles.module.css';

export function Card({ variant = 'work', icon = 'work' }) {
	const HERO_COLORS = {
		work: styles.cardHeroWork,
		play: styles.cardHeroPlay,
		study: styles.cardHeroStudy,
		exercise: styles.cardHeroExercise,
		social: styles.cardHeroSocial,
		selfCare: styles.cardHeroSelfCare
	};

	const heroClass = HERO_COLORS[variant] || HERO_COLORS.work;

	const HERO_ICONS = {
		work: 'icon-work',
		play: 'icon-play',
		study: 'icon-study',
		exercise: 'icon-exercise',
		social: 'icon-social',
		selfCare: 'icon-self-care'
	};

	const heroIcon = HERO_ICONS[icon] || HERO_ICONS.work;

	return (
		<article className={`${styles.card} ${heroClass}`}>
			<div className={`${styles.cardHero}`}>
				<img src={`./public/images/${heroIcon}.svg`} alt='' />
			</div>
			<div className={styles.cardContent}>
				{/* content */}
				<div className={styles.cardTabs}>
					<span>Work</span>
					<span>
						<Icon.Dot />
					</span>
				</div>
				<div className={styles.cardText}>
					<h3>32hrs</h3>
					<p>Last Week - 36hrs</p>
				</div>
			</div>
		</article>
	);
}
