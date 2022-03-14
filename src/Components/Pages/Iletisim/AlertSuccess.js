import {
    Alert,
   // AlertIcon,
    //AlertTitle,
    //AlertDescription,
  } from "@chakra-ui/react";

export default function AlertSuccess (props) {
    return (
        <Alert status='success'>
        Mailiniz gönderilmiştir. Lütfen mail ktunuzu kontrol ediniz.
      </Alert>
    );
   }