import { useEffect } from 'react'

export const useEventListener = ({ contract, handler, eventName }) => {
  useEffect(() => {
    if (contract) {
      contract.on(eventName, handler)
      return () => contract.removeListener(eventName, handler)
    }
  }, [contract, eventName, handler])
}
