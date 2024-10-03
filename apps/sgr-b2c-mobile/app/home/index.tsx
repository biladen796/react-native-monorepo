import { useLoginMutation } from '@/src/libs/networking/providers/swg-ticket-api';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'shared-ui-components';

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
      <Button
        theme={'blue'}
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
        }}>
        Login
      </Button>
    </View>
  );
}
