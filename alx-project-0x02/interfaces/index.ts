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