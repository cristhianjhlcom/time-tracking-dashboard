import { Aside } from './Components/Aside';
import { Card } from './Components/Card';
import { Container } from './Components/Container';
import { Grid } from './Components/Grid';

export function App() {
	return (
		<Container>
			<Aside />
			<Grid col={3}>
				<Card variant='work' icon='work' />
				<Card variant='play' icon='play' />
				<Card variant='study' icon='study' />
				<Card variant='exercise' icon='exercise' />
				<Card variant='social' icon='social' />
				<Card variant='selfCare' icon='selfCare' />
			</Grid>
		</Container>
	);
}
