interface PageProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode,
  className?: string,
}

export function Page({ children, className = '', ...props }: PageProps) {
  return (
    <main className={`flex flex-col min-h-[calc(100vh-4rem)] ${className}`} {...props}>
      {children}
    </main>
  )
}