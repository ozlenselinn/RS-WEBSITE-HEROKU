import React from "react";
import "./HesapStyle.css";

import { useToast } from '@chakra-ui/react'
import { PhoneIcon  } from '@chakra-ui/icons'
import {
  FormControl,
  FormLabel,
   FormHelperText,
   Button,
   Input,
   InputGroup,
   InputLeftElement,
   Textarea,
   Text,
} from '@chakra-ui/react'

function Bill(){
    const toast = useToast()
    let [value, setValue] = React.useState('')

    let handleInputChange = (e) => {
      let inputValue = e.target.value
      setValue(inputValue)
    }
    return(
        <>        
         <FormControl>
        <FormLabel className="Labels" 
        marginTop={'10px'} 
        fontSize={'21px'}>İsim</FormLabel>
        <Input id='name' type='text' />
        <FormHelperText>*Ödemeyi yapan kişinin ismi ve soyismi olmalıdır.</FormHelperText> 
               
        <Text mb='8px' className="Labels">Fatura Adresi: {value}</Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder='Faturanız için bir adres girniz.'        
        size='sm'
      />
        
        <FormLabel className="Labels"          
        fontSize={'21px'}>Telefon Numarası</FormLabel>
        <InputGroup>
            <InputLeftElement
            pointerEvents='none'
            children={<PhoneIcon  color='gray.300' />}
            />
            <Input id='tel' type='tel' />
        </InputGroup>               
        </FormControl>
         


        <div className="ButtonToast">
        <Button 
        className="Toast"
        colorScheme='green'
        size='lg' 
        height='48px'
        width='150px'
        marginTop={'20px'}    
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
    );

}
export default Bill;