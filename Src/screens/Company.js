

import {View, Button,Text} from 'react-native';
//import {launchImageLibrary} from 'react-native-image-picker';
import React, { useState } from 'react'


// const options = {
//   title: 'Select Image',
//   type: 'library',
//   options: {
//     maxHeight: 200,
//     maxWidth: 200,
//     selectionLimit: 1,
//     mediaType: 'photo',
//     includeBase64: false,
//   },
// };

const Company = () => {
//   const openGallery = async () => {
//     const images = await launchImageLibrary(options);
//     console.log(images);
//     const formdata = new FormData();
//     formdata.append('file', {
//       uri: images.assets[0].uri,
//       type: images.assets[0].type,
//       name: images.assets[0].fileName,
//     });
    // let res = await fetch('http://10.0.2.2:8000/api/fileupload', {
    //   method: 'post',
    //   body: formdata,
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // });
    // let responseJson = await res.json();
    // console.log(responseJson, 'responseJson');
//  }; 

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
      }}>
      <Button title="Company"  />
      <Text >Hello COMPANY</Text>
      
    </View>
  );
};

export default Company;