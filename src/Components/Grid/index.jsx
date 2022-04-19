import styles from './styles.module.css';

export function Grid({ children, col = 1 }) {
	const GRID_COLUMNS = {
		1: styles.gridColumn1,
		2: styles.gridColumn2,
		3: styles.gridColumn3,
		4: styles.gridColumn4
	};

	const columnClass = GRID_COLUMNS[col] || GRID_COLUMNS[1];
	return <div className={`${styles.grid} ${columnClass}`}>{children}</div>;
}
