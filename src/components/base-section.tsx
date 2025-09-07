interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode,
  hasFullWidth?: boolean,
  className?: string,
}

export function Section({ children, hasFullWidth = false, className = '', ...props }: SectionProps) {
  return (
    <section className={`w-full ${hasFullWidth ? 'py-4' : 'p-4'} bg-white ${className}`} {...props}>
      {children}
    </section>
  )
}