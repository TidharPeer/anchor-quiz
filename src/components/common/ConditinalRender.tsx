export interface ConditionalRenderProps {
  condition?: boolean;
  children?: React.ReactNode;
}
const ConditionalRender = ({ children, condition = false }: ConditionalRenderProps) => {
  if (condition) {
    return <>{children}</>;
  }
  return null;
};

export default ConditionalRender;
