import { SearchIcon } from "@chakra-ui/icons";
import { Box, Link, Input, Button} from "@chakra-ui/react"

 function Dropdown() {

    return (
        <Box  mb="10px" align="center">
         <Box 
          mb="6px"
          w="100%" 
          h="70px" 
          p="20px"
          display={["none","none","flex"]}
          justifyContent="space-between"
          fontSize={["14px"]}>
          <Box  w="59%" display="flex" justifyContent="space-evenly" >
                <Link color="gray" fontSize={['8px','9px','15px']} style={{ textDecoration: 'none' }} >NEW ARRIVALS</Link>
                <Link color="gray" fontSize={['8px','9px','15px']} style={{ textDecoration: 'none' }}  href="#mens">DESIGNERS</Link>
                <Link color="gray" fontSize={['8px','9px','15px']} style={{ textDecoration: 'none' }}  href="#">CLOTHING</Link>
                <Link color="gray" fontSize={['8px','9px','15px']} style={{ textDecoration: 'none' }}  href="#">SHOES</Link>
                <Link color="gray" fontSize={['8px','9px','15px']} style={{ textDecoration: 'none' }}  href="#">BAGS</Link>
                <Link color="gray" fontSize={['8px','9px','15px']} style={{ textDecoration: 'none' }}  href="#">ACCESSORIES</Link>
                <Link color="gray" fontSize={['8px','9px','15px']} style={{ textDecoration: 'none' }}  href="#">FESTIVE SEASON</Link>
                <Link color="red" fontSize={['8px','9px','15px']} style={{ textDecoration: 'none' }}  href="#">SALE</Link>
          </Box>
                <Box fontSize={['12px']} mr="60px" p="10px"  w="18%" display="flex" justifyContent="right" alignItems="center" border="1px solid lightgray" >
                <SearchIcon boxSize="18px" pos="absolute"/>
                <Input variant='unstyled'  placeholder='Search for...'/>    
                <Button display="none"></Button>
                <Box mt="180px" zIndex={999}>
          </Box>
          </Box>      
      </Box>
      <hr /> 
      </Box>
    )
}

export default Dropdown