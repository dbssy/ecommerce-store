interface IContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: IContainerProps) {
  return <div className="max-w-7xl mx-auto">{children}</div>;
}
