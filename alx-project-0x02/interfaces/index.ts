// interfaces/index.ts
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: CardProps) => void;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
}

export interface PostProps {
  userId: number;
  id?: number;
  title: string;
  content: string;
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}