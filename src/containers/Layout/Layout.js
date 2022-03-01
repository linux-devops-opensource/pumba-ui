import React from 'react';
import { TheContent } from '../index';
import { Center, Flex, Box, Icon, Heading, Spacer, Image, Text, Button, VStack } from '@chakra-ui/react';
import pumbaIcon from '../../images/pumba-icon.png';
import { useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { DiAtlassian, DiJira, DiLinux, DiBitbucket, DiTerminal } from 'react-icons/di';

const iconList = [ DiLinux, DiAtlassian, DiJira, DiBitbucket ];

const TheLayout = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<div className="c-wrapper">
			{/* if u change header size remember to change it in theContent too
			unless i have found a better way */}
			<Flex
				as="header"
				pb="6"
				pt="3"
				pl="5"
				pr="5"
				position="fixed"
				w="100%"
				className="page-header"
				bg={colorMode === 'light' ? 'gray.200' : 'blue.900'}
			>
				<Spacer />
				<Center>
					<Image src={pumbaIcon} boxSize="40px" alt="pumba icon" m="1" />
					<Heading size="md"> PUMBA</Heading>
				</Center>
				<Spacer />
				<Box>
					<Button onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>
				</Box>
			</Flex>
			<Box pt="20" pr="3" pl="3" height="100vh">
				<TheContent />
			</Box>
			<Box
				as="footer"
				className="page-footer"
				position="fixed"
				bottom="0"
				w="100%"
				p="3"
				bg={colorMode === 'light' ? 'gray.200' : 'blue.900'}
			>
				<Spacer />
				<Center>
					<Heading size="sm">
						{<Icon as={DiTerminal} />} {`all rights reserved to linux - devops`.toLowerCase()}{' '}
						{iconList.map((ic, index) => <Icon as={ic} key={index} />)}
					</Heading>
					{/* <Spacer />
					<Heading size="xs"> {`all rights reserved to linux - devops`.toLowerCase()} </Heading> */}
				</Center>
				<Spacer />
			</Box>
		</div>
	);
};

export default TheLayout;
