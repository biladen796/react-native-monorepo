import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'shared-ui-components';
import { useAppDispatch, useAppSelector } from '@/src/hooks/redux-hooks';
import { appActions } from '@/src/redux/app-slice';

export default function NotFoundScreen() {
  const { status } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{status}</Text>
      <Button
        onPress={async () => {
          const data = await new Promise<'logged-in' | 'not-logged-in'>(
            (resolve) => {
              setTimeout(() => {
                resolve('logged-in');
              }, 1000);
            },
          );
          dispatch(appActions.saveLoginState(data));
        }}
        theme="blue">
        Login
      </Button>
    </View>
  );
}
