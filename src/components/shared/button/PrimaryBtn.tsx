import React from 'react'
import { useStyletron } from 'baseui'
import { Button, ButtonProps } from 'baseui/button'

const PrimaryButton = (props: ButtonProps) => {
  const [, theme] = useStyletron()

  return (
    <Button
      {...props}
      kind="primary"
      size={'large'}
      shape="pill"
      overrides={{
        BaseButton: {
          style: {
            ...theme.typography.font200,
            paddingTop: theme.sizing.scale100,
            paddingBottom: theme.sizing.scale100,
            boxShadow: `0 1px 2px rgba(0, 0, 0, 0.1)`,
            color: 'black',
            backgroundColor: '#F1F1F1',
            ':hover': {
              backgroundColor: '#FFDC60',
            },
            ':focus': {
              backgroundColor: '#FFDC60',
            },
            ':active': {
              backgroundColor: '#FFDC60',
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
