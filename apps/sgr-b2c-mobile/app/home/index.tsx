import { useLoginMutation } from '@/src/libs/networking/providers/swg-ticket-api';
import React from 'react';
import { Text, View } from 'react-native';
import {
  Button,
  StyledAvatar,
  StyledLinearGradient,
} from 'shared-ui-components';

export default function Home() {
  const [login] = useLoginMutation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Home page</Text>
      <StyledAvatar />
      <Button
        theme={'dark'}
        text="Login"
        // color={'yellow'}
        // backgroundColor={'red'}
        fontWeight={'700'}
        onPress={async () => {
          const data = new FormData();
          data.append('username', 'test');
          data.append('username', 'test');
          try {
            const payload = await login(data).unwrap();
            console.log('resolved', payload);
          } catch (error) {
            console.error('rejected', error);
          }
        }}
      />
      <StyledLinearGradient />
    </View>
  );
}
