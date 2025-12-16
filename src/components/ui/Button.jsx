import { Button } from 'antd';

export const PrimaryButton = ({ children, onClick, icon, className = "" }) => (
  <Button
    type="primary"
    size="large"
    onClick={onClick}
    icon={icon}
    className={`!bg-primary hover:!bg-primary/90 !text-white !border-none !h-12 !px-8 !rounded-lg !font-semibold !shadow-lg hover:!shadow-xl !transition-all ${className}`}
  >
    {children}
  </Button>
);

export const SecondaryButton = ({ children, onClick, icon, className = "" }) => (
  <Button
    size="large"
    onClick={onClick}
    icon={icon}
    className={`!bg-white !text-primary !border-2 !border-primary hover:!bg-primary hover:!text-white !h-12 !px-8 !rounded-lg !font-semibold !transition-all ${className}`}
  >
    {children}
  </Button>
);