interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
}

const getVariantStyles = (variant: ButtonProps['variant'] = 'primary') => {
  const variants = {
    primary: 'bg-green-900 text-white hover:bg-[#092519]',
    secondary: 'bg-green-100 text-green-800 hover:bg-green-200',
    outline: 'border border-gray-200 shadow text-[#092519] bg-transparent hover:bg-gray-100',
    ghost: 'text-[#092519] bg-transparent hover:bg-green-100',
    destructive: 'bg-red-600 text-white hover:bg-red-700'
  }
  return variants[variant]
}

const getSizeStyles = (size: ButtonProps['size'] = 'md') => {
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  }
  return sizes[size]
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className,
  ...props 
}: ButtonProps) {
  const variantStyles = getVariantStyles(variant)
  const sizeStyles = getSizeStyles(size)
  
  return (
    <button 
      className={`${variantStyles} ${sizeStyles} hover:cursor-pointer rounded-[10px] transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}