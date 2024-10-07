import { Button, ButtonProps } from 'tamagui';

const StyledButton = (props: ButtonProps & { text?: string }) => {
  return <Button {...props}>{props.text}</Button>;
};

export default StyledButton;
