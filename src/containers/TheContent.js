import React, { Suspense, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// routes config
import routes from '../routes';
import { Grid } from '@chakra-ui/react';

const TheContent = () => {
	return (
		<main className="c-main">
			<Grid height="100%" width="100%">
				<Grid>
					<Suspense>
						<Switch>
							{routes.map((route, idx) => {
								return (
									route.component && (
										<Route
											key={idx}
											path={route.path}
											exact={route.exact}
											name={route.name}
											render={(props) => <route.component {...props} />}
										/>
									)
								);
							})}
						</Switch>
					</Suspense>
				</Grid>
			</Grid>
		</main>
	);
};

export default React.memo(TheContent);
