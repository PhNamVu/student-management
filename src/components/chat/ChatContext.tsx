import React from 'react'

export const ChatContext = React.createContext({
  /* optional default value */
})
export const ChatProvider: React.FC<{}> = ({ children } : any) => {
  const msgState = useChatProvider()
  return (
    <ChatContext.Provider value={msgState}>{children}</ChatContext.Provider>
  )
}

export const useChatState = () => {
  return React.useContext(ChatContext)
}

function useChatProvider() {
  const [state, setState] = React.useState({
    heightInput: 42,
    after: null,
    isHasReachedBottom: true,
  })

  const setHeightInput = (height: any) => {
    setState({ ...state, heightInput: height })
  }

  const setAfter = (value: any) => {
    setState({ ...state, after: value })
  }

  //

  const hasReachedBottom = (value: any) => {
    setState({ ...state, isHasReachedBottom: value })
  }

  return {
    state,
    setHeightInput,
    setAfter,
    hasReachedBottom,
  }
}
