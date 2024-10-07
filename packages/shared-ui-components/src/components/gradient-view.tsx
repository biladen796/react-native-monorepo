import { Text } from 'tamagui';
import { LinearGradient } from 'tamagui/linear-gradient';

import { StyledTouchableOpacity } from './styled-touchable';

export function StyledLinearGradient() {
  return (
    <StyledTouchableOpacity activeOpacity={0.8}>
      <LinearGradient
        width="$9"
        height="$4"
        marginTop="$2"
        borderRadius="$4"
        colors={['skyblue', 'blue']}
        start={[1, 1]}
        display="flex"
        alignItems="center"
        justifyContent="center"
        end={[0, 0]}>
        <Text fontSize="$4" fontWeight="600">
          Linear button
        </Text>
      </LinearGradient>
    </StyledTouchableOpacity>
  );
}
