import React, { Suspense, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// routes config
import routes from '../routes';
import { Grid } from '@chakra-ui/react';

const TheContent = () => {
	return (
		<Grid className="c-main" as="main" width="100%" position="relative">
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
	);
};

export default React.memo(TheContent);
