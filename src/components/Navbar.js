import {
  Box, Flex, Avatar, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useDisclosure, useColorModeValue, Stack, useColorMode, Center,
} from '@chakra-ui/react';
import { ChevronRightIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';


export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
  

          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={HamburgerIcon}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
              />
              <MenuList>
                <MenuItem><Link to='/'>Can-Am, Ski-Doo & Suzuki</Link></MenuItem>
                <MenuItem><Link to='/Manitou'>Manitou</Link></MenuItem>
                <MenuItem><Link to='/seadoo'>Sea-Doo</Link></MenuItem>
                <MenuItem><Link to='/Used'>Used</Link></MenuItem>
                <MenuItem><Link to='/Switch'>Switch</Link></MenuItem>
              </MenuList>
            </Menu>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
    
        </Flex>
      
    </Flex>
    </Box>
    </>
  );
}