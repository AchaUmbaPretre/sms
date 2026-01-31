import { Result } from 'antd'
import Button from './Button'

export default function ErrorState({
  title = 'Une erreur est survenue',
  subTitle,
  onRetry,
}) {
  return (
    <Result
      status="error"
      title={title}
      subTitle={subTitle}
      extra={
        onRetry && (
          <Button variant="primary" onClick={onRetry}>
            Réessayer
          </Button>
        )
      }
    />
  )
}
