import React, { ReactNode } from 'react'
import { useStyletron } from 'baseui'
import { StatefulTooltip } from 'baseui/tooltip'

export interface TooltipStatusProps {
  content: ReactNode
  label: ReactNode
}

const TooltipStatus = ({ content, label }: TooltipStatusProps) => {
  const [, theme] = useStyletron()

  return (
    <StatefulTooltip
      placement="bottomLeft"
      content={content}
      overrides={{
        Body: {
          style: {
            borderTopLeftRadius: theme.sizing.scale100,
            borderTopRightRadius: theme.sizing.scale100,
            borderBottomRightRadius: theme.sizing.scale100,
            borderBottomLeftRadius: theme.sizing.scale100,
            backgroundColor: theme.colors.mono900,
          },
        },
        Inner: {
          style: {
            borderTopLeftRadius: theme.sizing.scale100,
            borderTopRightRadius: theme.sizing.scale100,
            borderBottomRightRadius: theme.sizing.scale100,
            borderBottomLeftRadius: theme.sizing.scale100,
            backgroundColor: theme.colors.mono900,
          },
        },
      }}
    >
      {label}
    </StatefulTooltip>
  )
}

export default TooltipStatus
