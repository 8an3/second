import { Box, Flex, Avatar, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useDisclosure, useColorModeValue, Stack, useColorMode, Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box><img src='./logo-white.svg' alt='quotes' width={'100px'}></img></Box>
          <Link to='/'>Can-Am, Ski-Doo & Suzuki</Link>
          <Link to='/Manitou'>Manitou</Link>
          <Link to='/seadoo'>Sea-Doo</Link>
          <Link to='/Used'>Used</Link>
          <Link to='/Switch'>Switch</Link>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'./logo-white.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'./logo-white.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p></p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem><Link to='/'>Can-Am, Ski-Doo & Suzuki</Link></MenuItem>
                  <MenuItem><Link to='/Manitou'>Manitou</Link></MenuItem>
                  <MenuItem><Link to='/seadoo'>Sea-Doo</Link></MenuItem>
                  <MenuItem><Link to='/Used'>Used</Link></MenuItem>
                  <MenuItem><Link to='/Switch'>Switch</Link></MenuItem>      
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}