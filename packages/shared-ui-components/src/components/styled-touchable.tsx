import { TouchableOpacity } from 'react-native';
import { styled } from 'tamagui';

const StyledTouchableOpacity = styled(TouchableOpacity, {
  name: 'StyledTouchableOpacity',
  backgroundColor: 'unset',
  alignItems: 'center',
  flexDirection: 'row',
  display: 'flex',
  variants: {
    size: {
      '...size': (name, { tokens }) => {
        return {
          height: tokens.size[name],
          borderRadius: tokens.radius[name],
          gap: tokens.space[name].val * 0.2,
        };
      },
    },
  } as const,
});

export { StyledTouchableOpacity };
