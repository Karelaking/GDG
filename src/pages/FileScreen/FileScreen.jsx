import React from 'react'
import { FileZone } from '../../components/Dropzone';
import { Text } from '@mantine/core';

const FileScreen = () => {
  return (
    <div>
      <Text
      size='xl'
      align='center'
      mt='lg'
      mb='lg'
      >
        Drop or Select your files here
      </Text>
      <FileZone/>
    </div>
  )
}

export default FileScreen
