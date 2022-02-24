import React from 'react';
import { Box, Center, Text, VStack, Table, Thead, Tr, Th, Td, Tag } from '@chakra-ui/react';
import { connect } from 'react-redux';
// import ResultsError from '../Errors/resultsError';
import Results from './results';

const Status = (props) => {
	console.log(props.packagesInfo);

	// React.useEffect(
	// 	() => {
	// 		console.log('HEYYYYYY' + props.packagesInfo['cookie-signature-1.0.6.tgz'].info);
	// 	},
	// 	[ props.packagesInfo ]
	// );

	return (
		<div>
			<Center>
				<VStack>
					<Table variant="simple">
						<Thead>
							<Tr>
								<Th>package name</Th>
								<Th>status</Th>
							</Tr>
						</Thead>
						{Object.values(props.packagesInfo).map((p) => (
							<Tr>
								<Td>{p.name}</Td>
								<Td>
									<Tag
										variant="outline"
										colorScheme={p.finished ? 'green' : p.failed ? 'red' : 'blue'}
									>
										{p.info}
									</Tag>
								</Td>
							</Tr>
						))}
					</Table>

					<Box>
						<Results />
					</Box>
				</VStack>
			</Center>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		processResults: state.processResults,
		packagesInfo: state.packagesInfo
	};
};

export default connect(mapStateToProps)(Status);
