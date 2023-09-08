import {
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
import { DrawerMenu } from '../components/drawer/drawer'
import { HamburgerIcon } from '@chakra-ui/icons'
import './mainLayout.css'




export function MainLayout ({children}: any) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div className="">
            <Button className='menu' colorScheme='blue' onClick={onOpen}>
            <HamburgerIcon boxSize={9}/>
        </Button>
        <DrawerMenu onClose={onClose} isOpen={isOpen} />
        {children}
        </div>
    )
}