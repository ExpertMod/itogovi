import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    ButtonGroup,
    useDisclosure,
    Box,  
  } from '@chakra-ui/react'
  import { CalendarIcon,CheckCircleIcon,DragHandleIcon } from '@chakra-ui/icons'
  import {Routes, Route, Link} from 'react-router-dom'
  import './drawer.css'

  

export function DrawerMenu({onClose, isOpen} : {onClose : ()=>void, isOpen : boolean}) {
    return (
      <>
        <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Менеджер Задач</DrawerHeader>
            <DrawerBody>
              <div>
                <Box display='flex' flexDirection='column'gap='10px' >
                <div ><Link to='/tasks'><Button colorScheme='whatsapp'><CheckCircleIcon boxSize={5}/>Задачи</Button></Link> </div>
                <div ><Link to='/categories'><Button colorScheme='facebook'><DragHandleIcon boxSize={5}/>Категории</Button></Link></div>
                <div ><Link to='/dashboard'><Button colorScheme='purple'><CalendarIcon boxSize={5}/>График</Button></Link></div>
                </Box>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }