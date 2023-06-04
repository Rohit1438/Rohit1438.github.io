

import { Fade, ScaleFade, Slide, SlideFade, Collapse } from '@chakra-ui/react'





function CollapseEx() {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <>
        <Button onClick={onToggle}>Click Me</Button>
        <Collapse in={isOpen} animateOpacity>
          <Box
            p='40px'
            color='white'
            mt='4'
            bg='teal.500'
            rounded='md'
            shadow='md'
          >
            <Lorem count={1} />
          </Box>
        </Collapse>
      </>
    )
  }