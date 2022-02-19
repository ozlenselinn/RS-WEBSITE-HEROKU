import React from "react";
import "./HesapStyle.css";

import { Field, Form, Formik} from 'formik';
import { useToast } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,   
  Button,
  Input,
  InputGroup,
  InputRightElement
 
} from '@chakra-ui/react'

function Password(){
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const toast = useToast()

    function validateName(value) {
        let error
        if (!value) {
          error = 'Name is required'
        } else if (value !== 'yeni şifre') {
          error = "Girdiğiniz şifre ile uyuşmamaktadır! "
        }
        return error
      }

    return(
        <>
        <FormControl>
        <FormLabel  className="Labels" 
        marginTop={'10px'} 
        fontSize={'21px'}>Mevcut Şifre</FormLabel>
        <Input isDisabled placeholder='**eski şifre**' id='name' type='text' />

        <FormLabel className="Labels" 
        marginTop={'20px'} 
        fontSize={'21px'}>Yeni Şifre</FormLabel>
        <InputGroup size='md' >
        <Input
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='Şifre Giriniz'
        />
        <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Sakla' : 'Göster'}
            </Button>
        </InputRightElement>
        </InputGroup>
        <FormHelperText>* 8 Haneli <br/>
        * En az 1 rakam, 1 büyük harf ve 1 karakter</FormHelperText>
        </FormControl>

        <Formik
        initialValues={{ name: 'Şifre' }}
        onSubmit={(values, actions) => {
            setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
            }, 1000)
        }}
        >
        {(props) => (
            <Form>
            <Field name='name' validate={validateName}>
                {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                    <FormLabel 
                     className="Labels" 
                     marginTop={'40px'} 
                     fontSize={'21px'}
                     htmlFor='name' >Yeni Şifre (Tekrar)</FormLabel>
                     <InputGroup size='md' >
                    <Input {...field} id='name' placeholder='name' />
                    <FormErrorMessage marginLeft={'20px'} marginRight={'50px'}>{form.errors.name}</FormErrorMessage>
                    <InputRightElement width='6rem'>
            <Button 
            h='1.75rem' 
            size='sm' 
            onClick={handleClick}
            isLoading={props.isSubmitting}
            type='submit'>
            { 'Kontrol Et' }
            </Button>
        </InputRightElement>
                    </InputGroup>
                </FormControl>
                )}
            </Field>
            
            
        
            </Form>
        )}
        </Formik>
        <div className="ButtonToast">
        <Button 
        className="Toast"
        colorScheme='green'
        size='lg' 
        marginTop={'20px'}
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
    );

}
export default Password;