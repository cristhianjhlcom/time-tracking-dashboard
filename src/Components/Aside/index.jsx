import styles from './styles.module.css';

export function Aside() {
	return (
		<aside className={styles.asideContainer}>
			<div className={styles.asideContent}>
				<img src='./public/images/image-jeremy.png' alt='' />
				<div>
					<p>Report for</p>
					<h2>Jeremy Robson</h2>
				</div>
			</div>
			<nav className={styles.asideMenu}>
				<ul>
					<li>
						<span>Daily</span>
					</li>
					<li>
						<span className={styles.active}>Weekly</span>
					</li>
					<li>
						<span>Monthly</span>
					</li>
				</ul>
			</nav>
		</aside>
	);
}
