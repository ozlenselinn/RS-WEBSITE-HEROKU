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

function ProfileSet(){
    const toast = useToast()
    return(
        <>        
        <FormControl>
        <FormLabel className="Labels" 
        marginTop={'10px'} 
        fontSize={'21px'}>İsim</FormLabel>
        <Input id='name' type='text' />
        
        <FormLabel className="Labels"
        fontSize={'21px'}>Soyisim</FormLabel>
        <Input id='surname' type='text' />
        
        <FormLabel className="Labels" 
        htmlFor='email' 
        fontSize={'21px'}>Email</FormLabel>
        <InputGroup>
            <InputLeftElement
            pointerEvents='none'
            children={<EmailIcon color='gray.300' />}
            />
            <Input id='email' type='email' />
        </InputGroup>        
        <FormHelperText>*Emailiniz kimse ile paylaşılmaz.</FormHelperText>       
        </FormControl>
        
        <div className="ButtonToast">
        <Button 
        className="Toast"
        colorScheme='green'
        size='lg' 
        height='48px'
        width='150px'  
        bgGradient='linear(to-r, teal.500, green.500)'
        _hover={{
            bgGradient: 'linear(to-r, red.500, yellow.500)',
        }}      
        onClick={() =>
            toast({
            title: 'Değişiklikler Kaydedildi.',
            description: "Yaptığınız değişklikler başarıyla kaydedildi.",
            status: 'success',
            duration: 9000,
            isClosable: true,            
            })
        }
        >
        Kaydet
        </Button>
        </div>       
        </>
    )

}
export default ProfileSet;