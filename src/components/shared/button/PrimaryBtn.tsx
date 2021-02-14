import React from 'react'
import { useStyletron } from 'baseui'
import { Button, ButtonProps } from 'baseui/button'

const PrimaryButton = (props: ButtonProps) => {
  const [, theme] = useStyletron()

  return (
    <Button
      {...props}
      kind="primary"
      size={'compact'}
      shape="pill"
      overrides={{
        BaseButton: {
          style: {
            ...theme.typography.font200,
            paddingTop: theme.sizing.scale100,
            paddingBottom: theme.sizing.scale100,
            boxShadow: `0 1px 2px rgba(0, 0, 0, 0.1)`,
            backgroundColor: theme.colors.positive500,
            ':hover': {
              backgroundColor: theme.colors.positive600,
            },
            ':focus': {
              backgroundColor: theme.colors.positive700,
            },
            ':active': {
              backgroundColor: theme.colors.positive700,
            },
          },
        },
      }}
    >
      {props.children}
    </Button>
  )
}

export default PrimaryButton
