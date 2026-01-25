import { Button as AntButton } from 'antd'

export default function Button({
  children,
  variant = 'primary',
  loading = false,
  disabled = false,
  onClick,
  htmlType = 'button',
  block = false,
}) {
  return (
    <AntButton
      type={variant}
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      htmlType={htmlType}
      block={block}
    >
      {children}
    </AntButton>
  )
}
