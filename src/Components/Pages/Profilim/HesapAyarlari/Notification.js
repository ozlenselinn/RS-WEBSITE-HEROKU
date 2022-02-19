import React from "react";
import "./HesapStyle.css";

import { useToast } from '@chakra-ui/react'
import { Checkbox,
    Stack, 
     } from '@chakra-ui/react'

import {
  FormControl,
  FormLabel,
   FormHelperText,
   Button,
   Input,
   InputGroup,
   InputLeftElement,
   Switch,
} from '@chakra-ui/react'

function Notification(){
    const toast = useToast()
    const [checkedItems, setCheckedItems] = React.useState([false, false])

  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked
    return(
        <>        
        {/* <FormControl display='flex' alignItems='center'>
                        <FormLabel 
                        htmlFor='email-alerts' 
                        mb='0'
                        marginTop={'40px'}>
                          Bildirim almak istiyorum.
                        </FormLabel>
                        <Switch id='email-alerts' colorScheme='green' size='lg' marginTop={'40px'} />

                        <FormLabel htmlFor='email-alerts' mb='0' >
                          Email almak istiyorum.
                        </FormLabel>
                        <Switch id='email-alerts' colorScheme='green' size='lg' />
                      </FormControl> */}

    <Checkbox marginTop={'20px'}
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
      >
        <p className="bilP">Bildirim almak istiyorum.</p> 
      </Checkbox>
      <Stack pl={6} mt={1} spacing={1}>
        <Checkbox
          isChecked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
        >
          <p className="bilP">Email almak istiyorum.</p> 
        </Checkbox>
        <Checkbox
          isChecked={checkedItems[1]}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
        >
         <p className="bilP">App bildirimi almak istiyorum.</p> 
        </Checkbox>
      </Stack>
        
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
export default Notification;