import React from "react";
import "./HesapStyle.css";

import { useToast } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import {
  FormControl,
  FormLabel,
   FormHelperText,
   Button,
   Input,
   InputGroup,
   InputLeftElement,
} from '@chakra-ui/react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'

function General(){
    const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  return (
    <>
      <Button onClick={onOpen} colorScheme='red' fontSize='lg' fontWeight='bold' marginTop={'20px'}>Hesabımı Sil</Button>
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>Hesabımı Sil?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Hesabınızı silmek istediğinizden emin misiniz?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Hayır
            </Button>
            <Button colorScheme='red' ml={3}>
              Evet
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )

}
export default General;